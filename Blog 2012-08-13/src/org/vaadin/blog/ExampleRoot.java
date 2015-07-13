package org.vaadin.blog;

import org.vaadin.blog.threejs.JsLabel;

import com.google.gwt.dev.json.JsonArray;
import com.vaadin.external.json.JSONArray;
import com.vaadin.external.json.JSONException;
import com.vaadin.terminal.ExternalResource;
import com.vaadin.terminal.Resource;
import com.vaadin.terminal.WrappedRequest;
import com.vaadin.ui.JavaScript;
import com.vaadin.ui.JavaScriptFunction;
import com.vaadin.ui.Link;
import com.vaadin.ui.Notification;
import com.vaadin.ui.Root;

@SuppressWarnings("serial")
public class ExampleRoot extends Root {
    @Override
    public void init(final WrappedRequest request) {
//        addComponent(new JsLabel("Hello World!"));
//    	JsLabel scene = new JsLabel("<iframe src=http://localhost:8080/blog/VAADIN/themes/reindeer/layouts/threejs.html style=\"width: 100%; height: 100%\"></iframe>");
    	JsLabel scene = new JsLabel("");
    	scene.setWidth("100%");
    	scene.setHeight("100%");
    	addComponent(scene);
    	
    	JavaScript.getCurrent().addFunction("com.example.foo.myfunc", new JavaScriptFunction() {
			public void call(JSONArray arguments) throws JSONException {
				Notification.show("Received call");
			}
			});
			
			Link link = new Link("Send Message", new ExternalResource(
					"javascript:com.example.foo.myfunc()"));
			addComponent(link);
//		try {
//    		CustomLayout treejs;
//			treejs = new CustomLayout(new ByteArrayInputStream("<b>Template</b>".getBytes()));
//	        addComponent(treejs);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//        CustomLayout treejs = new CustomLayout("threejs");
//        addComponent(treejs);

//    	init();
    }

    
    /*-{
    	$wnd.alert("asd");
    }-*/;

}
