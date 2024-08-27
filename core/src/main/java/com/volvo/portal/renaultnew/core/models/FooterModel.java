package com.volvo.portal.renaultnew.core.models;


import com.adobe.cq.export.json.ContainerExporter;
import lombok.Data;
import org.osgi.annotation.versioning.ProviderType;

import java.util.List;

@ProviderType
public interface FooterModel extends ContainerExporter {

    String getColumnLayout();

}
