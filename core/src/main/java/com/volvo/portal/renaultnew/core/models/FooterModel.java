package com.volvo.portal.renaultnew.core.models;


import com.adobe.cq.export.json.ContainerExporter;
import com.volvo.portal.renaultnew.core.models.impl.FooterItemModel;
import org.osgi.annotation.versioning.ProviderType;

import java.util.*;

@ProviderType
public interface FooterModel extends ContainerExporter {

    String getColumnLayout();

    default String getCopyright() {
        return "copyright " + Calendar.getInstance().get(Calendar.YEAR) + " Renault Trucks";
    }

    default Collection<String> getSocialIcons() {
        return new ArrayList<>();
    }

    default Collection<FooterItemModel> getFirstLinks() {
        return new ArrayList<>();
    }

    default Collection<FooterItemModel> getSecondLinks() {
        return new ArrayList<>();
    }

    default Collection<FooterItemModel> getThirdLinks() {
        return new ArrayList<>();
    }

}
