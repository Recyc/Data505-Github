## S8-00 ##
This project allows the center of the five eyes to move following the movement of the mouse when the position of the five eyes is determined. Through this project, you can understand the conversion relationship between 3D coordinates and 2D coordinates.

#### Description of work ####
The eyeballs of the five eyes follow the movement of the mouse.

#### Usage ####
```javascript
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
```

* This code defines two quantities, windowHalfX and Y, which are half the length and width of the screen, respectively.

```javascript
var eyes = [];
var xPos = [];
var yPos = [];
var xPosMap = [];
var yPosMap = [];

for (var i = 0; i < eyesNum; i++) {
  mesh = new THREE.Mesh( geometry, material );

  xPos[i] = Math.random() * 100 - 50;
  yPos[i] = Math.random() * 100 - 50;

  xPos [0] = 0;
  yPos [0] = 0;

  xPos [1] = -50;
  yPos [1] = -50;

  xPos [2] = 50;
  yPos [2] = -50;

  xPos [3] = -50;
  yPos [3] = 50;

  xPos [4] = 50;
  yPos [4] = 50;

  xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
  yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);

  mesh.position.x = xPos[i];
  mesh.position.y = yPos[i];

  var randSize = Math.random() * 0.8;
  mesh.scale.x = randSize;
  mesh.scale.y = randSize;
  mesh.scale.z = randSize;

  scene.add( mesh );
  eyes.push( mesh );
}
```

* This code defines the position of 5 eyes in an array.The position of the 0th eye is (0,0),1st eye is (-50,-50),2nd eye is (50,-50),3rd eye is (-50,50),4th eye is (50,50).

```javascript
var randSize = Math.random() * 0.8;
mesh.scale.x = randSize;
mesh.scale.y = randSize;
mesh.scale.z = randSize;
```

* This code makes the scale of the eyeball random.

```javascript
function render() {
	console.log(mouseY)
	for (var i = 0; i < eyesNum; i++) {

		eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
		eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);
//左下角
		if (mouseX<140) eyes[1].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[1].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);
//左上角
		if (mouseX<140) eyes[3].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[3].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);
//右上角
    if (mouseX< 590) eyes[4].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.69);
    else eyes[4].rotation.y = map_range(mouseX, 590 , window.innerWidth, -0.69 , 0.2);
    if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
    else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);
//左下角
		if (mouseX < 590) eyes[2].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.69);
		else eyes[2].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.69, 0.2);
		if (mouseY < 810) eyes[2].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[2].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

  }
}
  ```  
* This code is the main part of the entire project.The biggest difficulty in understanding this paragraph is to understand the meaning of the numbers in parentheses.


```javascript
eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);
```

* This code determines the center position, which is the angle of rotation of the eye at the (0,0) position. -1.14 is the angle of rotation of the eye to the leftmost side, and +1.14 is the angle of rotation of the eye to the far right.The top and bottom also represent the two sets of values.

```javascript
if (mouseX<140) eyes[1].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
else eyes[1].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
```
* I use this paragraph as an example to illustrate.This code uses the if/else function.When the x coordinate of the mouse is less than 140, the meaning of (0, 140, -0.2, 0.25) is that when the x coordinate of the mouse is in the interval of 0 to 140, the angle of rotation of the eyeball is -0.2 to 0.25.
* And when x is not in the interval (0,140), the angle of rotation of the eye is 0.25 to 1.14.
* Because the position of the No. 1 eyeball is at (-50, -50), which is the upper left corner of the screen, the angle at which the eyeball rotates to the left is much smaller than the angle of rotation to the right.
* In the same way, we can write the rotation code of the eyeball 2, 3, 4.

```javascript
function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	//mouseX = event.clientX - windowHalfX;
  mouseX = event.clientX;
  mouseY = event.clientY;
}
```
* This code unites the 2D coordinates of the mouse with the 3D coordinates.
