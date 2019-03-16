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
//背景


  var  texture = new THREE.TextureLoader().load('texture/P5.png');
  var  material2 = new THREE.MeshBasicMaterial({map: texture});


  // Create a Cube Mesh with basic material ---------


//圆环1 中
  geometry = new THREE.RingGeometry( 90, 100, 32 );
  material = new THREE.MeshBasicMaterial( { color: 0xbebebe, side: THREE.DoubleSide } );
  mesh2 = new THREE.Mesh( geometry, material );
  mesh2.position.z = -1000;
  mesh2.position.y = 0;
  mesh2.position.y = 0;



//圆环2 大
  geometry = new THREE.RingGeometry( 190, 300, 32 );
  var  texture = new THREE.TextureLoader().load('texture/dian.jpg');
  var  material = new THREE.MeshBasicMaterial({map: texture});
  mesh3 = new THREE.Mesh( geometry, material );
  mesh3.position.z = -1100;
  mesh3.position.y = 0;
  mesh3.position.y = 0;

//圆环3
 geometry = new THREE.RingGeometry( 180, 400, 32 );
 texture = new THREE.TextureLoader().load('texture/xuanwo.jpg');
 material = new THREE.MeshBasicMaterial({map: texture});
 mesh4 = new THREE.Mesh( geometry, material );
 mesh4.position.z = -1200;
 mesh4.position.y = 0;
 mesh4.position.y = 0;


//圆环4
 geometry = new THREE.RingGeometry( 30, 100, 32 );
 var  texture = new THREE.TextureLoader().load('texture/bao.jpg');
 var  material = new THREE.MeshBasicMaterial({map: texture});
 mesh5 = new THREE.Mesh( geometry, material );
 mesh5.position.z = -1300;
 mesh5.position.y = 0;
 mesh5.position.y = 0;


var  texture = new THREE.TextureLoader().load('texture/P5.png');
var  material = new THREE.MeshBasicMaterial({map: texture});
//中心球
var geometry = new THREE.DodecahedronGeometry(70, 5);
mesh6 = new THREE.Mesh( geometry, material );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = 0;




//城市剪影


var  texture = new THREE.TextureLoader().load('texture/lan.jpg');
var  material2 = new THREE.MeshBasicMaterial({map: texture});

//左侧立柱
geometry = new THREE.BoxGeometry(160,80, 60);
mesh = new THREE.Mesh( geometry, material2 );
mesh.position.z = -500;
mesh.position.x = -180;
mesh.position.y = 0;

mesh.rotation.y =de2ra(controller.rotationy = 0);
mesh.rotation.z =de2ra(controller.rotationz = 0);
mesh.rotation.x =de2ra(controller.rotationx = 0)
//左上


//右侧立柱
geometry = new THREE.BoxGeometry(160, 80, 60);

mesh9 = new THREE.Mesh( geometry, material2 );
mesh9.position.z = -500;
mesh9.position.x = 180;
mesh9.position.y = 0;

mesh9.rotation.y =de2ra(controller.rotationy = 0);
mesh9.rotation.z =de2ra(controller.rotationz = 0);
mesh9.rotation.x =de2ra(controller.rotationx = 0);



//下方
geometry = new THREE.BoxGeometry(160, 60, 60);
var  texture = new THREE.TextureLoader().load('texture/jin.jpg');
var  material = new THREE.MeshBasicMaterial({map: texture});
//左上
mesh10 = new THREE.Mesh( geometry, material );
mesh10.position.z = -1000;
mesh10.position.x = -140;
mesh10.position.y = 140;

mesh10.rotation.y =de2ra(controller.rotationy = 0);
mesh10.rotation.z =de2ra(controller.rotationz = -45);
mesh10.rotation.x =de2ra(controller.rotationx = 0);


geometry = new THREE.BoxGeometry(160, 60, 60);
//右上
mesh11 = new THREE.Mesh( geometry, material );
mesh11.position.z = -1000;
mesh11.position.x = 140;
mesh11.position.y = 140;

mesh11.rotation.y =de2ra(controller.rotationy = 0);
mesh11.rotation.z =de2ra(controller.rotationz = 45);
mesh11.rotation.x =de2ra(controller.rotationx = 0);

geometry = new THREE.BoxGeometry(160, 60, 60);
//左下
mesh12 = new THREE.Mesh( geometry, material );
mesh12.position.z = -1000;
mesh12.position.x = -140;
mesh12.position.y = -140;

