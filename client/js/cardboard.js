  var camera, scene, renderer;
  var effect, controls;
  var element, container;

  //clock tracks time
  var clock = new THREE.Clock();


  function init() {
    //Be wary of rabbit holes from here on out. Below we set up our environment.
    renderer = new THREE.WebGLRenderer();
    element = renderer.domElement;
    container = document.getElementById('stereoView');
    container.appendChild(element);

    //google stuff
    effect = new THREE.StereoEffect(renderer);
    //scene is our environment where we place things.
    scene = new THREE.Scene();
    //This is our camera. We create it and then add it to the scene.
    camera = new THREE.PerspectiveCamera(90, 1, 0.001, 700);
    camera.position.set(0, 10, 0);
    scene.add(camera);
    //more google stuff.
    controls = new THREE.OrbitControls(camera, element);
    //small adjustments here for visual benefits
    controls.rotateUp(Math.PI / 4);
    controls.target.set(
      camera.position.x + 0.1,
      camera.position.y,
      camera.position.z
    );
    controls.noZoom = true;
    controls.zoomSpeed = 0;
    controls.noPan = true;
    controls.keyPanSpeed = 0;
    //  controls.noRotate = true;
    controls.autoRotate = false;


    //Thank you google. I haven't touched anything below here.
    function setOrientationControls(e) {
      if (!e.alpha) {
        return;
      }

      controls = new THREE.DeviceOrientationControls(camera, true);
      controls.connect();
      controls.update();

      element.addEventListener('click', fullscreen, false);

      window.removeEventListener('deviceorientation', setOrientationControls, true);
    }
    window.addEventListener('deviceorientation', setOrientationControls, true);

    window.addEventListener('resize', resize, false);
    setTimeout(resize, 1);
  }

  function resize() {
    var width = container.offsetWidth;
    var height = container.offsetHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    effect.setSize(width, height);
  }

  function update(dt) {
    resize();

    camera.updateProjectionMatrix();

    controls.update(dt);
  }

  function render(dt) {
    effect.render(scene, camera);
  }

  function animate(t) {
    requestAnimationFrame(animate);

    update(clock.getDelta());
    render(clock.getDelta());
  }

  function fullscreen() {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    }
  }