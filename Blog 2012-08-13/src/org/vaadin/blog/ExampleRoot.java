package org.vaadin.blog;

import org.vaadin.blog.threejs.JsLabel;

import com.vaadin.terminal.WrappedRequest;
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
    }
}
