import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

main();
function main() {
  spinCube('#webglheader1');
  spinCube('#webglheader2');
}

function spinCube(id_placement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 1000);

  const canvas = document.querySelector(id_placement);

  // Renderer uses the existing canvas
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas
  });

  // Match renderer to canvas size (64x64 as in your HTML)
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height, false);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const edgeGeometry = new THREE.EdgesGeometry(cubeGeometry);

  const r = Math.random();
  const g = Math.random();
  const b = Math.random();
  const randomColor = new THREE.Color(r, g, b);

  const cubeMaterial = new THREE.MeshBasicMaterial({ color: randomColor });
  const lineMaterial = new THREE.LineBasicMaterial({ color: THREE.Color.NAMES.black });
  const cubeEdges = new THREE.LineSegments(edgeGeometry, lineMaterial);
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.add(cubeEdges);
  scene.add(cube);

  camera.position.z = 3;

  renderer.setAnimationLoop(animate);

  function animate() {
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
  }
}