package com.volvo.portal.renaultnew.core.models;

import com.adobe.cq.wcm.core.components.models.List;
import com.volvo.portal.renaultnew.core.models.impl.NewsListImpl;
import org.osgi.annotation.versioning.ProviderType;

import java.util.ArrayList;
import java.util.Collection;

@ProviderType
public interface NewsList extends List {

    default Collection<NewsListImpl.NewsItem> getNews() {
        return new ArrayList<>();
    }

}
