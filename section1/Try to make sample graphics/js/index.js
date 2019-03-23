//Global variables
var scene, camera, renderer;

var geometry1, material1, line1, mesh1;
var geometry2, material2, mesh2;
var light, helper;



function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

}

function geometry(){
  geometry1 = new THREE.IcosahedronGeometry( 200,1);
  material1 = new THREE.MeshBasicMaterial( {wireframe : true} );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  border1 = new THREE.EdgesHelper( mesh1,0xffff00 );
  mesh1.position.z = -900;
  mesh1.position.y = -50;

  geometry2 = new THREE.IcosahedronGeometry( 100,1);
  material2 = new THREE.MeshBasicMaterial( {wireframe: true,color:"#ff0000"});
  material2 = new THREE.MeshBasicMaterial( {color:"#00ff00"});

  mesh2 = new THREE.Mesh( geometry2, material2 );
  border2 = new THREE.EdgesHelper( mesh2, 0xffff00);
  mesh2.position.z = -900;
  mesh2.position.y = -50;

 //light = new THREE.DirectionalLight( 0xFFFFFF );

// helper = new THREE.DirectionalLightHelper( light, 5 );

scene.add( helper );

// Add mesh to scene

  scene.add( mesh1 );
  scene.add( mesh2 );


  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a DirectionalLight and turn on shadows for the light
var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 0, 1, 0 ); 			//default; light shining from top
light.castShadow = true;            // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512;  // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5;    // default
light.shadow.camera.far = 500;     // default

//Create a sphere that cast shadows (but does not receive them)
var sphereGeometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
var sphereMaterial = new THREE.MeshStandardMaterial( { color: 0xff0000 } );
var sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene.add( sphere );

//Create a plane that receives shadows (but does not cast them)
var planeGeometry = new THREE.PlaneBufferGeometry( 20, 20, 32, 32 );
var planeMaterial = new THREE.MeshStandardMaterial( { color: 0x00ff00 } )
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
scene.add( plane );

//Create a helper for the shadow camera (optional)
var helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );

  //scene.add( border9 );

}

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0; //Continuously rotate the mesh
  mesh1.rotation.z += 0.01;

  mesh2.rotation.x += 0; //Continuously rotate the mesh
  mesh2.rotation.z += 0.5;


  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};




init();
geometry();
render();
