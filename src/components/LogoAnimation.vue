<script setup lang="ts">
import * as THREE from 'three'
import { toRaw } from 'vue'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js'
</script>

<script lang="ts">
const d90 = Math.PI / 2
const iconSize = 4 * 8 // The width of icon in topBar (4)

let scene = null as THREE.Scene | null
let composer = null as EffectComposer | null
let brain = null as THREE.Group | null

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
      const material = new THREE.MeshNormalMaterial({ opacity: 0.8, transparent: true })

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

      brain = this.brainDummy(iconSize)
      const scale =
        (Math.min(this.container.clientHeight, this.container.clientWidth) - 64) / iconSize / 2
      brain.scale.set(scale, scale, scale)
      scene.add(brain)

      const renderScene = new RenderPass(toRaw(scene), this.camera)

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.15,
        3,
        0,
      )
      const outputPass = new OutputPass()

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setClearColor(0x000000, 0)
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
      this.container.appendChild(this.renderer.domElement)

      composer = new EffectComposer(this.renderer)
      composer.addPass(renderScene)
      composer.addPass(bloomPass)
      composer.addPass(outputPass)
    },

    animate: function (step = 0) {
      if (!brain || !this.renderer || !scene || !this.camera || !this.container || !composer) {
        console.error('Error loading three.js components')
        return
      }

      if (brain.rotation.x >= 0 || step > 0) {
        const scale =
          (Math.min(this.container.clientHeight, this.container.clientWidth) - 64) / iconSize / 2

        const posX = -this.container.clientWidth / 2 + 64 + iconSize
        const posY = this.container.clientHeight / 2 - 32 - iconSize

        brain.rotation.x += 0.01 * step
        brain.rotation.y += 0.01 * step

        brain.position.x += (posX / (d90 / 0.01)) * step
        brain.position.y += (posY / (d90 / 0.01)) * step

        const stepScale =
          scale - Math.min(Math.max((scale * brain.position.x) / posX, 1), scale) + 1

        brain.scale.set(stepScale, stepScale, stepScale)

        if (brain.rotation.x > d90 || this.progress > 0) {
          brain.scale.set(1, 1, 1)
          brain.rotation.x = d90
          brain.rotation.y = d90
          brain.position.x = posX
          brain.position.y = posY

          this.progress += step
          const maxProgress = 100

          this.container.style.opacity = (
            Math.max(maxProgress - this.progress, 0) / maxProgress
          ).toString()

          if (this.progress >= maxProgress) {
            this.endAnimation()
          }
        } else if (brain.rotation.x < 0) {
          brain.scale.set(scale, scale, scale)
          brain.rotation.x = 0
          brain.rotation.y = 0
          brain.position.x = 0
          brain.position.y = 0
        } else if (brain.rotation.x < d90) this.progress = 0

        composer.render()
        // renderer.render(toRaw(scene), camera)
      }
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
      composer?.render()
      // renderer.render(toRaw(scene), camera)
    },
    showLogo: function () {
      let logo = document.querySelector('.logo') as HTMLImageElement
      let model = document.getElementById('model') as HTMLImageElement

      if (logo && model) {
        logo.style.opacity = '1'

        setTimeout(() => {
          model.style.opacity = '0'
        }, 400)

        setTimeout(() => {
          logo.style.opacity = '0'
        }, 1200)
      }
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
    animateByStep: function (e: any) {
      requestAnimationFrame(() => this.animate(e.deltaY))
    },
  },
  mounted() {
    this.init()
    this.animate()
  },
  created() {
    this.updateThree = this.updateThree.bind(this)
    this.animateByStep = this.animateByStep.bind(this)

    window.addEventListener('resize', this.updateThree)
    document.addEventListener('wheel', this.animateByStep)
    document.body.style.overflow = 'hidden'
  },
  destroyed() {
    window.removeEventListener('resize', this.updateThree)
    document.removeEventListener('wheel', this.animateByStep)
    document.body.style.overflow = 'auto'
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
