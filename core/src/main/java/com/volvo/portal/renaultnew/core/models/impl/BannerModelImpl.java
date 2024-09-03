package com.volvo.portal.renaultnew.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.components.models.Image;
import com.adobe.cq.wcm.core.components.models.Page;
import com.drew.lang.annotations.NotNull;
import com.volvo.portal.renaultnew.core.models.BannerModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.via.ResourceSuperType;

@Model(
        adaptables = SlingHttpServletRequest.class,
        adapters = {BannerModel.class, ComponentExporter.class},
        resourceType = BannerModelImpl.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BannerModelImpl implements BannerModel {

    // points to the the component resource path in ui.apps
    static final String RESOURCE_TYPE = "volvo-aem-renault-new/components/renault/content/banner";

    @Self
    private SlingHttpServletRequest request;

    // With sling inheritance (sling:resourceSuperType) we can adapt the current resource to the Image class
    // this allows us to re-use all of the functionality of the Image class, without having to implement it ourself
    // see https://github.com/adobe/aem-core-wcm-components/wiki/Delegation-Pattern-for-Sling-Models
    @Self
    @Via(type = ResourceSuperType.class)
    private Image image;

    // map the property saved by the dialog to a variable named `bannerText`
    @ValueMapValue
    private String bannerText;

    @ValueMapValue
    private String bannerTitle;

    @ValueMapValue
    private String bannerLink;

    // public getter to expose the value of `bannerText` via the Sling Model and JSON output
    @Override
    public String getBannerText() {
        return bannerText;
    }

    @Override
    public String getBannerTitle() {
        return bannerTitle;
    }

    @Override
    public String getBannerLink() {
        return bannerLink;
    }
    // Re-use the Image class for all other methods:

    @Override
    public String getSrc() {
        return null != image ? image.getSrc() : null;
    }

    @Override
    public String getAlt() {
        return null != image ? image.getAlt() : null;
    }

    @Override
    public String getTitle() {
        return null != image ? image.getTitle() : null;
    }

    // method required by `ComponentExporter` interface
    // exposes a JSON property named `:type` with a value of `wknd-spa-react/components/banner`
    // required to map the JSON export to the SPA component props via the `MapTo`
    @Override
    @NotNull
    public String getExportedType() {
        return BannerModelImpl.RESOURCE_TYPE;
    }
}
