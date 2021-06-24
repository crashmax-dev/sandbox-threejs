import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export class Sandbox {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  mesh: THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>
  controls: OrbitControls
  stats: Stats

  constructor() {
    this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 10)
    this.camera.position.z = 1
    this.scene = new THREE.Scene()

    this.fpsMonitor()

    this.mesh = new THREE.Mesh(
      new THREE.BoxGeometry(),
      new THREE.MeshNormalMaterial()
    )

    this.scene.add(this.mesh)

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.renderer.setAnimationLoop(this.render.bind(this))
    document.body.appendChild(this.renderer.domElement)
  }

  fpsMonitor(): void {
    this.stats = Stats()
    this.stats.showPanel(0)
    this.stats.dom.style.margin = '4px'
    document.body.appendChild(this.stats.dom)
  }

  render(): void {
    this.stats.begin()

    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01

    this.controls.update()
    this.renderer.render(this.scene, this.camera)
    this.stats.end()
  }
}