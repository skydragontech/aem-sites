package com.volvo.portal.renaultnew.core.models;

import com.adobe.cq.wcm.core.components.models.Image;
import com.adobe.cq.wcm.core.components.models.Page;
import org.osgi.annotation.versioning.ProviderType;

@ProviderType
public interface BannerModel extends Image {

    default String getBannerText() {
        return "default";
    }
    default String getBannerTitle() {
        return "default";
    }
    default String getBannerLink() {
        return null;
    }

}