mesh12.rotation.y =de2ra(controller.rotationy = 0);
mesh12.rotation.z =de2ra(controller.rotationz = 45);
mesh12.rotation.x =de2ra(controller.rotationx = 0);
//右下
mesh13 = new THREE.Mesh( geometry, material );
mesh13.position.z = -1000;
mesh13.position.x = 140;
mesh13.position.y = -140;

mesh13.rotation.y =de2ra(controller.rotationy = 0);
mesh13.rotation.z =de2ra(controller.rotationz = -45);
mesh13.rotation.x =de2ra(controller.rotationx = 0);

//中心圆环
var  texture = new THREE.TextureLoader().load('texture/xue.jpg');
var  material = new THREE.MeshBasicMaterial({map: texture});
geometry = new THREE.RingGeometry( 120, 160, 32 );
mesh14 = new THREE.Mesh( geometry, material );
mesh14.position.z = -1200;
mesh14.position.y = 0;
mesh14.position.y = 0;


geometry = new THREE.BoxGeometry(160, 80, 60);
var  texture = new THREE.TextureLoader().load('texture/lan.jpg');
var  material2 = new THREE.MeshBasicMaterial({map: texture});
//上方立柱
mesh15 = new THREE.Mesh( geometry, material2 );
mesh15.position.z = -500;
mesh15.position.x = 0;
mesh15.position.y = 180;
mesh15.rotation.y =de2ra(controller.rotationy = 0);
mesh15.rotation.z =de2ra(controller.rotationz = -90);
mesh15.rotation.x =de2ra(controller.rotationx = 0);
//下方立柱
mesh16 = new THREE.Mesh( geometry, material2 );
mesh16.position.z = -500;
mesh16.position.x = 0;
mesh16.position.y = -180;
mesh16.rotation.y =de2ra(controller.rotationy = 0);
mesh16.rotation.z =de2ra(controller.rotationz = 90);
mesh16.rotation.x =de2ra(controller.rotationx = 0);


geometry = new THREE.BoxGeometry(150, 30, 60);
var  texture = new THREE.TextureLoader().load('texture/tie.jpg');
var  material2 = new THREE.MeshBasicMaterial({map: texture});
//斜向柱体
mesh17 = new THREE.Mesh( geometry, material2 );
mesh17.position.z = -520;
mesh17.position.x = 80;
mesh17.position.y = -80;
mesh17.rotation.y =de2ra(controller.rotationy = 0);
mesh17.rotation.z =de2ra(controller.rotationz = 45);
mesh17.rotation.x =de2ra(controller.rotationx = 0);

mesh18 = new THREE.Mesh( geometry, material2 );
mesh18.position.z = -520;
mesh18.position.x = -80;
mesh18.position.y = 80;
mesh18.rotation.y =de2ra(controller.rotationy = 0);
mesh18.rotation.z =de2ra(controller.rotationz = 45);
mesh18.rotation.x =de2ra(controller.rotationx = 0);

mesh19 = new THREE.Mesh( geometry, material2 );
mesh19.position.z = -520;
mesh19.position.x = 80;
mesh19.position.y = 80;
mesh19.rotation.y =de2ra(controller.rotationy = 0);
mesh19.rotation.z =de2ra(controller.rotationz = -45);
mesh19.rotation.x =de2ra(controller.rotationx = 0);


mesh20 = new THREE.Mesh( geometry, material2 );
mesh20.position.z = -520;
mesh20.position.x = -80;
mesh20.position.y = -80;
mesh20.rotation.y =de2ra(controller.rotationy = 0);
mesh20.rotation.z =de2ra(controller.rotationz = -45);
mesh20.rotation.x =de2ra(controller.rotationx = 0);

texture = new THREE.TextureLoader().load('texture/ronghe.jpg');
material = new THREE.MeshBasicMaterial({map: texture});

{geometry = new THREE.RingGeometry( 150, 200, 32 );
mesh21 = new THREE.Mesh( geometry, material );
mesh21.position.z = -400;
mesh21.position.y = 0;
mesh21.position.y = 0;}


geometry = new THREE.RingGeometry( 160, 200, 32 );
material = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
mesh22 = new THREE.Mesh( geometry, material );
mesh22.position.z = -370;
mesh22.position.y = 0;
mesh22.position.y = 0;




