package com.packtpub.learnvaadin.js;

import javax.servlet.annotation.WebServlet;

import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.UI;

@SuppressWarnings("serial")
public class JsIntegrationUI extends UI {

	@WebServlet(value = "/*", asyncSupported = false)
	@VaadinServletConfiguration(productionMode = false, ui = JsIntegrationUI.class, widgetset = "com.packtpub.learnvaadin.js.JavascriptWidgetset")
	public static class Servlet extends VaadinServlet {
		
	}
	
	@Override
	protected void init(VaadinRequest request) {

		setContent(new ThreeJs());
	}
}