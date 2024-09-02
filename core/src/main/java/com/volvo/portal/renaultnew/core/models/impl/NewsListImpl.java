package com.volvo.portal.renaultnew.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.adobe.cq.wcm.core.components.models.List;
import com.adobe.cq.wcm.core.components.models.ListItem;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.search.Predicate;
import com.day.cq.search.PredicateConverter;
import com.day.cq.search.PredicateGroup;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.eval.JcrPropertyPredicateEvaluator;
import com.day.cq.search.eval.PathPredicateEvaluator;
import com.day.cq.search.eval.TypePredicateEvaluator;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.volvo.portal.renaultnew.core.models.NewsList;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceWrapper;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.wrappers.ValueMapDecorator;
import org.apache.sling.jcr.resource.api.JcrResourceConstants;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.via.ResourceSuperType;

import javax.jcr.Session;
import java.util.*;
import java.util.stream.Collectors;

@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {NewsListImpl.class, ComponentExporter.class},
        resourceType = NewsListImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
@Slf4j
public class NewsListImpl implements NewsList {

    static final String RESOURCE_TYPE = "volvo-aem-renault-new/components/renault/content/newsgrid";

    @Self
    @Required
    private SlingHttpServletRequest request;

    @OSGiService
    @Required
    private QueryBuilder queryBuilder;

    @Self
    @Via(type = ResourceSuperType.class)
    private List coreList;

    private java.util.List imageListItems;

    @Override
    public Collection<NewsItem> getNews() {
        if (imageListItems == null) {
            if (coreList == null) {
                imageListItems = Collections.EMPTY_LIST;
            } else {
                // Calls the AEM WCM Core Components List component's `getListItems()` methods, transforms them into ImageListItem objects.
                imageListItems = coreList.getListItems().stream()
                        .map(listItem -> new NewsItem(request.getResourceResolver(), listItem))
                        .filter(imageListItem -> !imageListItem.isEmpty())
                        .collect(Collectors.toList());
            }
        }
        log.info("imageList: {}", imageListItems);
        return ImmutableList.copyOf(imageListItems);
    }

    @Override
    public Collection<ListItem> getListItems() {
        return coreList.getListItems();
    }

    public class NewsItem implements ListItem {
        private static final String IMAGE_RESOURCE_TYPE = "volvo-aem-renault-new/components/image";
        final PageManager pageManager;
        private final Page page;
        private final String linkUrl;
        private final Resource image;
        private final ListItem wrappedListItem;

        public NewsItem(ResourceResolver resourceResolver, ListItem wrappedListItem) {
            pageManager = resourceResolver.adaptTo(PageManager.class);
            assert pageManager != null;
            this.page = pageManager.getContainingPage(wrappedListItem.getPath());
            this.image = findPageComponentResources(page, IMAGE_RESOURCE_TYPE, 1).stream()
                    .map(r -> new SimpleImageComponentResource(r, getTitle()))
                    .findFirst()
                    .orElse(null);
            this.wrappedListItem = wrappedListItem;
            this.linkUrl = Objects.requireNonNull(wrappedListItem.getLink()).getURL();
        }

        public boolean isEmpty() {
            return getImage() == null;
        }

        public String getLinkUrl() {
            return linkUrl;
        }

        public final Resource getImage() {
            return image;
        }

        @Override
        public String getTitle() {
            return wrappedListItem == null ? "default title" : wrappedListItem.getTitle();
        }

        @Override
        public String getDescription() {
            return this.page.getProperties().get("shortDescription", this.page.getDescription());
        }
    }

    public java.util.List<Resource> findPageComponentResources(final Page page, final String slingResourceType, int limit) {
        final java.util.List<Resource> componentResources = new ArrayList<>();

        if (page == null) {
            // If page is null, there is no where to search
            return componentResources;
        }

        final Map<String, String> params = ImmutableMap.<String, String>builder().
                put(PathPredicateEvaluator.PATH, page.getContentResource().getPath()).
                put(TypePredicateEvaluator.TYPE, JcrConstants.NT_UNSTRUCTURED).
                put(JcrPropertyPredicateEvaluator.PROPERTY, JcrResourceConstants.SLING_RESOURCE_TYPE_PROPERTY).
                put(JcrPropertyPredicateEvaluator.PROPERTY + "." + JcrPropertyPredicateEvaluator.VALUE, slingResourceType).
                put(PredicateConverter.GROUP_PARAMETER_PREFIX + "." + PredicateGroup.PARAM_LIMIT, String.valueOf(limit)).
                put(PredicateConverter.GROUP_PARAMETER_PREFIX + "." + PredicateGroup.PARAM_GUESS_TOTAL, "true").
                put(Predicate.ORDER_BY, "@jcr:path").
                put(Predicate.ORDER_BY + "." + Predicate.PARAM_SORT, Predicate.SORT_ASCENDING).
                build();

        final long start = System.currentTimeMillis();

        final Iterator<Resource> resources = queryBuilder.createQuery(PredicateGroup.create(params),
                request.getResourceResolver().adaptTo(Session.class)).getResult().getResources();

        // Handle QueryBuilder's leakingResourceResolver; Make sure to close it manually.
        ResourceResolver leakingResourceResolver = null;

        while (resources.hasNext()) {
            final Resource resource = resources.next();

            if (leakingResourceResolver == null) {
                leakingResourceResolver = resource.getResourceResolver();
            }

            componentResources.add(request.getResourceResolver().getResource(resource.getPath()));
        }

        if (leakingResourceResolver != null) {
            leakingResourceResolver.close();
        }
        return componentResources;
    }

    protected static class SimpleImageComponentResource extends ResourceWrapper {
        private static final String PN_FILE_REFERENCE = "fileReference";
        private static final String PN_ALT = "alt";

        private final ValueMap properties = new ValueMapDecorator(new HashMap<>());

        public SimpleImageComponentResource(final Resource resource, final String alt) {
            super(resource);

            // Copy the properties from the original image
            properties.putAll(resource.getValueMap());

            // Override the decorative configuration attributes
            properties.put(PN_ALT, alt);
            properties.put(Image.PN_IS_DECORATIVE, false);
            properties.put(Image.PN_DISPLAY_POPUP_TITLE, true);
            properties.put(Image.PN_TITLE_VALUE_FROM_DAM, false);
            properties.put(Image.PN_ALT_VALUE_FROM_DAM, false);
        }

        @Override
        public ValueMap getValueMap() {
            return properties;
        }

        @Override
        public <AdapterType> AdapterType adaptTo(Class<AdapterType> type) {
            if (type != ValueMap.class) {
                return super.adaptTo(type);
            }

            return (AdapterType) getValueMap();
        }
    }

    @Override
    public String getExportedType() {
        return NewsListImpl.RESOURCE_TYPE;
    }
}
