## S4-01 ##
This project is to practise creating objects as a group.In this way,we can create a lot of objects at the same time without coding each one.We also learned how to add controllers.

#### Description of work ####
In class, we were asked to make a project in which only two different positions of the square are rotating, while others have the same color and do not rotate.

#### Usage ####

```javascript
for (var x = -10; x <= 10; x += 5) { }// Start from -10 and sequentially add one every 5 pixels
for (var y = -10; y <= 10; y += 5){

}
```
* These codes specify the range of values for x and y. Generated from the position of -10, one for every 5 units until the position of 10 is generated. A total of 25 cubes were generated, each with 5 columns each.

```javascript
//console.log("x:" +x+",y:"+y+",z:" +z);
var boxGeometry = new THREE.BoxGeometry(3, 6, 3);

 if (x == -5  && y == -5 ){
 var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xFFFFFF});
}
else if (x == 5 && y == 5){
 var boxMaterial = new THREE.MeshLambertMaterial({color:Math.random()*0xFFFFFF});
} else {
var boxMaterial = new THREE.MeshLambertMaterial({color: 0x6c6c6c});

}
var mesh = new THREE.Mesh(boxGeometry, boxMaterial);  
    mesh.position.x = x ;
    mesh.position.z = y ;
    mesh.scale.y = 0.5;

    mesh.rotation.x = Math.random() * 2 * Math.PI;
    mesh.rotation.y = Math.random() * 2 * Math.PI;
    mesh.rotation.z = Math.random() * 2 * Math.PI;

```

* These codes use "if/else" function to specify the color of the cube. The meaning of && is "satisfy at the same time." Therefore, when x=-5 and y=-5, this cube randomly takes a color. When x=5 and y=5, this cube randomly takes a color. Otherwise, all cubes take 6c6c6c (gray).
The rest of the code controls the initial rotation angle of the cube.These initial angles are randomly chosen.

```javascript
var randomSpeedX = [];
var randomRotationX = [];
var randomRotationY = [];

var randomValueX = (Math.random() * 0.1) - 0.05;
var randomValueY = (Math.random() * 0.1) - 0.05;
randomRotationX.push(randomValueY);
randomRotationY.push(randomValueX);
randomSpeedX.push(randomValueX);
scene.add(mesh);
cubes.push(mesh);
```

* These codes set the rotational speed of the rotating cube. This is achieved by redefining the random quantity X and the random quantity Y.
But there I only push the valueX into the scene.

```javascript
var cubes = [];

for (var i = 0; i < 5; i++){

  cubes[6].rotation.x  +=  randomSpeedX[6];
  cubes[18].rotation.x +=  randomSpeedX[18];
}
  ```

* These codes are related to arrays, which specify array 6 and array 18, that is, the sixth and the 18th of the 25 cubes created above are rotated at random speed on the X-axis.
