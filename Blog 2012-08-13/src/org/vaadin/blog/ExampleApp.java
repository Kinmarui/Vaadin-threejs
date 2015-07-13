package org.vaadin.blog;

import java.io.ByteArrayInputStream;
import java.io.IOException;

import org.vaadin.blog.label.JsLabel;

import com.vaadin.Application;
import com.vaadin.ui.CustomLayout;

@SuppressWarnings("serial")
public class ExampleApp extends Application  {
    @Override
    public void init() {
    	setTheme("reindeermods");
//        addComponent(new JsLabel("Hello World!"));
		try {
    		CustomLayout treejs;
			treejs = new CustomLayout(new ByteArrayInputStream("<b>Template</b>".getBytes()));
//	        addComponent(treejs);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//        CustomLayout treejs = new CustomLayout("threejs");
//        addComponent(treejs);
    }
}
