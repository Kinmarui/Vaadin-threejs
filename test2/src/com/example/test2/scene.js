window.com_example_test2_MyJavaScriptComponent = function() {

	var container, stats;

	var camera, target, scene, renderer;

	// var mouseX = 0, mouseY = 0;

	var fov = 70
	onPointerDownPointerX = 0, onPointerDownPointerY = 0,
	lon = 0, onPointerDownLon = 0,
	lat = 0, onPointerDownLat = 0,
	onPointerDownTargetX = 0, onPointerDownTargetY = 0
	phi = 0, theta = 0;

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;


	init();
	animate();


	function init() {
//		container = document.createElement( 'div' );
//		document.body.appendChild( container );

		camera = new THREE.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, 1, 1000 );
		camera.position.z = 0;

		// scene

		scene = new THREE.Scene();

		var ambient = new THREE.AmbientLight( 0x444444 );
		scene.add( ambient );

		var directionalLight = new THREE.DirectionalLight( 0xffeedd );
		directionalLight.position.set( 0, 0, 1 ).normalize();
		scene.add( directionalLight );

		// model

		var onProgress = function ( xhr ) {
			if ( xhr.lengthComputable ) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log( Math.round(percentComplete, 2) + '% downloaded' );
			}
		};

		var onError = function ( xhr ) {
		};


		THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

		var loader = new THREE.OBJMTLLoader();
		// loader.load( 'obj/male02/male02.obj', 'obj/male02/male02_dds.mtl', function ( object ) {
		loader.load( './VAADIN/my_model_tasmy.obj', './VAADIN/my_model_tasmy.mtl', function ( object ) {
		// loader.load( 'model_tasmy_23_6_2014.obj', 'model_tasmy_23_6_2014.mtl', function ( object ) {

		// var loader = new THREE.ColladaLoader();
		// loader.load( 'lotnisko_model_3D/model_tasmy_23_6_2014.dae', function ( object ) {

			scene.add( object );
		}, onProgress, onError );



		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
//		container.appendChild( renderer.domElement );

		// target
		target = new THREE.Vector3();


		document.addEventListener( 'mousedown', onDocumentMouseDownRotateCamera, false );
		document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );
		document.addEventListener( 'DOMMouseScroll', onDocumentMouseWheel, false);

		document.addEventListener( 'keydown', onKeyDown, false );
		document.addEventListener( 'keyup', onKeyUp, false );

		window.addEventListener( 'resize', onWindowResize, false );
	}

	function onWindowResize() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function onDocumentMouseDownRotateCamera( event ) {
		event.preventDefault();

		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;

		onPointerDownLon = lon;
		onPointerDownLat = lat;

		document.addEventListener( 'mousemove', onDocumentMouseMoveRotateCamera, false );
		document.addEventListener( 'mouseup', onDocumentMouseUpRotateCamera, false );
	}

	function onDocumentMouseMoveRotateCamera( event ) {
		lon = ( event.clientX - onPointerDownPointerX ) * 0.1 + onPointerDownLon;
		lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
	}

	function onDocumentMouseUpRotateCamera( event ) {
		document.removeEventListener( 'mousemove', onDocumentMouseMoveRotateCamera, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUpRotateCamera, false );
	}

	function onDocumentMouseDownMoveCamera( event ) {
		event.preventDefault();

		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;

		onPointerDownTargetX = target.x;
		onPointerDownTargetY = target.y;

		document.addEventListener( 'mousemove', onDocumentMouseMoveMoveCamera, false );
		document.addEventListener( 'mouseup', onDocumentMouseUpMoveCamera, false );
	}

	function onDocumentMouseMoveMoveCamera( event ) {
		target.x = ( event.clientX - onPointerDownPointerX ) * 0.1 + onPointerDownTargetX;
		target.y = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownTargetY;
	}

	function onDocumentMouseUpMoveCamera( event ) {
		document.removeEventListener( 'mousemove', onDocumentMouseMoveMoveCamera, false );
		document.removeEventListener( 'mouseup', onDocumentMouseUpMoveCamera, false );
	}

	function onDocumentMouseWheel( event ) {
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

	function onKeyDown( event ) {
		if (event.shiftKey){
			document.removeEventListener( 'mousedown', onDocumentMouseDownRotateCamera, false );
			document.addEventListener( 'mousedown', onDocumentMouseDownMoveCamera, false );

		}
	};

	function onKeyUp( event ) {
		if (!event.shiftKey){
			document.addEventListener( 'mousedown', onDocumentMouseDownRotateCamera, false );
			document.removeEventListener( 'mousedown', onDocumentMouseDownMoveCamera, false );

		}
	};

	function animate() {
		requestAnimationFrame( animate );
		render();
	}

	function render() {
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

	// get the DOM element to attach to assume we've got jQuery to hand
	var $container = $("<div id='container'/>").appendTo('.v-ui');

	// attach the render-supplied DOM element
	$container.append(renderer.domElement);

	this.onStateChange = function() {

		requestAnimationFrame( animate );
		// draw!
		render();
//		renderer.render(scene, camera);

	}
}