package com.example.test2;

import com.vaadin.annotations.JavaScript;
import com.vaadin.server.AbstractJavaScriptExtension;
import com.vaadin.server.ClientConnector;
import com.vaadin.server.ExternalResource;
import com.vaadin.server.Resource;
import com.vaadin.ui.AbstractJavaScriptComponent;
import com.vaadin.ui.Link;


@SuppressWarnings("serial")
//@JavaScript({"https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js", "treejs/three.min.js", "treejs/loaders/DDSLoader.js", "treejs/loaders/MTLLoader.js", "treejs/loaders/OBJMTLLoader.js", "scene.js"})
@JavaScript({"https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js", "bootstrap.js", "bootstrap_connector.js"})
public class MyJavaScripExtension extends AbstractJavaScriptExtension{

		 public void extend(Link link) {
			  
	         Resource resource = link.getResource();
	  
	         String display = resource instanceof ExternalResource ? ((ExternalResource) resource).getURL().toString() : "???";
	  
	         getState().setDisplay(display);
	  
	         super.extend(link);
	          
	         attachTooltip();
	     }
	  
	     protected void attachTooltip(Object... commandAndArguments) {
	  
	    	 callFunction("attach", commandAndArguments);
	     }
	  
	     @Override
	     protected Class<? extends ClientConnector> getSupportedParentType() {
	  
	         return Link.class;
	     }
	  
	     @Override
	     public BootstrapTooltipState getState() {
	  
	         return (BootstrapTooltipState) super.getState();
	     }
}
