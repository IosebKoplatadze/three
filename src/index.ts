import * as THREE from 'three';
import './index.scss';
import earthMap from './assets/earth.jpeg';
import moonMap from './assets/moon.jpeg';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x999999);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const earthTexture = new THREE.TextureLoader().load(earthMap);
const geometry = new THREE.SphereGeometry(3);
const material = new THREE.MeshStandardMaterial({ map: earthTexture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const moonTexture = new THREE.TextureLoader().load(moonMap);
const geometry2 = new THREE.SphereGeometry(1);
const material2 = new THREE.MeshStandardMaterial({ map: moonTexture });
const moon = new THREE.Mesh(geometry2, material2);
moon.position.setX(8);
cube.add(moon);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(4, 4, 4);
scene.add(light);

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 20;
renderer.setAnimationLoop(animate);

function animate() {
  cube.rotation.y += 0.005;
  renderer.render(scene, camera);
}
