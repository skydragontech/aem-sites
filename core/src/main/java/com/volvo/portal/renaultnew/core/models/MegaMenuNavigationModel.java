package com.volvo.portal.renaultnew.core.models;

import com.adobe.cq.wcm.core.components.models.Image;
import com.adobe.cq.wcm.core.components.models.Navigation;
import org.osgi.annotation.versioning.ProviderType;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@ProviderType
public interface MegaMenuNavigationModel extends Navigation {

    default List<MegaMenuItemModel> getMegaMenuItems() {
        List<MegaMenuItemModel> list = new ArrayList<>();
        List<MegaMenuItemModel> listChildren = new ArrayList<>();
        listChildren.add(new MegaMenuItemModel(11, "test1-1", null));
        listChildren.add(new MegaMenuItemModel(12, "test1-2", null));
        list.add(new MegaMenuItemModel(1, "test1", listChildren));
        list.add(new MegaMenuItemModel(2, "test2", null));
        return list;
    }

}
