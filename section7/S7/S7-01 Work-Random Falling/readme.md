## S7-01 ##
The purpose of this project is to practice letting objects randomly generate and obtain random textures that fall at random speed.
#### Description of work ####
Each object gets a random texture and falls at a random rate.

#### Usage ####
```javascript
function animate() {
	requestAnimationFrame( animate );
	// Rotate the x position of the mesh by 0.03
	mesh.rotation.x += 0.02;
	// Rotate the y position of the mesh by 0.02
	mesh.rotation.y += 0.01;
	//Move the mesh towards the bottom of the screen
	mesh.position.y -= 0.2;
```
*These codes, through the animation function, allow each cube to get the speed on the x and y axes, allowing them to rotate.

```javascript
var speed = [];
var cubesNum = 10;
for (var i = 0; i < cubesNum; i++){
	var randomValue = Math.random()*0.5;
	speed.push(randomValue);
};

let randomSelection = Math.round(Math.random()*2);
```
*These codes make the total number of squares 10. and specify a random amount and bring him to speed. Finally, it is specified that the initial position where the object appears is a random round.

```javascript
texture = new THREE.TextureLoader().load( "texture" + randomSelection + ".jpg");

	// Create a MeshBasicMaterial with a loaded texture
material = new THREE.MeshBasicMaterial( { map: texture} );
```
*These codes allow each block to get a random texture. The specific method is to randomly select the number of the suffix of the texture.
