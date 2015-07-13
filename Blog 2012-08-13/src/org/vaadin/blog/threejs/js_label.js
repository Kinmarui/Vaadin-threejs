org_vaadin_blog_threejs_JsLabel = function() {
	var e = this.getElement();

	// var ga = document.createElement('script'); ga.type = 'text/javascript';
	//
	// ga.src =
	// 'http://localhost:8080/blog/VAADIN/themes/reindeer/layouts/treejs/three.min.js';
	// var s = document.getElementsByTagName('script')[0];
	// s.parentNode.insertBefore(ga, s);
	//    
	// ga.src =
	// 'http://localhost:8080/blog/VAADIN/themes/reindeer/layouts/treejs/loaders/DDSLoader.js';
	// var s = document.getElementsByTagName('script')[0];
	// s.parentNode.insertBefore(ga, s);
	//
	// ga.src =
	// 'http://localhost:8080/blog/VAADIN/themes/reindeer/layouts/treejs/loaders/MTLLoader.js';
	// var s = document.getElementsByTagName('script')[0];
	// s.parentNode.insertBefore(ga, s);
	//    
	// ga.src =
	// 'http://localhost:8080/blog/VAADIN/themes/reindeer/layouts/treejs/loaders/OBJMTLLoader.js';
	// var s = document.getElementsByTagName('script')[0];
	// s.parentNode.insertBefore(ga, s);
	var addScript = function(src) {
		var ga = document.createElement('script');
		ga.type = 'text/javascript';

		ga.src = src;
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
	}

	window
			.setTimeout(
					addScript('./VAADIN/themes/reindeer/layouts/treejs/three.min.js'),
					0);

	window
			.setTimeout(
					addScript('./VAADIN/themes/reindeer/layouts/treejs/loaders/DDSLoader.js'),
					1000);

	window
			.setTimeout(
					addScript('./VAADIN/themes/reindeer/layouts/treejs/loaders/MTLLoader.js'),
					1000);
	window
			.setTimeout(
					addScript('./VAADIN/themes/reindeer/layouts/treejs/loaders/OBJMTLLoader.js'),
					1000);

	
	window
	.setTimeout(function(){
		
	var container, stats;

	var camera, target, scene, renderer;

	// var mouseX = 0, mouseY = 0;

	var fov = 70
	onPointerDownPointerX = 0, onPointerDownPointerY = 0, lon = 0,
			onPointerDownLon = 0, lat = 0, onPointerDownLat = 0,
			onPointerDownTargetX = 0, onPointerDownTargetY = 0
	phi = 0, theta = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;

	window.init = function() {
		container = document.createElement('div');
		document.body.removeChild(document.getElementById("blog-3026850"));
//		document.getElementById("blog-3026850").childNodes[0].appendChild(container);
		document.body.appendChild(container);

		camera = new THREE.PerspectiveCamera(fov, window.innerWidth
				/ window.innerHeight, 1, 1000);
		camera.position.z = 0;

		// scene

		scene = new THREE.Scene();

		var ambient = new THREE.AmbientLight(0x444444);
		scene.add(ambient);

		var directionalLight = new THREE.DirectionalLight(0xffeedd);
		directionalLight.position.set(0, 0, 1).normalize();
		scene.add(directionalLight);

		// model

		var onProgress = function(xhr) {
			if (xhr.lengthComputable) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log(Math.round(percentComplete, 2) + '% downloaded');
			}
		};

		var onError = function(xhr) {
		};

		THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

		var loader = new THREE.OBJMTLLoader();
		loader.load('my_model_tasmy.obj', 'my_model_tasmy.mtl',
				function(object) {
					scene.add(object);
				}, onProgress, onError);

		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		// target
		target = new THREE.Vector3();

		document.addEventListener('mousedown', onDocumentMouseDownRotateCamera,
				false);
		document.addEventListener('mousewheel', onDocumentMouseWheel, false);
		document
				.addEventListener('DOMMouseScroll', onDocumentMouseWheel, false);

		document.addEventListener('keydown', onKeyDown, false);
		document.addEventListener('keyup', onKeyUp, false);

		window.addEventListener('resize', onWindowResize, false);
	}

	window.onWindowResize = function() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	window.onDocumentMouseDownRotateCamera = function( event ) {
		event.preventDefault();

		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;

		onPointerDownLon = lon;
		onPointerDownLat = lat;

		document.addEventListener( 'mousemove', onDocumentMouseMoveRotateCamera, false );
		document.addEventListener( 'mouseup', onDocumentMouseUpRotateCamera, false );
	}

	window.onDocumentMouseMoveRotateCamera = function( event ) {
		lon = ( event.clientX - onPointerDownPointerX ) * 0.1 + onPointerDownLon;
		lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
	}

	window.onDocumentMouseUpRotateCamera = function( event ) {
		document.removeEventListener( 'mousemove', onDocumentMouseMoveRotateCamera, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUpRotateCamera, false );
	}

	window.onDocumentMouseDownMoveCamera = function( event ) {
		event.preventDefault();

		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;

		onPointerDownTargetX = target.x;
		onPointerDownTargetY = target.y;

		document.addEventListener( 'mousemove', onDocumentMouseMoveMoveCamera, false );
		document.addEventListener( 'mouseup', onDocumentMouseUpMoveCamera, false );
	}

	window.onDocumentMouseMoveMoveCamera = function( event ) {
		target.x = ( event.clientX - onPointerDownPointerX ) * 0.1 + onPointerDownTargetX;
		target.y = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownTargetY;
	}

	window.onDocumentMouseUpMoveCamera = function( event ) {
		document.removeEventListener( 'mousemove', onDocumentMouseMoveMoveCamera, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUpMoveCamera, false );
	}

	window.onDocumentMouseWheel = function( event ) {
					// WebKit
					if ( event.wheelDeltaY ) {
						fov -= event.wheelDeltaY * 0.05;

					// Opera / Explorer 9
					} else if ( event.wheelDelta ) {
						fov -= event.wheelDelta * 0.05;

					// Firefox
					} else if ( event.detail ) {
						fov += event.detail * 1.0;
					}
					camera.projectionMatrix.makePerspective( fov, window.innerWidth / window.innerHeight, 1, 1000 );
				}

	window.onKeyDown = function( event ) {
		if (event.shiftKey){
			document.removeEventListener( 'mousedown', onDocumentMouseDownRotateCamera, false );
			document.addEventListener( 'mousedown', onDocumentMouseDownMoveCamera, false );

		}
	};

	window.onKeyUp = function( event ) {
		if (!event.shiftKey){
			document.addEventListener( 'mousedown', onDocumentMouseDownRotateCamera, false );
			document.removeEventListener( 'mousedown', onDocumentMouseDownMoveCamera, false );

		}
	};

	window.animate = function() {
		requestAnimationFrame( animate );
		render();
	}

	window.render = function() {
		lat = Math.max( - 85, Math.min( 85, lat ) );
		phi = THREE.Math.degToRad( 90 - lat );
		theta = THREE.Math.degToRad( lon );

		camera.position.x = target.x + 100 * Math.sin( phi ) * Math.cos( theta );
		camera.position.y = target.y + 100 * Math.cos( phi );
		camera.position.z = 100 * Math.sin( phi ) * Math.sin( theta );

		// camera.position.x += ( mouseX - camera.position.x ) * .05;
		// camera.position.y += ( - mouseY - camera.position.y ) * .05;
		camera.lookAt( target );

		renderer.render( scene, camera );
	}

	init();
	animate();

	this.onStateChange = function() {
		e.innerHTML = this.getState().xhtml;
	}
	}, 2000)
}