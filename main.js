import * as THREE from 'three';
import Loader from '/utils/ModelLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let model;
camera.position.z = 5;

model = await Loader.loadModel('/models/tie-defender/tie-defender.glb');
scene.add(model.scene);
// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );

function animate() {
    requestAnimationFrame( animate );
    if(model) {
        model.scene.rotation.x += 0.01;
        model.scene.rotation.y += 0.01;
    }
    renderer.render( scene, camera );
}
animate();
