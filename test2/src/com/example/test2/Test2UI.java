package com.example.test2;

import javax.servlet.annotation.WebServlet;

import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.ExternalResource;
import com.vaadin.server.Resource;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.FormLayout;
import com.vaadin.ui.HorizontalLayout;
import com.vaadin.ui.Link;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

@SuppressWarnings("serial")
//@Theme("test2")
public class Test2UI extends UI {

	@WebServlet(value = "/*", asyncSupported = false)
	@VaadinServletConfiguration(productionMode = false, ui = Test2UI.class, widgetset = "com.example.test2.Test2Widgetset")
	public static class Servlet extends VaadinServlet {
		
	}

	@Override
	protected void init(VaadinRequest request) {
		
		HorizontalLayout horizontalLayout = new HorizontalLayout();
		setContent(horizontalLayout);
		horizontalLayout.addComponent(new MyJavaScriptComponent());
		
		
//		FormLayout layout = new FormLayout();
//
//		setContent(layout);
//
//		Link blog = new Link("A Java Geek", new ExternalResource("http://blog.frankel.ch/"));
//		Link morevaadin = new Link("More Vaadin", new ExternalResource("http://morevaadin.com/"));
//		
////		new MyComponent().extend(blog);
////		new MyComponent().extend(morevaadin);
//
//		layout.addComponent(blog);
//		layout.addComponent(morevaadin);
		
	}

}