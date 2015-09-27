package com.example.test2;

import com.vaadin.shared.JavaScriptExtensionState;

@SuppressWarnings("serial")
public class BootstrapTooltipState extends JavaScriptExtensionState {

    private String display;

    public String getDisplay() {
    
        return display;
    }

    public void setDisplay(String display) {
    
        this.display = display;
    }
}