# FINAL WORK - music visualiation galaxy #

I am very interested in the content of sound visualization. So I want to add sound visualizations to my final assignment, even though I don't teach them in the classroom. I found a plugin for Simplex-noise and created this project.
#### student Name ####
Yucheng Xiao
#### Nua student ID  ####
B161006094
### Description of work ###

I want to make a galaxy that sounds visual. I use a ball that can change shape with music as the star of the entire galaxy, with two plans that can float with music as a nebula. Then, a star with a random rotation is placed around the star, and several star rings are created.

![overall effect](https://github.com/Recyc/Data505-Github/blob/master/Yucheng%20Xiao-FINAL%20WORK-sound%20visualization%20galaxy/ScreenShot/screenshot.PNG)

![core](https://github.com/Recyc/Data505-Github/blob/master/Yucheng%20Xiao-FINAL%20WORK-sound%20visualization%20galaxy/ScreenShot/core.PNG)

### Usage ###

#### html ####
```html
<script src="build/simplex-noise.min.js"></script>
```
* This code is a library that calls simple-noise.

#### js ####
```javascript
var noise = new SimplexNoise();
```
* Call library.

#### the link that the SimplexNoise and some help from ####
* https://cdnjs.com/libraries/simplex-noise
* http://www.w3school.com.cn
* https://codepen.io
* https://www.cnblogs.com/Wayou/p/3543577.html

#### Main body ####

```javascript
var vizInit = function (){

  var file = document.getElementById("thefile");
  var audio = document.getElementById("audio");
  var fileLabel = document.querySelector("label.file");

  document.onload = function(e){
    console.log(e);
    audio.play();
    play();
  }
  file.onchange = function(){
    fileLabel.classList.add('normal');
    audio.classList.add('active');
    var files = this.files;

    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    play();
  }
}
```
* This code allows the program to import local audio files.

```javascript
 var context = new AudioContext();
 var src = context.createMediaElementSource(audio);
 var analyser = context.createAnalyser();
 src.connect(analyser);
 ```
* Create an audioContext.

```javascript
analyser.connect(context.destination);
analyser.fftSize = 512;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
```
 * This code parses the audio and parses it into data. This data can then be converted to the length value of the buffer object.
 * The

```javascript
 var scene = new THREE.Scene();
 var group = new THREE.Group();
 var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
 camera.position.set(0,0,100);
 camera.lookAt(scene.position);
 scene.add(camera);
```
 * Create scene, camera and create a group. This gruop is used to create bufferplane and bufferball in the form of group below.

```javascript
 var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
 renderer.setSize(window.innerWidth, window.innerHeight);
 ```
 * Add the renderer to the scene, turn on alpha and antialias, and set the size of the render area.

```javascript
 var planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
 var planeMaterial = new THREE.MeshLambertMaterial({
     color: 0x6904ce,
     side: THREE.DoubleSide,
     wireframe: true
 });
```
 * Define the geometry and material of the plane. Open the wireframe of the plane (defined as true).

```javascript
 var plane = new THREE.Mesh(planeGeometry, planeMaterial);
 plane.rotation.x = -0.5 * Math.PI;
 plane.position.set(0, 40, 0);
 group.add(plane);

 var plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
 plane2.rotation.x = -0.5 * Math.PI;
 plane2.position.set(0, -40, 0);
 group.add(plane2);
```
 * Add plane to the scene.

```javascript
plane.rotation.x = -0.5 * Math.PI;
```
 * Let the plane rotate in the negative direction on the X axis.

```javascript
 var icosahedronGeometry = new THREE.IcosahedronGeometry(10, 4);
 var lambertMaterial = new THREE.MeshLambertMaterial({
     color: 0x84c1ff,
     wireframe: true
 });

 var ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
 ball.position.set(0, 0, 0);
 group.add(ball);

```
 * Define the icosahedron's geometry and lambert material whitch in the center of the galaxy.Difine the
wireframe on ture.

```javascript
var icosahedronGeometry1 = new THREE.IcosahedronGeometry(8, 4);
var lambertMaterial1 = new THREE.MeshLamtertMaterial({
    color: 0xca8eff,
    wireframe: true
});

var ball1 = new THREE.Mesh(icosahedronGeometry1, lambertMaterial1);
ball1.position.set(0, 0, 0);
group.add(ball1);



var icosahedronGeometry2 = new THREE.IcosahedronGeometry(6, 4);
var lambertMaterial2 = new THREE.MeshLambertMaterial({
    color: 0xff5151,
    wireframe: true
});

var ball2 = new THREE.Mesh(icosahedronGeometry2, lambertMaterial2);
ball2.position.set(0, 0, 0);
group.add(ball2);


var icosahedronGeometry3 = new THREE.IcosahedronGeometry(50, 4);
var lambertMaterial3 = new THREE.MeshLambertMaterial({
    color: 0x7d7dff,
    wireframe: true
});

var ball3 = new THREE.Mesh(icosahedronGeometry3, lambertMaterial3);
ball3.position.set(0, 0, 0);
group.add(ball3);

```
 * Create three different sized icosahedrons, named ball1, 2, and 3, respectively, to wrap the cores of the center and give them different colors for the wireframe. The purpose of this is to make the visual effects more colorful.

```javascript
 var icosahedronGeometry4 = new THREE.IcosahedronGeometry(400, 4);
 var lambertMaterial4 = new THREE.MeshLambertMaterial({
     color: 0x000079,
     wireframe: true
 });

 var ball4 = new THREE.Mesh(icosahedronGeometry4, lambertMaterial4);
 ball4.position.set(0, 0, 0);
 group.add(ball4);

 ```
 * Create a big icosahedron to wrap the entire galaxy.


```javascript
function render() {
  analyser.getByteFrequencyData(dataArray);

  var lowerHalfArray = dataArray.slice(0, (dataArray.length/2) - 1);
  var upperHalfArray = dataArray.slice((dataArray.length/2) - 1, dataArray.length - 1);

  var overallAvg = avg(dataArray);
  var lowerMax = max(lowerHalfArray);
  var lowerAvg = avg(lowerHalfArray);
  var upperMax = max(upperHalfArray);
  var upperAvg = avg(upperHalfArray);

  var lowerMaxFr = lowerMax / lowerHalfArray.length;
  var lowerAvgFr = lowerAvg / lowerHalfArray.length;
  var upperMaxFr = upperMax / upperHalfArray.length;
  var upperAvgFr = upperAvg / upperHalfArray.length;
}
```
 *  An Analyser used to convert the energy value of an audio into data.

```javascript
 makeRoughGround(plane, modulate(upperAvgFr, 0, 1, 0.5, 4));
 makeRoughGround(plane2, modulate(lowerMaxFr, 0, 1, 0.5, 4));

 makeRoughBall(ball, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));
 makeRoughBall(ball1, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));
 makeRoughBall(ball2, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));
 makeRoughBall(ball3, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));
 makeRoughBall(ball4, modulate(Math.pow(lowerMaxFr, 0.8), 0, 1, 0, 8), modulate(upperAvgFr, 0, 1, 0, 4));


 group.rotation.y += 0.005;
 renderer.render(scene, camera);
 requestAnimationFrame(render);
```
 * Pass the data output by the analyzer to the previously created plan and icosahedron.

```javascript
 var ambientLight = new THREE.AmbientLight(0xffffff);
 scene.add(ambientLight);

 var spotLight = new THREE.SpotLight(0xffffff);
 spotLight.intensity = 0.9;
 spotLight.position.set(-10, 40, 20);
 spotLight.lookAt(ball);
 spotLight.castShadow = true;
 scene.add(spotLight);

 ```
  * Add spotLight and ambientLight.

```javascript
  var orbitControls = new THREE.OrbitControls(camera);
 ```
  * Add OribitControls.

```javascript
  var  texture = new THREE.TextureLoader().load('Texture/flame star.jpg');
  var  material3 = new THREE.MeshBasicMaterial({map: texture});

  var  texture = new THREE.TextureLoader().load('Texture/glow star.jpg');
  var  material4 = new THREE.MeshBasicMaterial({map: texture});

  var  texture = new THREE.TextureLoader().load('Texture/sea star.jpg');
  var  material5 = new THREE.MeshBasicMaterial({map: texture});

  var  texture = new THREE.TextureLoader().load('Texture/gold star.jpg');
  var  material6 = new THREE.MeshBasicMaterial({map: texture});

  var  texture = new THREE.TextureLoader().load('Texture/star.jpg');
  var  material7 = new THREE.MeshBasicMaterial({map: texture});

  var  texture = new THREE.TextureLoader().load('Texture/core.jpg');
  var  material8 = new THREE.MeshBasicMaterial({map: texture});
```
 * Make material with texture.

```javascript
var geometry = new THREE.SphereGeometry( 9, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x00aeae} );
var sphere = new THREE.Mesh( geometry, material8 );


var geometry1 = new THREE.SphereGeometry( 8, 32, 32 );
var sphere2 = new THREE.Mesh( geometry1, material3 );
sphere2.position.set(80, 0, -10 );


var geometry2 = new THREE.SphereGeometry( 16, 32, 32 );
var sphere3 = new THREE.Mesh( geometry2, material4 );
sphere3.position.set(130, 0, 30 );

var geometry3 = new THREE.SphereGeometry( 9, 32, 32 );
var sphere4 = new THREE.Mesh( geometry3, material5 );
sphere4.position.set(170, 0, 90 );


var geometry4 = new THREE.SphereGeometry( 24, 32, 32 );
var sphere5 = new THREE.Mesh( geometry4, material6 );
sphere5.position.set(-100, 0, -20 );

var geometry5 = new THREE.SphereGeometry( 13, 32, 32 );
var sphere6 = new THREE.Mesh( geometry5, material7 );
sphere6.position.set(-160, 0, -100 );


var geometry69 = new THREE.SphereGeometry( 35, 32, 32 );
var sphere7 = new THREE.Mesh( geometry69, material8 );
sphere7.position.set(280, 170 , 160 );

var geometry60 = new THREE.SphereGeometry( 35, 32, 32 );
var sphere8 = new THREE.Mesh( geometry60, material8 );
sphere8.position.set(-280, -170 , -160 );
```
 * Create different planets. Each planet has a different texture.

```javascript
sphere2.rotation.x = Math.random() * 2 * Math.PI;
sphere2.rotation.y = Math.random() * 2 * Math.PI;
sphere2.rotation.z = Math.random() * 2 * Math.PI;

sphere3.rotation.x = Math.random() * 2 * Math.PI;
sphere3.rotation.y = Math.random() * 2 * Math.PI;
sphere3.rotation.z = Math.random() * 2 * Math.PI;

sphere4.rotation.x = Math.random() * 2 * Math.PI;
sphere4.rotation.y = Math.random() * 2 * Math.PI;
sphere4.rotation.z = Math.random() * 2 * Math.PI;

sphere5.rotation.x = Math.random() * 2 * Math.PI;
sphere5.rotation.y = Math.random() * 2 * Math.PI;
sphere5.rotation.z = Math.random() * 2 * Math.PI;

sphere6.rotation.x = Math.random() * 2 * Math.PI;
sphere6.rotation.y = Math.random() * 2 * Math.PI;
sphere6.rotation.z = Math.random() * 2 * Math.PI;

sphere7.rotation.x = Math.random() * 2 * Math.PI;
sphere7.rotation.y = Math.random() * 2 * Math.PI;
sphere7.rotation.z = Math.random() * 2 * Math.PI;

```
 * Let each planet's angle be random.

```javascript
geometry6 = new THREE.RingGeometry( 320, 400, 32 );
material8 = new THREE.MeshBasicMaterial( { color: 0xffc1e0, side: THREE.DoubleSide } );
mesh = new THREE.Mesh( geometry6, material8 );
mesh.position.set(0, 0, 0 );
mesh.rotation.set(180, 0, 0 );

geometry7 = new THREE.RingGeometry( 250, 300, 32 );
material8 = new THREE.MeshBasicMaterial( { color: 0xbbffbb, side: THREE.DoubleSide } );
mesh1 = new THREE.Mesh( geometry7, material8 );
mesh1.position.set(0, 0, 0 );
mesh1.rotation.set(-180, 0, 0 );

geometry8 = new THREE.RingGeometry( 140, 150, 32 );
material8 = new THREE.MeshBasicMaterial( { color: 0xacd6ff, side: THREE.DoubleSide } );
mesh2 = new THREE.Mesh( geometry8, material8 );
mesh2.position.set(0, 0, 0 );
mesh2.rotation.set(140, 0, 0 );


geometry9 = new THREE.RingGeometry( 90, 100, 32 );
material8 = new THREE.MeshBasicMaterial( { color: 0xb9b9ff, side: THREE.DoubleSide } );
mesh3 = new THREE.Mesh( geometry9, material8 );
mesh3.position.set(0, 0, 0 );
mesh3.rotation.set(-100, 0, 0 );
```
 * Create a star ring.

### link ###
 [link to the final work](https://github.com/Recyc/Data505-Github/tree/master/FINAL%20WORK-sound%20visualization%20galaxy)
