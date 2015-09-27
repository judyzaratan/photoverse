// var url = 'http://localhost:3000/';
// var filename = 'photos/dolphin.jpg';
var cardboard;

function panoramaInit(filepath) {
  var pic = THREE.ImageUtils.loadTexture(filepath, null, function() {
    console.log('loading texture');
  }, function(err) {
    if (err) {
      console.log('got an error loading texture');
    }
  });

  var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(200, 32, 32),
    new THREE.MeshBasicMaterial({
      map: pic
    })
  );
  sphere.scale.x = -1;
  scene.add(sphere);
}

function imageInit(filepath, width, height) {

  //currently, we just pass in width/height, but you may want to somehow get image dimensions to pass in as variables.
  //here we load our picture.
  var pic = THREE.ImageUtils.loadTexture(filepath, null, function() {
    console.log('loading texture');
  }, function(err) {
    if (err) {
      console.log('got an error loading texture');
    }
  });
  //this is our plane object.
  var planegeometry = new THREE.PlaneBufferGeometry( width, height ); //635, 441 were originial dimensions.
  //This is the material we use for the plane. We map the image onto it.
  var planematerial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    map: pic
  });
  //this meshes the geometry and material together. Then we rotate and add it to our scene.
  var plane = new THREE.Mesh( planegeometry, planematerial );
  plane.rotation.y = -Math.PI/2;
  scene.add( plane );

  var c = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
  //3.87 as a constant is just what I chose. It was reverse engineered from when both camera positions were initiated to -200. Feel free to change it.
  camera.position.y = -c/3.87;
  camera.position.x = -c/3.87;
  // both initiated to -200
}





//-----------------------BELOW IS INFORMATION, JUST FOR REFERENCE--------------------
//  var pic = THREE.ImageUtils.loadTexture(url + filename, null, function() {
//    console.log('loading texture');
//  }, function(err) {
//    if (err) {
//      console.log('got an error loading texture');
//    }
//  });
//
//  var planegeometry = new THREE.PlaneGeometry( 635, 441 );
//  var planematerial = new THREE.MeshBasicMaterial({
//    color: 0xFFFFFF,
//    map: pic
//  });
//  var plane = new THREE.Mesh( planegeometry, planematerial );
//  cardboard.scene.add( plane );
//
//  cardboard.camera.position.y = 441 / 1.5;

// function setup() {

//   cardboard = new Cardboard();
//   imageInit(1,2, cardboard);
//   cardboard.effect.separation = 0.6;
//   cardboard.update = function() {
//     Cardboard.prototype.update.call(this);
//   };
//   document.getElementById('stereoView').appendChild(cardboard.renderer.domElement);
// }
