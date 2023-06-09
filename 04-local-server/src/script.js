import * as THREE from "three"
// scene
const scene = new THREE.Scene()

// red cude
const geometry = new THREE.BoxGeometry(1, 1, 1)
const meterial = new THREE.MeshBasicMaterial({ color: "#ff0000" })

const mesh = new THREE.Mesh(geometry, meterial)

scene.add(mesh)

const sizes = {
  width: 800,
  height: 600,
}
// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const canvas = document.querySelector(".webgl")
// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
