package com.example.test2;

import javax.servlet.annotation.WebServlet;

import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.UI;

@SuppressWarnings("serial")
//@Theme("test2")
public class Test2UI extends UI {

	@WebServlet(value = "/*", asyncSupported = false)
	@VaadinServletConfiguration(productionMode = false, ui = Test2UI.class, widgetset = "com.example.test2.Test2Widgetset")
	public static class Servlet extends VaadinServlet {
		
	}

	@Override
	protected void init(VaadinRequest request) {
		setContent(new MyComponent());
	}

}