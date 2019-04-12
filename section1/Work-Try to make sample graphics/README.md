## S1-01 geometry ##
The purpose of this project is to follow the pictures shown in the class. By doing this, you can grasp the method of creating an object.

#### Description ####
There is a wireframe IcosahedronGeometry and some BoxGeometries which rotate in different speeds in the scene. Two spheres stay in the center of screen.

#### Usage ####
```javascript
function init(){

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 300, 10000 );
  renderer = new THREE.WebGLRenderer({antialias:true});

}

```

* This code is creating an empty scene, a basic perspective camera and a renderer with Antialiasing.

```javascript
renderer.setClearColor("#000000");

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

}

```

* Configure renderer clear color and  renderer size.Then Append Renderer to DOM.The green number in parentheses is the code representation of the color. Unlike the rgb expression, each two digits controls one color. Need to use # or 0xu as a prefix.

```javascript
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
}

```

* These codes are the key code for creating objects.First define the geometry and material separately, then let the mesh = (geometry, material) that needs to be generated.
Border refers to the border of the generated object.
"Mesh position" is used to determine the position of the mesh. Position is followed by x, y or z to determine the position on the x, y, or z axis.
* I create two IcosahedronGeometry in this scene.

```javascript
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0;
  mesh1.rotation.z += 0.01;

  mesh2.rotation.x += 0;
  mesh2.rotation.z += 0.5;
}

```

* These codes are used to control the changes in the mesh on each axis. In this paragraph, mesh1.rotation.z += 0.01 is to increment the z coordinate axis of mesh1 by 0.01 each time. Thus mesh1 can move on the z coordinate axis.

```javascript
var light = new THREE.AmbientLight( 0x404040 );
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

var light = new THREE.DirectionalLight( 0xffffff, 1, 100 );
light.position.set( 0, 1, 0 ); 			
light.castShadow = true;          
scene.add( light );

light.shadow.mapSize.width = 512;
light.shadow.mapSize.height = 512;
light.shadow.camera.near = 0.5;    
light.shadow.camera.far = 500;    

```

* This is the light and shadows system in this scene.
