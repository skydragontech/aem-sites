package com.volvo.portal.renaultnew.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.ListItem;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.*;

import java.io.Serializable;
import java.util.*;
import java.util.stream.Collectors;

/** Model for the Structure List component */
@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {StructureListModel.class, ComponentExporter.class},
        resourceType = StructureListModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class StructureListModel implements ComponentExporter{

    private static final String FIXED_STATIC_LIST_OPTION = "static";
    private static final String MAX_SIZE_ZERO = "0";
    static final String RESOURCE_TYPE = "volvo-aem-renault-new/components/renault/structure/structurelist";

    @Self
    private com.adobe.cq.wcm.core.components.models.List list;

    @ScriptVariable
    private SlingHttpServletRequest request;

    @ScriptVariable
    private PageManager pageManager;

    @ChildResource
    private Resource linkDefinition;

    @ValueMapValue
    private String title;

    @ValueMapValue
    private String behaviour;

    @ValueMapValue
    private String listFrom;

    @ValueMapValue
    @Default(values = MAX_SIZE_ZERO)
    private String maxItems;

    @ValueMapValue
    private String orderBy;

    @ValueMapValue
    private String sortOrder;

    private SortOrder sortOrderObject;
    private OrderBy orderByObject;
    private Collection<ListItem> items;

    public boolean isStaticList() {
        if (listFrom != null) {
            return listFrom.equalsIgnoreCase(FIXED_STATIC_LIST_OPTION);
        }
        return Boolean.FALSE;
    }

    public Collection<ListItem> getListItems() {
        if (items == null) {
            items = Collections.unmodifiableCollection(Optional.ofNullable(list)
                    .map(com.adobe.cq.wcm.core.components.models.List::getListItems)
                    .orElse(Collections.emptyList())
                    .stream()
                    .collect(Collectors.toList()));
        }
        return new ArrayList<>(items);
    }

    public List<StructureListLinkDefinitionModel> getStaticListItems() {
        List<StructureListLinkDefinitionModel> listItems = new ArrayList<>();
        sortOrderObject = SortOrder.fromString(sortOrder);
        orderByObject = OrderBy.fromString(orderBy);
        if (linkDefinition != null) {
            listItems = getStaticListResource(listItems);
            listItems.sort(new ListSort(orderByObject, sortOrderObject));
        }
        return setMaxItems(listItems);
    }


    private List<StructureListLinkDefinitionModel> getStaticListResource(List<StructureListLinkDefinitionModel> listItems) {
        for (Resource r : linkDefinition.getChildren()) {
            final StructureListLinkDefinitionModel linkItem = r.adaptTo(StructureListLinkDefinitionModel.class);
            if (linkItem != null && linkItem.getLink() != null) {
                final String link = linkItem.getLink();
                linkItem.setTitle(getPageTitle(link));
                linkItem.setLastModifiedDate(getPageLastModifiedDate(link));
                linkItem.setLink(link);
                listItems.add(linkItem);
            }
        }
        return listItems;
    }

    public String getTitle() {
        return title;
    }

    public String getBehaviour() {
        return behaviour;
    }

    private String getPageTitle(String path) {
        if (path != null) {
            final Page page = pageManager.getContainingPage(path);
            if (page != null) {
                String navTitle = page.getNavigationTitle();
                if (navTitle == null) {
                    navTitle = page.getPageTitle();
                }
                if (navTitle == null) {
                    navTitle = page.getTitle();
                }
                if (navTitle == null) {
                    navTitle = page.getName();
                }
                return navTitle;
            }
        }
        return StringUtils.EMPTY;
    }

    private Calendar getPageLastModifiedDate(String path) {
        if (path != null) {
            Page page = pageManager.getContainingPage(path);
            if (page != null) {
                return page.getLastModified();
            }
        }
        return Calendar.getInstance();
    }

    private List<StructureListLinkDefinitionModel> setMaxItems(final List<StructureListLinkDefinitionModel> listItems) {
        List<StructureListLinkDefinitionModel> tmpListItems = new ArrayList<>();
        if (Integer.parseInt(maxItems) != 0) {
            for (StructureListLinkDefinitionModel item : listItems) {
                if (tmpListItems.size() < Integer.parseInt(maxItems)) {
                    tmpListItems.add(item);
                } else {
                    break;
                }
            }
        }
        return tmpListItems.isEmpty() ? listItems : tmpListItems;
    }

    private enum SortOrder {
        ASC("asc"),
        DESC("desc");

        private final String value;

        SortOrder(String value) {
            this.value = value;
        }

        /** Getting a SortOrder by a String
         *
         * @param value a String representing a SortOrder option
         * @return SortOrder */
        public static SortOrder fromString(String value) {
            for (SortOrder s : values()) {
                if (StringUtils.equals(value, s.value)) {
                    return s;
                }
            }
            return ASC;
        }
    }

    private enum OrderBy {
        TITLE("title"),
        MODIFIED("modified");

        private final String value;

        OrderBy(String value) {
            this.value = value;
        }

        /** Getting an OrderBy by a String
         *
         * @param value a String representing an OrderBy option
         * @return SortOrder */
        public static OrderBy fromString(String value) {
            for (OrderBy s : values()) {
                if (StringUtils.equals(value, s.value)) {
                    return s;
                }
            }
            return null;
        }
    }

    private static class ListSort implements Comparator<StructureListLinkDefinitionModel>, Serializable {

        private static final long serialVersionUID = 201535758109948877L;
        private final SortOrder sortOrder;
        private final OrderBy orderBy;

        ListSort(OrderBy orderBy, SortOrder sortOrder) {
            this.orderBy = orderBy;
            this.sortOrder = sortOrder;
        }

        @Override
        public int compare(StructureListLinkDefinitionModel item1, StructureListLinkDefinitionModel item2) {
            int i = 0;
            if (orderBy == OrderBy.MODIFIED) {
                i = ObjectUtils.compare(item1.getLastModifiedDate(), item2.getLastModifiedDate(), true);
            } else if (orderBy == OrderBy.TITLE) {
                i = ObjectUtils.compare(item1.getTitle(), item2.getTitle(), true);
            }

            if (sortOrder == SortOrder.DESC) {
                i = i * -1;
            }
            return i;
        }
    }
    public String getExportedType() {
        return StructureListModel.RESOURCE_TYPE;
    }
}