geometry = new THREE.PlaneGeometry( 5, 20, 32 );
material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
plane = new THREE.Mesh( geometry, material );
scene.add( plane )



//三角形遮罩
/*var geometry = new THREE.ConeGeometry( 83, 40, 2 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
{var cone = new THREE.Mesh( geometry, material )};
cone.position.z = -1000;
cone.position.x =-0;
cone.position.y =-60;

cone.rotation.y =de2ra(controller.rotationy = 90);
cone.rotation.z =de2ra(controller.rotationz = 0);
cone.rotation.x =de2ra(controller.rotationx = 180);*/




//左
  scene.add(mesh);
//左上的

//右边的
  scene.add(mesh9);

  scene.add(mesh10);

  scene.add(mesh11);

  scene.add(mesh12);

  scene.add(mesh13);

  scene.add(mesh14);

  scene.add(mesh15);

  scene.add(mesh16);

  scene.add(mesh17);

  scene.add(mesh18);

  scene.add(mesh19);

  scene.add(mesh20);

  scene.add( plane )
  /*
  scene.add( cone );*/

  //背景环
  scene.add( mesh2 );
  scene.add( mesh3 );
  scene.add( mesh4 );
  scene.add( mesh5 );
  //背景旋转
  scene.add(mesh21);
  scene.add(mesh22);

  //中心圆
  scene.add( mesh6 );

}
  //中心

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
        mesh6.scale.x = (controller.scalex)
      });


      f1.add(controller,'scaley',0.1, 5).onChange(function() {
        mesh6.scale.y = (controller.scaley)
      });


      f1.add(controller,'scalez',0.1, 5).onChange(function() {
          mesh6.scale.z = (controller.scalez)
        });


var f2 = gui.addFolder('Position');
f2.add(controller,'positionx',-400, 400).onChange(function() {
  mesh6.position.x = (controller.positionx)
});


f2.add(controller,'positiony',-400, 400).onChange(function() {
  mesh6.position.y = (controller.positiony)
});






var f3 = gui.addFolder('Rotation');
f3.add(controller,'rotationx',-180, 180).onChange(function() {
  mesh6.rotation.x =  de2ra(controller.rotationx)
});


f3.add(controller,'rotationy',-180, 180).onChange(function() {
  mesh6.rotation.y =  de2ra(controller.rotationy)
});


f3.add(controller,'rotationz',-180, 180).onChange(function() {
  mesh6.rotation.z = de2ra(controller.rotationz)
  });



  var gui = new dat.GUI();
 var f0 = gui.addFolder('Cube1');
   var f1 = gui.addFolder('Scale');
       f1.add(controller,'scalex',0.1, 5).onChange(function() {
         mesh6.scale.x = (controller.scalex)
       });


       f1.add(controller,'scaley',0.1, 5).onChange(function() {
         mesh6.scale.y = (controller.scaley)
       });


       f1.add(controller,'scalez',0.1, 5).onChange(function() {
           mesh6.scale.z = (controller.scalez)
         });


 var f2 = gui.addFolder('Position');
 f2.add(controller,'positionx',-400, 400).onChange(function() {
   mesh6.position.x = (controller.positionx)
 });


 f2.add(controller,'positiony',-400, 400).onChange(function() {
   mesh6.position.y = (controller.positiony)
 });






 var f3 = gui.addFolder('Rotation');
 f3.add(controller,'rotationx',-180, 180).onChange(function() {
   mesh6.rotation.x =  de2ra(controller.rotationx)
 });


 f3.add(controller,'rotationy',-180, 180).onChange(function() {
   mesh6.rotation.y =  de2ra(controller.rotationy)
 });


 f3.add(controller,'rotationz',-180, 180).onChange(function() {
   mesh6.rotation.z = de2ra(controller.rotationz)
   });







var rot
// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot = 0.01





  mesh2.rotation.x += rot;
  mesh2.rotation.y += rot;


  mesh3.rotation.x += rot;
  mesh3.rotation.y += rot;


  mesh4.rotation.z +=  rot ;

  mesh5.rotation.x += rot;
  mesh5.rotation.y += rot;



  mesh6.rotation.y +=  rot;

  mesh21.rotation.z +=  rot*1.2;

  mesh14.rotation.z -=  rot*1.2;
  mesh14.rotation.x +=  rot*1.2;

  renderer.setClearColor("#000000");


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
