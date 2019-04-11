## S2-01 ##
This project is about the changing material of the objects.

#### Description ####
The first, third and fifth columns are a cube and a sphere whose material is "Texture/chong". The second and fourth columns are a cube, a sphere and a cylinder, respectively. The material of these columns is "Texture/timg". A 1000*1000*1000 cube is placed behind all objects as a background.

#### Usage ####
```javascript
var scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
```
* The purpose of this code is to create a scene, a basic perspective camera, a Renderer with antialiasing.

```javascript
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#4F9D9D");
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);
var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
```
* The purpose of this code is to  configure renderer clear color and renderer size.Then add two lights into the scene.


```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100);
```
* This code is to create a Cube Mesh with basic material.


```javascript
var  texture = new THREE.TextureLoader().load('texture/chong.jpg');
var  material1 = new THREE.MeshBasicMaterial({map: texture});

var  texture = new THREE.TextureLoader().load('texture/timg.jpg');
var  material2 = new THREE.MeshBasicMaterial({map: texture});

```
* This code is to define Material1 anf material2 with two different textures.



```javascript
var mesh1 = new THREE.Mesh( geometry, material2);
mesh1.position.z = -1000;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material1 );
mesh2.position.z = -1000;
mesh2.position.x = -100;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry, material2 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;

var mesh4 = new THREE.Mesh( geometry, material1 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;

var mesh5 = new THREE.Mesh( geometry, material2 );
mesh5.position.z = -1000;
mesh5.position.x = 200;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry, material2 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;

var geometry = new THREE.DodecahedronGeometry(70,  1);

var mesh7 = new THREE.Mesh( geometry, material1 );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry, material2);
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;

{var mesh9 = new THREE.Mesh( geometry, material1 );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

var mesh10 = new THREE.Mesh( geometry, material2 );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;}

var geometry = new THREE.CylinderBufferGeometry( 70, 50, 200, 320 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );

{var mesh11 = new THREE.Mesh( geometry, material1 );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry, material1 );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;}

var geometry = new THREE.BoxGeometry(1000, 1000, 1000);
var material = new THREE.MeshBasicMaterial( {color: 0x7b7b7b} );
{var mesh13 = new THREE.Mesh( geometry, material3);
mesh13.position.z = -2000;
mesh13.position.x = 500;
mesh13.position.y = 0;}

scene.add( mesh1 );
scene.add( mesh2 );//上1
scene.add( mesh3 );//左1
scene.add( mesh4 );//上2
scene.add( mesh5 );//右1
scene.add( mesh6 );//中2
scene.add( mesh7 );//中1圆
scene.add( mesh8 );//右1圆
scene.add( mesh9 );//左1圆
scene.add( mesh10 );//中2圆
scene.add( mesh11 );//
scene.add( mesh12 );//
scene.add( mesh13 );//
```
* This code is to create different objects.I use {} to define different objects separately and add them into the scene.


```javascript
var rot = 0;
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1;
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot;
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2;
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot;
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2;
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1;
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot;
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2;
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot;
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2;
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot;
  mesh11.rotation.y = rot;

  mesh12.rotation.x = rot;
  mesh12.rotation.y = rot;

  // Render the scene
  renderer.render(scene, camera);


};

render();
```
* This code is to give those objects a speed in x and y.By this, those objects can rotate in a Loop.
