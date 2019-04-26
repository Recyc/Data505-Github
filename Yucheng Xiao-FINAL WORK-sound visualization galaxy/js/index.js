//initialise simplex noise instance
var noise = new SimplexNoise();

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


function play() {
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 512;
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);


    var scene = new THREE.Scene();
    var group = new THREE.Group();
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0,0,100);
    camera.lookAt(scene.position);
    scene.add(camera);

    var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    var planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0x6904ce,
        side: THREE.DoubleSide,
        wireframe: true
    });

    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, 40, 0);
    group.add(plane);

    var plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
    plane2.rotation.x = -0.5 * Math.PI;
    plane2.position.set(0, -40, 0);
    group.add(plane2);

    var icosahedronGeometry = new THREE.IcosahedronGeometry(10, 4);
    var lambertMaterial = new THREE.MeshLambertMaterial({
        color: 0x84c1ff,
        wireframe: true
    });
    var icosahedronGeometry1 = new THREE.IcosahedronGeometry(8, 4);
    var lambertMaterial1 = new THREE.MeshLambertMaterial({
        color: 0xca8eff,
        wireframe: true
    });

    var icosahedronGeometry2 = new THREE.IcosahedronGeometry(6, 4);
    var lambertMaterial2 = new THREE.MeshLambertMaterial({
        color: 0xff5151,
        wireframe: true
    });


    var icosahedronGeometry3 = new THREE.IcosahedronGeometry(50, 4);
    var lambertMaterial3 = new THREE.MeshLambertMaterial({
        color: 0x7d7dff,
        wireframe: true
    });

    var icosahedronGeometry4 = new THREE.IcosahedronGeometry(400, 4);
    var lambertMaterial4 = new THREE.MeshLambertMaterial({
        color: 0x000079,
        wireframe: true
    });

    var ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    ball.position.set(0, 0, 0);
    group.add(ball);

    var ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.intensity = 0.9;
    spotLight.position.set(-10, 40, 20);
    spotLight.lookAt(ball);
    spotLight.castShadow = true;
    scene.add(spotLight);

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.autoRotate = true;

    scene.add(group);

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


    scene.add( sphere );
    scene.add( sphere2 );
    scene.add( sphere3 );
    scene.add( sphere4 );
    scene.add( sphere5 );
    scene.add( sphere6 );
    scene.add( sphere7 );
    scene.add( sphere8 );

    scene.add( mesh );
    scene.add( mesh1 );
    scene.add( mesh2 );
    scene.add( mesh3 );

    var ball1 = new THREE.Mesh(icosahedronGeometry1, lambertMaterial1);
    ball1.position.set(0, 0, 0);
    group.add(ball1);

    var ball2 = new THREE.Mesh(icosahedronGeometry2, lambertMaterial2);
    ball2.position.set(0, 0, 0);
    group.add(ball2);

    var ball3 = new THREE.Mesh(icosahedronGeometry3, lambertMaterial3);
    ball3.position.set(0, 0, 0);
    group.add(ball3);

    var ball4 = new THREE.Mesh(icosahedronGeometry4, lambertMaterial4);
    ball4.position.set(0, 0, 0);
    group.add(ball4);

    document.getElementById('out').appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    render();

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
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function makeRoughBall(mesh, bassFr, treFr) {
        mesh.geometry.vertices.forEach(function (vertex, i) {
            var offset = mesh.geometry.parameters.radius;
            var amp = 7;
            var time = window.performance.now();
            vertex.normalize();
            var rf = 0.00001;
            var distance = (offset + bassFr ) + noise.noise3D(vertex.x + time *rf*7, vertex.y +  time*rf*8, vertex.z + time*rf*9) * amp * treFr;
            vertex.multiplyScalar(distance);
        });
        mesh.geometry.verticesNeedUpdate = true;
        mesh.geometry.normalsNeedUpdate = true;
        mesh.geometry.computeVertexNormals();
        mesh.geometry.computeFaceNormals();
    }

    function makeRoughGround(mesh, distortionFr) {
        mesh.geometry.vertices.forEach(function (vertex, i) {
            var amp = 2;
            var time = Date.now();
            var distance = (noise.noise2D(vertex.x + time * 0.0003, vertex.y + time * 0.0001) + 0) * distortionFr * amp;
            vertex.z = distance;
        });
        mesh.geometry.verticesNeedUpdate = true;
        mesh.geometry.normalsNeedUpdate = true;
        mesh.geometry.computeVertexNormals();
        mesh.geometry.computeFaceNormals();
    }

    audio.play();

  };
};


window.onload = vizInit();

document.body.addEventListener('touchend', function(ev) { context.resume(); });



function fractionate(val, minVal, maxVal) {
    return (val - minVal)/(maxVal - minVal);
}

function modulate(val, minVal, maxVal, outMin, outMax) {
    var fr = fractionate(val, minVal, maxVal);
    var delta = outMax - outMin;
    return outMin + (fr * delta);
}

function avg(arr){
    var total = arr.reduce(function(sum, b) { return sum + b; });
    return (total / arr.length);
}

function max(arr){
    return arr.reduce(function(a, b){ return Math.max(a, b); })
}
