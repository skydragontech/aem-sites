package com.volvo.portal.renaultnew.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Navigation;
import com.adobe.cq.wcm.core.components.models.NavigationItem;
import com.drew.lang.annotations.NotNull;
import com.volvo.portal.renaultnew.core.models.MegaMenuItemModel;
import com.volvo.portal.renaultnew.core.models.MegaMenuNavigationModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.via.ResourceSuperType;

import java.util.List;

@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {MegaMenuNavigationModelImpl.class, ComponentExporter.class},
        resourceType = MegaMenuNavigationModelImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MegaMenuNavigationModelImpl implements MegaMenuNavigationModel {

    static final String RESOURCE_TYPE = "volvo-aem-renault-new/components/renault/structure/megamenu";

    @Self
    private SlingHttpServletRequest request;

    @Via(type = ResourceSuperType.class)
    @Self
    private Navigation navigation;

    @Override
    public List<MegaMenuItemModel> getMegaMenuItems() {
        return MegaMenuNavigationModel.super.getMegaMenuItems();
    }

    @Override
    @NotNull
    public String getExportedType() {
        return MegaMenuNavigationModelImpl.RESOURCE_TYPE;
    }

    @Override
    public List<NavigationItem> getItems() {
        return navigation.getItems();
    }
}
