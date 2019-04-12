## S9-01 ##
This project is also about the application of radiation. But unlike the previous work, this work allows the mouse to play audio as it passes over the object.

#### Description of work ####
I imported a piece of audio into the web page and played my pre-imported audio whenever the mouse passed the 3d model.

#### Usage ####
```javascript
raycaster.setFromCamera( mouse, camera );
//var intersects = raycaster.intersectObjects( scene.children );

var intersects = raycaster.intersectObjects( objects, true );

if ( intersects.length > 0 ) {
  if ( INTERSECTED != intersects[ 0 ].object ) {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = intersects[ 0 ].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex( 0xff0000 );

    audioLoader.load( 'audio/yarimasune.wav', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setLoop( false );
      sound.setVolume( 0.5 );
      sound.play();
    });

  }
} else {
  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  INTERSECTED = null;
}
renderer.render( scene, camera );
```
* The green text is the replacement part. Import the prepared audio file into the folder first, and then use this code to reference it. The audio can be played back during the imaging determination.
