// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'lil-gui'
// // import waterVertexShader from './shaders/vertex.glsl'
// // import waterFragmentShader from './shaders/fragment.glsl'
// console.log('testing')
// console.log(THREE)

// THREE.ColorManagement.enabled = false

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI({ width: 340 })

// // Canvas
// const canvas = document.querySelector('#webgl')

// // Scene
// const scene = new THREE.Scene()

// /**
//  * Water
//  */
// // Geometry
// const plane = new THREE.PlaneGeometry(200, 200, 10, 10)

// // Material
// const material = new THREE.MeshBasicMaterial({
// 	color: '#ff2fff',
// })

// // Mesh
// const water = new THREE.Mesh(plane, material)
// water.rotation.x = -Math.PI * 0.5
// scene.add(water)

// /**
//  * Sizes
//  */
// const sizes = {
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// }

// window.addEventListener('resize', () => {
// 	// Update sizes
// 	sizes.width = window.innerWidth
// 	sizes.height = window.innerHeight

// 	// Update camera
// 	camera.aspect = sizes.width / sizes.height
// 	camera.updateProjectionMatrix()

// 	// Update renderer
// 	renderer.setSize(sizes.width, sizes.height)
// 	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(
// 	75,
// 	sizes.width / sizes.height,
// 	0.1,
// 	100
// )
// camera.position.set(1, 1, 1)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
// 	canvas: canvas,
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()

// const tick = () => {
// 	// const elapsedTime = clock.getElapsedTime()

// 	// Update controls
// 	controls.update()

// 	// Render
// 	renderer.render(scene, camera)

// 	// Call tick again on the next frame
// 	window.requestAnimationFrame(tick)
// }

// tick()
