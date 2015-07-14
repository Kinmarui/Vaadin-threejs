package com.example.test2;

import com.vaadin.annotations.JavaScript;
import com.vaadin.shared.MouseEventDetails;
import com.example.test2.client.mycomponent.MyComponentClientRpc;
import com.example.test2.client.mycomponent.MyComponentServerRpc;
import com.example.test2.client.mycomponent.MyComponentState;


@SuppressWarnings("serial")
@JavaScript({"https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js", "treejs/three.min.js", "treejs/loaders/DDSLoader.js", "treejs/loaders/MTLLoader.js", "treejs/loaders/OBJMTLLoader.js", "scene.js"})
public class MyComponent extends com.vaadin.ui.AbstractJavaScriptComponent {

//	private MyComponentServerRpc rpc = new MyComponentServerRpc() {
//		private int clickCount = 0;
//
//		public void clicked(MouseEventDetails mouseDetails) {
//			// nag every 5:th click using RPC
//			if (++clickCount % 5 == 0) {
//				getRpcProxy(MyComponentClientRpc.class).alert(
//						"Ok, that's enough!");
//			}
//			// update shared state
//			getState().text = "You have clicked " + clickCount + " times";
//		}
//	};  
//
//	public MyComponent() {
//		registerRpc(rpc);
//	}
//
//	@Override
//	public MyComponentState getState() {
//		return (MyComponentState) super.getState();
//	}
}
