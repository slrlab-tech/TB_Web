<script setup lang="ts">
import * as THREE from 'three'
import { toRaw } from 'vue'

import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import model from '@/assets/brain.glb?url'
</script>

<script lang="ts">
const d90 = Math.PI / 2
const iconSize = 4 * 8 // The width of icon in topBar (4)
const brainScale = 50
const lineWidth = 6
const emissiveColor = 0xffffff
const emissiveIntensity = 6000
const passStrength = 0.01

let scene = null as THREE.Scene | null
let composer = null as EffectComposer | null
let brain = null as THREE.Group | null
let neurons = null as THREE.Group | null

export default {
  data() {
    return {
      camera: null as THREE.OrthographicCamera | null,
      renderer: null as THREE.WebGLRenderer | null,
      progress: 0 as number,
      container: null as HTMLElement | null,
    }
  },
  methods: {
    brainDummy: function (iconSize: number) {
      const material = new THREE.MeshNormalMaterial({ opacity: 0.5, transparent: true })

      const left = new THREE.Mesh(new THREE.SphereGeometry(iconSize, 20, 10), material)
      left.scale.y = 0.9
      left.position.y = 0
      left.scale.z = 0.6
      left.position.z = -10

      const right = new THREE.Mesh(new THREE.SphereGeometry(iconSize, 20, 10), material)
      right.scale.y = 0.9
      right.position.y = 0
      right.scale.z = 0.6
      right.position.z = 10

      const bottom = new THREE.Mesh(new THREE.SphereGeometry(iconSize / 2, 20, 10), material)
      bottom.scale.y = 0.6
      bottom.position.y = -20
      bottom.position.x = 10

      const brain = new THREE.Group()
      brain.add(left)
      brain.add(right)
      brain.add(bottom)

      return brain
    },
    renderLights: function (brain: THREE.Box3) {
      const lightMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1, 20, 10),
        new THREE.MeshStandardMaterial({
          toneMapped: false,
          emissiveIntensity: emissiveIntensity,
          emissive: emissiveColor,
          color: emissiveColor,
          depthTest: false,
          depthWrite: false,
          transparent: true,
          opacity: 1,
        }),
      )

      brain.expandByVector(
        new THREE.Vector3(
          (brain.max.x - brain.min.x) * -0.05,
          (brain.max.y - brain.min.y) * -0.125,
          (brain.max.z - brain.min.z) * -0.1,
        ),
      )

      const lights = new THREE.Group()

      let count = 0
      while (count < 60) {
        const mesh = lightMesh.clone()

        const randomSize = Math.random() * 0.5 + 0.3
        mesh.scale.set(randomSize, randomSize, randomSize)

        const randomX = Math.random() * (brain.max.x - brain.min.x) + brain.min.x
        const randomY = Math.random() * (brain.max.y - brain.min.y) + brain.min.y
        const randomZ = Math.random() * (brain.max.z - brain.min.z) + brain.min.z
        mesh.position.set(randomX, randomY, randomZ)

        if (
          (randomX / brain.max.x) ** 2 +
            (randomY / brain.max.y) ** 2 +
            (randomZ / brain.max.z) ** 2 <
          1
        ) {
          lights.add(mesh)
          count += 1
        }
      }

      const lines = new THREE.Group()
      count = 0
      while (count < 100) {
        const points = []
        const start = lights.children[Math.floor(Math.random() * lights.children.length)]
        const end = lights.children[Math.floor(Math.random() * lights.children.length)]

        let length = start.position.distanceTo(end.position)
        if (length > 15) continue

        length = length / 2

        const dx = (end.position.x - start.position.x) / length
        const dy = (end.position.y - start.position.y) / length
        const dz = (end.position.z - start.position.z) / length

        points.push(start.position)
        for (let i = 1; i < length; i++) {
          const x = (start.position.x + dx * i) * (Math.random() * 0.1 + 0.9)
          const y = (start.position.y + dy * i) * (Math.random() * 0.1 + 0.9)
          const z = (start.position.z + dz * i) * (Math.random() * 0.1 + 0.9)
          points.push(new THREE.Vector3(x, y, z))
        }
        points.push(end.position)

        const geometry = new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(points),
          20,
          (Math.min(start.scale.x, end.scale.x) ** 2 * lineWidth) / 20,
          8,
          false,
        )

        const line = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({
            toneMapped: false,
            emissiveIntensity: emissiveIntensity / 2,
            emissive: emissiveColor,
            color: emissiveColor,
            depthTest: false,
            depthWrite: false,
            transparent: true,
            opacity: 0.9,
          }),
        )
        lines.add(line)
        count += 1
      }

      count = 0
      while (count < 200) {
        const mesh = lightMesh.clone()

        const randomSize = Math.random() * 0.3
        mesh.scale.set(randomSize, randomSize, randomSize)

        const randomX = Math.random() * (brain.max.x - brain.min.x) + brain.min.x
        const randomY = Math.random() * (brain.max.y - brain.min.y) + brain.min.y
        const randomZ = Math.random() * (brain.max.z - brain.min.z) + brain.min.z
        mesh.position.set(randomX, randomY, randomZ)

        if (
          (randomX / brain.max.x) ** 2 +
            (randomY / brain.max.y) ** 2 +
            (randomZ / brain.max.z) ** 2 <
          1
        ) {
          lights.add(mesh)
          count += 1
        }
      }

      neurons = new THREE.Group()

      lights.rotateZ(3)
      lights.position.set(0, (brain.max.x - brain.min.x) * 0.1, 0)
      lights.renderOrder = 999
      lights.onBeforeRender = function (renderer) {
        renderer.clearDepth()
      }
      neurons.add(lights)

      lines.rotateZ(3)
      lines.position.set(0, (brain.max.x - brain.min.x) * 0.1, 0)
      neurons.add(lines)

      scene?.add(neurons)
    },
    init: function () {
      document.documentElement.scrollTop = 0

      this.container = document.getElementById('model')
      if (!this.container) {
        console.error('Container element not found')
        return
      }

      const w = this.container.clientWidth
      const h = this.container.clientHeight
      const viewSize = h
      const aspectRatio = w / h

      this.camera = new THREE.OrthographicCamera(
        (-aspectRatio * viewSize) / 2,
        (aspectRatio * viewSize) / 2,
        viewSize / 2,
        -viewSize / 2,
        -1000,
        1000,
      )
      this.camera.position.z = 1

      scene = new THREE.Scene()

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
      this.container.appendChild(this.renderer.domElement)

      const renderScene = new RenderPass(toRaw(scene), this.camera)

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        passStrength,
        1,
        0.1,
      )
      const outputPass = new OutputPass()

      composer = new EffectComposer(this.renderer)
      composer.addPass(renderScene)
      composer.addPass(bloomPass)
      composer.addPass(outputPass)

      const light = new THREE.HemisphereLight(0x0080ff, 0x000000, 1)
      scene.add(light)

      const loader = new GLTFLoader()
      loader.load(model, (obj) => {
        if (!scene || !this.renderer || !this.camera) {
          console.error('Error loading three.js components for GLTF model')
          return
        }
        brain = new THREE.Group()

        const material = new THREE.MeshPhongMaterial({
          opacity: 0.6,
          transparent: true,
          depthTest: false,
        })

        obj.scene.scale.set(brainScale, brainScale, brainScale)
        obj.scene.rotation.y = -Math.PI / 2
        obj.scene.updateMatrix()
        obj.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material
          }
        })

        this.renderLights(new THREE.Box3().setFromObject(obj.scene))

        brain.add(obj.scene)
        brain.renderOrder = 1
        scene.add(brain)
        requestAnimationFrame(() => this.animate())
      })
    },
    updateObj: function (obj: THREE.Group, step: number, isLight = false) {
      if (!this.container) {
        console.error('Container element not found')
        return
      }

      if (obj.rotation.x >= 0 || step > 0) {
        const scale =
          (Math.min(this.container.clientHeight, this.container.clientWidth) - 64) / iconSize / 2

        const posX = -this.container.clientWidth / 2 + 64 + iconSize
        const posY = this.container.clientHeight / 2 - 32 - iconSize

        obj.rotation.x += 0.01 * step
        obj.rotation.y -= 0.01 * step

        obj.position.x = posX / (d90 / obj.rotation.x)
        obj.position.y = posY / (d90 / obj.rotation.x)

        const stepScale = scale - Math.min(Math.max((scale * obj.position.x) / posX, 1), scale) + 1

        obj.scale.set(stepScale, stepScale, stepScale)

        if (isLight) {
          obj.children[1].traverse((line) => {
            if (line instanceof THREE.Mesh && line.material)
              line.material.linewidth = (lineWidth * (d90 - obj.rotation.x)) / d90
          })
        }

        if (obj.rotation.x > d90 || this.progress > 0) {
          obj.scale.set(1, 1, 1)
          obj.rotation.x = d90
          obj.rotation.y = -d90
          obj.position.x = posX
          obj.position.y = posY

          this.progress += step
          const maxProgress = 100

          this.container.style.opacity = (
            Math.max(maxProgress - this.progress, 0) / maxProgress
          ).toString()

          if (this.progress >= maxProgress) {
            this.endAnimation()
          }
        } else if (obj.rotation.x < 0) {
          obj.scale.set(scale, scale, scale)
          obj.rotation.x = 0
          obj.rotation.y = 0
          obj.position.x = 0
          obj.position.y = 0
        } else if (obj.rotation.x < d90) this.progress = 0
      }
    },
    animate: function (step = 0) {
      if (!this.renderer || !scene || !this.camera || !composer) {
        console.error('Error loading three.js components')
        return
      }

      if (!brain || !neurons) {
        this.renderer.render(toRaw(scene), this.camera)
        return
      }

      this.updateObj(brain, step)
      this.updateObj(neurons, step, true)

      composer.render()
    },
    updateThree: function () {
      if (!this.renderer || !this.camera || !scene) {
        console.error('Error loading three.js components')
        return
      }

      if (!this.container) {
        console.error('Container element not found')
        return
      }

      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)

      const w = this.container.clientWidth
      const h = this.container.clientHeight
      const viewSize = h
      const aspectRatio = w / h

      this.camera.left = -(aspectRatio * viewSize) / 2
      this.camera.right = (aspectRatio * viewSize) / 2
      this.camera.top = viewSize / 2
      this.camera.bottom = -viewSize / 2

      this.camera.updateProjectionMatrix()
      requestAnimationFrame(() => this.animate())
    },
    endAnimation: function () {
      document.removeEventListener('wheel', this.animateByStep)
      window.removeEventListener('resize', this.updateThree)

      const threeScene = document.getElementById('model')
      if (threeScene) {
        threeScene.remove()
      }
      document.body.style.overflow = 'auto'
    },
    animateByStep: function (e: WheelEvent) {
      requestAnimationFrame(() => this.animate(e.deltaY))
    },
  },
  mounted() {
    const isShown = sessionStorage.getItem('TBisShown')
    if (isShown === 'True') return
    sessionStorage.setItem('TBisShown', 'True')

    this.updateThree = this.updateThree.bind(this)
    this.animateByStep = this.animateByStep.bind(this)

    window.addEventListener('resize', this.updateThree)
    document.addEventListener('wheel', this.animateByStep)
    document.body.style.overflow = 'hidden'

    this.init()
    this.animate()
  },
  unmounted() {
    window.removeEventListener('resize', this.updateThree)
    document.removeEventListener('wheel', this.animateByStep)
    document.body.style.overflow = 'auto'

    const threeScene = document.getElementById('model')
    if (threeScene) {
      threeScene.remove()
    }
  },
}
</script>

<template>
  <div>
    <div id="model"></div>
  </div>
</template>

<style scoped>
#model {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
