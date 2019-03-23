//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
var gui;
var color;

var de2ra = function(degree) {
  return degree*(Math.PI/180);
};



function init(){


  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );



  // Add mesh to scene
  scene.add( mesh );
}



function geometry(){

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(100, 100, 100);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;

  mesh1 = new THREE.Mesh( geometry, material );
  mesh1.position.z = -1000;
  mesh1.position.y = 200;




  // Add mesh to scene
  scene.add( mesh );
  scene.add( mesh1 );

}

  var controller = new function(){
    this.scalex = 1;
    this.scaley = 1;
    this.scalez = 1;
    this.rotationx = 0.;
    this.rotationy = 0.;
    this.rotationz = 0.;
    this.positionx = 0;
    this.positiony = 0;


  }



 var gui = new dat.GUI();
var f0 = gui.addFolder('Cube1');
  var f1 = gui.addFolder('Scale');
      f1.add(controller,'scalex',0.1, 5).onChange(function() {
        mesh.scale.x = (controller.scalex)
      });


      f1.add(controller,'scaley',0.1, 5).onChange(function() {
        mesh.scale.y = (controller.scaley)
      });


      f1.add(controller,'scalez',0.1, 5).onChange(function() {
          mesh.scale.z = (controller.scalez)
        });


var f2 = gui.addFolder('Position');
f2.add(controller,'positionx',-400, 400).onChange(function() {
  mesh.position.x = (controller.positionx)
});


f2.add(controller,'positiony',-400, 400).onChange(function() {
  mesh.position.y = (controller.positiony)
});






var f3 = gui.addFolder('Rotation');
f3.add(controller,'rotationx',-180, 180).onChange(function() {
  mesh.rotation.x =  de2ra(controller.rotationx)
});


f3.add(controller,'rotationy',-180, 180).onChange(function() {
  mesh.rotation.y =  de2ra(controller.rotationy)
});


f3.add(controller,'rotationz',-180, 180).onChange(function() {
  mesh.rotation.z = de2ra(controller.rotationz)
  });




  var gui = new dat.GUI();
 var f0 = gui.addFolder('Cube1');
   var f1 = gui.addFolder('Scale');
       f1.add(controller,'scalex',0.1, 5).onChange(function() {
         mesh1.scale.x = (controller.scalex)
       });


       f1.add(controller,'scaley',0.1, 5).onChange(function() {
         mesh1.scale.y = (controller.scaley)
       });


       f1.add(controller,'scalez',0.1, 5).onChange(function() {
           mesh1.scale.z = (controller.scalez)
         });


 var f2 = gui.addFolder('Position');
 f2.add(controller,'positionx',-400, 400).onChange(function() {
   mesh1.position.x = (controller.positionx)
 });


 f2.add(controller,'positiony',-400, 400).onChange(function() {
   mesh1.position.y = (controller.positiony)
 });






 var f3 = gui.addFolder('Rotation');
 f3.add(controller,'rotationx',-180, 180).onChange(function() {
   mesh1.rotation.x =  de2ra(controller.rotationx)
 });


 f3.add(controller,'rotationy',-180, 180).onChange(function() {
   mesh1.rotation.y =  de2ra(controller.rotationy)
 });


 f3.add(controller,'rotationz',-180, 180).onChange(function() {
   mesh1.rotation.z = de2ra(controller.rotationz)
   });












// Render Loop
var render = function () {
  requestAnimationFrame( render );

//  mesh.rotation.x += 0.01; //Continuously rotate the mesh
//  mesh.rotation.y += 0.01;

  renderer.setClearColor("#84c1ff");

  // Render the scene
  renderer.render(scene, camera);
};

function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  if (result.length == 8){return result;}
}

function lightingSystem(){
  var object3d  = new THREE.DirectionalLight('white', 0.15);
  object3d.position.set(6,3,9);
  object3d.name = 'Back light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.35);
  object3d.position.set(-6, -3, 0);
  object3d.name   = 'Key light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.55);
  object3d.position.set(9, 9, 6);
  object3d.name = 'Fill light';
  scene.add(object3d);

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 3, 30, 3 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 45;
  scene.add( spotLight );
}


init();
geometry();
render();
