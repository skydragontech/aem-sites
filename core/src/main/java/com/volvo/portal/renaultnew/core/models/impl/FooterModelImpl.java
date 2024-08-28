package com.volvo.portal.renaultnew.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.LayoutContainer;
import com.drew.lang.annotations.NotNull;
import com.volvo.portal.renaultnew.core.models.FooterModel;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.*;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.via.ResourceSuperType;

import java.util.*;


@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {FooterModelImpl.class, ComponentExporter.class, ContainerExporter.class},
        resourceType = FooterModelImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FooterModelImpl implements FooterModel {

    static final String RESOURCE_TYPE = "volvo-aem-renault-new/components/renault/structure/footer";

    @Self
    private SlingHttpServletRequest request;

    @ValueMapValue
    @Default(values = "1")
    private String columnLayout;

    @ValueMapValue
    private String copyright;

    @ChildResource(name = "firstLinks")
    private Collection<FooterItemModel> firstLinks;

    @ChildResource(name = "secondLinks")
    private List<FooterItemModel> secondLinks;

    @ChildResource(name = "thirdLinks")
    private List<FooterItemModel> thirdLinks;

    @Self
    @Via(type = ResourceSuperType.class)
    private LayoutContainer layoutContainer;

    @Override
    public String getCopyright() {
        return StringUtils.isBlank(copyright) ? FooterModel.super.getCopyright() : copyright;
    }

    @Override
    public String getColumnLayout() {
        return columnLayout;
    }

    @Override
    public Collection<FooterItemModel> getFirstLinks() {
        return firstLinks;
    }

    @Override
    public Collection<FooterItemModel> getSecondLinks() {
        return secondLinks;
    }

    @Override
    public List<FooterItemModel> getThirdLinks() {
        return thirdLinks;
    }

    @Override
    public Map<String, ? extends ComponentExporter> getExportedItems() {
        return layoutContainer.getExportedItems();
    }

    @Override
    public String[] getExportedItemsOrder() {
        return layoutContainer.getExportedItemsOrder();
    }

    @Override
    @NotNull
    public String getExportedType() {
        return FooterModelImpl.RESOURCE_TYPE;
    }
}
