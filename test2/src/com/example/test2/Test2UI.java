package com.example.test2;

import javax.servlet.annotation.WebServlet;

import com.google.gwt.core.linker.IFrameLinker;
import com.google.gwt.dom.client.IFrameElement;
import com.google.gwt.user.client.Window;
import com.vaadin.annotations.Theme;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.Resource;
import com.vaadin.server.ThemeResource;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Button;
import com.vaadin.ui.Button.ClickEvent;
import com.vaadin.ui.Embedded;
import com.vaadin.ui.Grid;
import com.vaadin.ui.JavaScript;
import com.vaadin.ui.Label;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

@SuppressWarnings("serial")
@Theme("test2")
@com.vaadin.annotations.JavaScript({"treejs/three.min.js", "treejs/loaders/DDSLoader.js", "treejs/loaders/MTLLoader.js", "treejs/loaders/OBJMTLLoader.js", "treejs/loaders/ColladaLoader.js"})
public class Test2UI extends UI {

	@WebServlet(value = "/*", asyncSupported = true)
	@VaadinServletConfiguration(productionMode = false, ui = Test2UI.class, widgetset = "com.example.test2.Test2Widgetset")
	public static class Servlet extends VaadinServlet {
		
	}

	@Override
	protected void init(VaadinRequest request) {
		final VerticalLayout layout = new VerticalLayout();
		layout.setMargin(true);
		setContent(layout);
//		Button scene = new Button("<iframe src=http://get.webgl.org/ style=\"width: 100%; height: 100%\"></iframe>");
//    	layout.addComponent(scene);
		
		Grid grid = new Grid();
		grid.setId("asdf");
		grid.setHeight(1, UNITS_PIXELS);
		grid.setWidth(1, UNITS_PIXELS);
		layout.addComponent(grid);
		
    	JavaScript.getCurrent().execute("		"
    			+ "var container = document.getElementById('asdf');"
    			+ "var iframe = document.createElement(\"iframe\");"
    			+ "iframe.src = \"http://get.webgl.org/\";"
    			+ "container.appendChild( iframe );");
    			

		Button button = new Button("Click Me");
		button.addClickListener(new Button.ClickListener() {
			public void buttonClick(ClickEvent event) {
				layout.addComponent(new Label("Thank you for clicking"));
				JavaScript.getCurrent().execute("			"
						+ "			var container, stats;\r\n" + 
						"\r\n" + 
						"			var camera, target, scene, renderer;\r\n" + 
						"\r\n" + 
						"			// var mouseX = 0, mouseY = 0;\r\n" + 
						"\r\n" + 
						"			var fov = 70\r\n" + 
						"			onPointerDownPointerX = 0, onPointerDownPointerY = 0,\r\n" + 
						"			lon = 0, onPointerDownLon = 0,\r\n" + 
						"			lat = 0, onPointerDownLat = 0,\r\n" + 
						"			onPointerDownTargetX = 0, onPointerDownTargetY = 0\r\n" + 
						"			phi = 0, theta = 0;\r\n" + 
						"\r\n" + 
						"			var windowHalfX = window.innerWidth / 2;\r\n" + 
						"			var windowHalfY = window.innerHeight / 2;\r\n" + 
						"\r\n" + 
						"\r\n" + 
						"			init();\r\n" + 
						"			animate();\r\n" + 
						"\r\n" + 
						"\r\n" + 
						"			function init() {\r\n" + 
						"				container = document.getElementById('asdf') // document.createElement( 'div' );\r\n" + 
						"				//document.body.appendChild( container );\r\n" + 
						"\r\n" + 
						"				camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, 1, 1000 );\r\n" + 
						"				camera.position.z = 0;\r\n" + 
						"\r\n" + 
						"				// scene\r\n" + 
						"\r\n" + 
						"				scene = new THREE.Scene();\r\n" + 
						"\r\n" + 
						"				var ambient = new THREE.AmbientLight( 0x444444 );\r\n" + 
						"				scene.add( ambient );\r\n" + 
						"\r\n" + 
						"				var directionalLight = new THREE.DirectionalLight( 0xffeedd );\r\n" + 
						"				directionalLight.position.set( 0, 0, 1 ).normalize();\r\n" + 
						"				scene.add( directionalLight );\r\n" + 
						"\r\n" + 
						"				// model\r\n" + 
						"\r\n" + 
						"				var onProgress = function ( xhr ) {\r\n" + 
						"					if ( xhr.lengthComputable ) {\r\n" + 
						"						var percentComplete = xhr.loaded / xhr.total * 100;\r\n" + 
						"						console.log( Math.round(percentComplete, 2) + '% downloaded' );\r\n" + 
						"					}\r\n" + 
						"				};\r\n" + 
						"\r\n" + 
						"				var onError = function ( xhr ) {\r\n" + 
						"				};\r\n" + 
						"\r\n" + 
						"\r\n" + 
						"				THREE.Loader.Handlers.add( /\\.dds$/i, new THREE.DDSLoader() );\r\n" + 
						"\r\n" + 
						"				var loader = new THREE.OBJMTLLoader();\r\n" + 
						"				// loader.load( 'obj/male02/male02.obj', 'obj/male02/male02_dds.mtl', function ( object ) {\r\n" + 
						"				loader.load( 'http://localhost/treejs/my_model_tasmy.obj', 'http://localhost/treejs//my_model_tasmy.mtl', function ( object ) {\r\n" + 
						"				// loader.load( 'model_tasmy_23_6_2014.obj', 'model_tasmy_23_6_2014.mtl', function ( object ) {\r\n" + 
						"\r\n" + 
						"				// var loader = new THREE.ColladaLoader();\r\n" + 
						"				// loader.load( 'lotnisko_model_3D/model_tasmy_23_6_2014.dae', function ( object ) {\r\n" + 
						"\r\n" + 
						"					scene.add( object );\r\n" + 
						"				}, onProgress, onError );\r\n" + 
						"\r\n" + 
						"\r\n" + 
						"\r\n" + 
						"				renderer = new THREE.WebGLRenderer();\r\n" + 
						"				renderer.setPixelRatio( window.devicePixelRatio );\r\n" + 
						"				renderer.setSize( window.innerWidth, window.innerHeight );\r\n" + 
						"				container.appendChild( renderer.domElement );\r\n" + 
						"\r\n" + 
						"				// target\r\n" + 
						"				target = new THREE.Vector3();\r\n" + 
						"\r\n" + 
						"\r\n" + 
						"				document.addEventListener( 'mousedown', onDocumentMouseDownRotateCamera, false );\r\n" + 
						"				document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );\r\n" + 
						"				document.addEventListener( 'DOMMouseScroll', onDocumentMouseWheel, false);\r\n" + 
						"\r\n" + 
						"				document.addEventListener( 'keydown', onKeyDown, false );\r\n" + 
						"				document.addEventListener( 'keyup', onKeyUp, false );\r\n" + 
						"\r\n" + 
						"				window.addEventListener( 'resize', onWindowResize, false );\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function onWindowResize() {\r\n" + 
						"				windowHalfX = window.innerWidth / 2;\r\n" + 
						"				windowHalfY = window.innerHeight / 2;\r\n" + 
						"\r\n" + 
						"				camera.aspect = window.innerWidth / window.innerHeight;\r\n" + 
						"				camera.updateProjectionMatrix();\r\n" + 
						"\r\n" + 
						"				renderer.setSize( window.innerWidth, window.innerHeight );\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function onDocumentMouseDownRotateCamera( event ) {\r\n" + 
						"				event.preventDefault();\r\n" + 
						"\r\n" + 
						"				onPointerDownPointerX = event.clientX;\r\n" + 
						"				onPointerDownPointerY = event.clientY;\r\n" + 
						"\r\n" + 
						"				onPointerDownLon = lon;\r\n" + 
						"				onPointerDownLat = lat;\r\n" + 
						"\r\n" + 
						"				document.addEventListener( 'mousemove', onDocumentMouseMoveRotateCamera, false );\r\n" + 
						"				document.addEventListener( 'mouseup', onDocumentMouseUpRotateCamera, false );\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function onDocumentMouseMoveRotateCamera( event ) {\r\n" + 
						"				lon = ( event.clientX - onPointerDownPointerX ) * 0.1 + onPointerDownLon;\r\n" + 
						"				lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function onDocumentMouseUpRotateCamera( event ) {\r\n" + 
						"				document.removeEventListener( 'mousemove', onDocumentMouseMoveRotateCamera, false );\r\n" + 
						"				document.removeEventListener( 'mouseup', onDocumentMouseUpRotateCamera, false );\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function onDocumentMouseDownMoveCamera( event ) {\r\n" + 
						"				event.preventDefault();\r\n" + 
						"\r\n" + 
						"				onPointerDownPointerX = event.clientX;\r\n" + 
						"				onPointerDownPointerY = event.clientY;\r\n" + 
						"\r\n" + 
						"				onPointerDownTargetX = target.x;\r\n" + 
						"				onPointerDownTargetY = target.y;\r\n" + 
						"\r\n" + 
						"				document.addEventListener( 'mousemove', onDocumentMouseMoveMoveCamera, false );\r\n" + 
						"				document.addEventListener( 'mouseup', onDocumentMouseUpMoveCamera, false );\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function onDocumentMouseMoveMoveCamera( event ) {\r\n" + 
						"				target.x = ( event.clientX - onPointerDownPointerX ) * 0.1 + onPointerDownTargetX;\r\n" + 
						"				target.y = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownTargetY;\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function onDocumentMouseUpMoveCamera( event ) {\r\n" + 
						"				document.removeEventListener( 'mousemove', onDocumentMouseMoveMoveCamera, false );\r\n" + 
						"				document.removeEventListener( 'mouseup', onDocumentMouseUpMoveCamera, false );\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function onDocumentMouseWheel( event ) {\r\n" + 
						"							// WebKit\r\n" + 
						"							if ( event.wheelDeltaY ) {\r\n" + 
						"								fov -= event.wheelDeltaY * 0.05;\r\n" + 
						"\r\n" + 
						"							// Opera / Explorer 9\r\n" + 
						"							} else if ( event.wheelDelta ) {\r\n" + 
						"								fov -= event.wheelDelta * 0.05;\r\n" + 
						"\r\n" + 
						"							// Firefox\r\n" + 
						"							} else if ( event.detail ) {\r\n" + 
						"								fov += event.detail * 1.0;\r\n" + 
						"							}\r\n" + 
						"							camera.projectionMatrix.makePerspective( fov, window.innerWidth / window.innerHeight, 1, 1000 );\r\n" + 
						"						}\r\n" + 
						"\r\n" + 
						"			function onKeyDown( event ) {\r\n" + 
						"				if (event.shiftKey){\r\n" + 
						"					document.removeEventListener( 'mousedown', onDocumentMouseDownRotateCamera, false );\r\n" + 
						"					document.addEventListener( 'mousedown', onDocumentMouseDownMoveCamera, false );\r\n" + 
						"\r\n" + 
						"				}\r\n" + 
						"			};\r\n" + 
						"\r\n" + 
						"			function onKeyUp( event ) {\r\n" + 
						"				if (!event.shiftKey){\r\n" + 
						"					document.addEventListener( 'mousedown', onDocumentMouseDownRotateCamera, false );\r\n" + 
						"					document.removeEventListener( 'mousedown', onDocumentMouseDownMoveCamera, false );\r\n" + 
						"\r\n" + 
						"				}\r\n" + 
						"			};\r\n" + 
						"\r\n" + 
						"			function animate() {\r\n" + 
						"				requestAnimationFrame( animate );\r\n" + 
						"				render();\r\n" + 
						"			}\r\n" + 
						"\r\n" + 
						"			function render() {\r\n" + 
						"				lat = Math.max( - 85, Math.min( 85, lat ) );\r\n" + 
						"				phi = THREE.Math.degToRad( 90 - lat );\r\n" + 
						"				theta = THREE.Math.degToRad( lon );\r\n" + 
						"\r\n" + 
						"				camera.position.x = target.x + 100 * Math.sin( phi ) * Math.cos( theta );\r\n" + 
						"				camera.position.y = target.y + 100 * Math.cos( phi );\r\n" + 
						"				camera.position.z = 100 * Math.sin( phi ) * Math.sin( theta );\r\n" + 
						"\r\n" + 
						"				// camera.position.x += ( mouseX - camera.position.x ) * .05;\r\n" + 
						"				// camera.position.y += ( - mouseY - camera.position.y ) * .05;\r\n" + 
						"				camera.lookAt( target );\r\n" + 
						"\r\n" + 
						"				renderer.render( scene, camera );\r\n" + 
						"			}");
			}
		});
		
//		layout.addComponent(button);
		
//		layout.addComponent(new MyComponent());
	}

}