package com.volvo.portal.renaultnew.core.models.impl;


import com.day.cq.commons.inherit.HierarchyNodeInheritanceValueMap;
import com.day.cq.commons.inherit.InheritanceValueMap;
import com.day.cq.wcm.api.PageManager;
import lombok.Getter;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;

@Getter
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class FooterItemModel {

    @Self
    private Resource resource;

    @ValueMapValue
    private String webTitle;
    @ValueMapValue
    private String webUrl;


    @PostConstruct
    public void init() {
        if (StringUtils.isBlank(webTitle) || StringUtils.isBlank(webUrl)) {
            PageManager pageManager = resource.getResourceResolver().adaptTo(PageManager.class);
            InheritanceValueMap inheritanceMap = new HierarchyNodeInheritanceValueMap(pageManager.getContainingPage(resource).getContentResource());
            webTitle = inheritanceMap.getInherited("webTitle", String.class);
            webUrl = inheritanceMap.getInherited("webUrl", String.class);
        }
    }

}
