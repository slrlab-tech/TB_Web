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
const lineWidth = 10
const emissiveColor = 0xffffff
const emissiveIntensity = 2000
const passStrength = 0.01
const rem = 20 // Font size of body
const iconSize = 3.5 * rem // The height of icon in topBar
const padding = { width: window.innerWidth > rem * 25 ? rem * 4 : rem * 2, height: rem * 2 }

let scene = null as THREE.Scene | null
let composer = null as EffectComposer | null
let brain = null as THREE.Group | null
let neurons = null as THREE.Group | null

export default {
  props: {
    onEnd: {
      type: Function,
      required: false,
    },
    onStart: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      camera: null as THREE.OrthographicCamera | null,
      renderer: null as THREE.WebGLRenderer | null,
      progress: 0 as number,
      container: null as HTMLElement | null,
      brainHeight: 0 as number,
      brainScale: 0 as number,
      touchStart: 0 as number,
      touchEnd: 0 as number,
    }
  },
  methods: {
    renderLights: function (brain: THREE.Box3) {
      const lightMesh = new THREE.Mesh(
        new THREE.SphereGeometry(20, 15, 10),
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

      // Adjust the size of the bounding box to fit the brain model
      brain.expandByVector(
        new THREE.Vector3(
          (brain.max.x - brain.min.x) * -0.05,
          1,
          (brain.max.z - brain.min.z) * -0.1,
        ),
      )
      brain.max.y = brain.max.y * 0.95
      brain.min.y = brain.min.y * 0.5

      const lights = new THREE.Group()
      const lightSize = (brain.max.x - brain.min.x) / 1000

      let count = 0
      while (count < 100) {
        const mesh = lightMesh.clone()

        const randomSize = Math.random() * lightSize + lightSize / 2
        mesh.scale.set(randomSize, randomSize, randomSize)

        // Get a random position within the bounding box
        const randomX = Math.random() * (brain.max.x - brain.min.x) + brain.min.x
        const randomY = Math.random() * (brain.max.y - brain.min.y) + brain.min.y
        const randomZ = Math.random() * (brain.max.z - brain.min.z) + brain.min.z
        mesh.position.set(randomX, randomY, randomZ)

        // Check if the position is within the sphere
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
      for (let i = 0; i < 10; i++) {
        const start = lights.children[i]
        count = 0
        let failCount = 0
        while (count < 5 || failCount < 50) {
          failCount += 1
          const points = []
          const end = lights.children[Math.floor(Math.random() * lights.children.length)]

          let length = start.position.distanceTo(end.position)
          if (length > 200) continue

          length = length / 20

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
            Math.min(start.scale.x, end.scale.x) ** 2 * lineWidth,
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

      this.camera = new THREE.OrthographicCamera(
        -this.container.clientWidth / 2,
        this.container.clientWidth / 2,
        this.container.clientHeight / 2,
        -this.container.clientHeight / 2,
        -1000,
        1000,
      )
      this.camera.position.z = 0

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

        let brainBox = new THREE.Box3().setFromObject(obj.scene)
        // set brain size based on window size
        if (this.container) {
          this.brainScale = Math.min(
            (this.container.clientHeight - padding.height * 2) / (brainBox.max.y - brainBox.min.y),
            (this.container.clientWidth - padding.width * 2) / (brainBox.max.x - brainBox.min.x),
          )
          obj.scene.scale.set(this.brainScale, this.brainScale, this.brainScale)
        }
        obj.scene.rotation.y = -Math.PI / 2
        obj.scene.updateMatrix()
        obj.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = material
          }
        })

        brainBox = new THREE.Box3().setFromObject(obj.scene)
        this.brainHeight = brainBox.max.y - brainBox.min.y
        this.renderLights(brainBox.clone())

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
        const targetScale = iconSize / this.brainHeight

        const posX = -this.container.clientWidth / 2 + padding.width + iconSize / 2
        const posY = this.container.clientHeight / 2 - padding.height - iconSize / 2

        obj.rotation.x += 0.01 * step
        obj.rotation.y -= 0.01 * step

        const currentStep = Math.max(0, Math.min(1, obj.rotation.x == 0 ? 0 : obj.rotation.x / d90))
        obj.position.x = posX * currentStep
        obj.position.y = posY * currentStep

        const stepScale = 1 + (targetScale - 1) * currentStep
        obj.scale.set(stepScale, stepScale, stepScale)

        if (isLight) {
          obj.children[1].traverse((line) => {
            if (line instanceof THREE.Mesh && line.material)
              line.material.linewidth = (lineWidth * (d90 - obj.rotation.x)) / d90
          })
        }

        if (obj.rotation.x > d90 || this.progress > 0) {
          obj.rotation.x = d90
          obj.rotation.y = -d90
          this.progress += step
        } else if (obj.rotation.x < 0) {
          obj.rotation.x = 0
          obj.rotation.y = 0
        } else if (obj.rotation.x < d90) this.progress = 0
      }
    },
    animate: function (step = 0) {
      if (!this.renderer || !scene || !this.camera || !composer) {
        console.error(
          'Error loading three.js components: \n',
          'renderer:',
          this.renderer,
          'scene:',
          scene,
          'camera:',
          this.camera,
          'composer:',
          composer,
        )
        return
      }

      if (!brain || !neurons) {
        this.renderer.render(toRaw(scene), this.camera)
        return
      }

      this.updateObj(brain, step)
      this.updateObj(neurons, step, true)

      const maxProgress = 100

      if (this.container)
        this.container.style.opacity = (
          Math.max(maxProgress - this.progress, 0) / maxProgress
        ).toString()

      if (this.onEnd) {
        this.onEnd(this.progress / maxProgress)
      }

      if (this.progress >= maxProgress) {
        this.endAnimation()
      }

      composer.render()
    },
    updateThree: function () {
      if (!this.renderer || !this.camera || !scene || !this.container) {
        console.error('Error loading three.js components')
        return
      }

      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)

      this.camera.left = -this.container.clientWidth / 2
      this.camera.right = this.container.clientWidth / 2
      this.camera.top = this.container.clientHeight / 2
      this.camera.bottom = -this.container.clientHeight / 2

      this.camera.updateProjectionMatrix()
      requestAnimationFrame(() => this.animate())
    },
    endAnimation: function () {
      document.removeEventListener('wheel', this.animateByStep)
      window.removeEventListener('resize', this.updateThree)
      document.removeEventListener('touchstart', this.touchStartEvent)
      document.removeEventListener('touchmove', this.touchMoveEvent)

      const threeScene = document.getElementById('model')
      if (threeScene) {
        threeScene.remove()
      }
      document.body.style.overflow = 'auto'
    },
    animateByStep: function (e: WheelEvent) {
      requestAnimationFrame(() => this.animate(e.deltaY))
    },
    touchStartEvent: function (e: TouchEvent) {
      this.touchStart = e.changedTouches[0].screenX
    },
    touchMoveEvent: function (e: TouchEvent) {
      this.touchEnd = e.changedTouches[0].screenX

      this.animateByStep({
        deltaY: (this.touchEnd - this.touchStart) / 10,
      } as WheelEvent)
    },
  },
  mounted() {
    const isShown = sessionStorage.getItem('TBisShown')
    if (isShown === 'True') return
    sessionStorage.setItem('TBisShown', 'True')

    this.updateThree = this.updateThree.bind(this)
    this.animateByStep = this.animateByStep.bind(this)

    document.body.style.overflow = 'hidden'
    window.addEventListener('resize', this.updateThree)
    document.addEventListener('wheel', this.animateByStep)

    document.addEventListener('touchstart', this.touchStartEvent)
    document.addEventListener('touchmove', this.touchMoveEvent)

    if (this.onStart) this.onStart()
    this.init()
    this.animate()
  },
  unmounted() {
    this.endAnimation()
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
