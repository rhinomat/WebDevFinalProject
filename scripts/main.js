import * as THREE from 'three';

main();
function main() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

  const canvas = document.querySelector('#webglheader');

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

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 3;

  renderer.setAnimationLoop(animate);

  function animate() {
    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    renderer.render(scene, camera);
  }
}
