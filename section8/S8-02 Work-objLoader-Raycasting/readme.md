## S8-02 ##
The main purpose of this project is to let us know how to import models on the web and understand the use of ray.

#### Description of work ####

#### Usage ####
```javascript
for (var i=0; i<50; i++){

var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("chezi.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("chezi.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.5;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh); //Add to the array so that we can access for raycasting
    });
  });
}
```
* This code is the code that displays the 3d model file into the web page.
* The green text in the code is the name of the file that needs to be replaced. The 3d model can be imported by awakening the file name of the corresponding mtl format file and the obj format file.
* At the same time, this code also allows the imported model amount to be randomly sized, and the location is generated on the screen.


```javascript
raycaster = new THREE.Raycaster();

renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);


document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );
```
```javascript
raycaster.setFromCamera( mouse, camera );

var intersects = raycaster.intersectObjects( objects, true );

if ( intersects.length > 0 ) {
  if ( INTERSECTED != intersects[ 0 ].object ) {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = intersects[ 0 ].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex( Math.random()*0xffffff );
  }
} else {
  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  INTERSECTED = null;
}
renderer.render( scene, camera );
```
* These two pieces of code are the application of ray. The mouse emits a ray, and whenever the mouse passes over the object, that is, the imported 3D model, a determination is made to change the color of the passing object.
