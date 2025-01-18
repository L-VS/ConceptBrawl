import * as THREE from 'https://cdn.skypack.dev/three';

// Example setup for Corbac's 3D model
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('crowModel') });
renderer.setSize(300, 300);

// Add a light source
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// Load Corbac's 3D model
const loader = new THREE.GLTFLoader();
loader.load('path-to-crow-model.glb', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.scale.set(0.5, 0.5, 0.5); // Adjust scale
    animate();
});

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
