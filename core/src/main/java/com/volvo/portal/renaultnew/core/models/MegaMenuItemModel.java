package com.volvo.portal.renaultnew.core.models;


import java.util.List;

public class MegaMenuItemModel {
    private int id;
    private String label;
    private List<MegaMenuItemModel> items;

    public MegaMenuItemModel(int id, String label, List<MegaMenuItemModel> items) {
        this.id = id;
        this.label = label;
        this.items = items;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public List<MegaMenuItemModel> getItems() {
        return items;
    }

    public void setItems(List<MegaMenuItemModel> items) {
        this.items = items;
    }
}
