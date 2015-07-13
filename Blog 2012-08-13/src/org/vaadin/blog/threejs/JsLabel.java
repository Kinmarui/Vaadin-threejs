package org.vaadin.blog.threejs;

import com.google.gwt.user.client.Window;

@SuppressWarnings("serial")
@com.vaadin.annotations.JavaScript({ "js_label.js" })
public class JsLabel extends com.vaadin.ui.AbstractJavaScriptComponent {

    public JsLabel(final String xhtml) {
//        getState().xhtml = xhtml;
//    	init();
    }

    @Override
    protected JsLabelState getState() {
        return (JsLabelState) super.getState();
    }

//    private void init(){
//    	Window.alert("zxc");
//    }
}
