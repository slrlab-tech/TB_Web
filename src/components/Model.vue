<script setup lang="ts">
import * as THREE from 'three'
import { toRaw } from 'vue'
</script>

<script lang="ts">
const d90 = Math.PI / 2
const iconSize = 4 * 8 // The width of icon in topBar (4)

export default {
  data() {
    return {
      camera: null as THREE.OrthographicCamera | null,
      scene: null as THREE.Scene | null,
      renderer: null as THREE.WebGLRenderer | null,
      brain: null as THREE.Group | null,
      progress: 0 as number,
      container: null as HTMLElement | null,
    }
  },
  methods: {
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

      this.scene = new THREE.Scene()

      this.brain = this.brainDummy(iconSize)
      const scale =
        (Math.min(this.container.clientHeight, this.container.clientWidth) - 64) / iconSize / 2
      this.brain.scale.set(scale, scale, scale)
      this.scene.add(this.brain)

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
      this.container.appendChild(this.renderer.domElement)
    },
    brainDummy: function (iconSize: number) {
      const left = new THREE.Mesh(
        new THREE.SphereGeometry(iconSize, 20, 10),
        new THREE.MeshNormalMaterial(),
      )
      left.scale.y = 0.9
      left.position.y = 0
      left.scale.z = 0.6
      left.position.z = 10

      const right = new THREE.Mesh(
        new THREE.SphereGeometry(iconSize, 20, 10),
        new THREE.MeshNormalMaterial(),
      )
      right.scale.y = 0.9
      right.position.y = 0
      right.scale.z = 0.6
      right.position.z = -10

      const bottom = new THREE.Mesh(
        new THREE.SphereGeometry(iconSize / 2, 20, 10),
        new THREE.MeshNormalMaterial(),
      )
      bottom.scale.y = 0.6
      bottom.position.y = -20
      bottom.position.x = 10

      const brain = new THREE.Group()
      brain.add(left)
      brain.add(right)
      brain.add(bottom)

      return brain
    },
    animate: function (step = 0) {
      if (!this.brain || !this.renderer || !this.scene || !this.camera || !this.container) {
        console.error('Error loading three.js components')
        return
      }

      if (this.brain.rotation.x >= 0 || step > 0) {
        const scale =
          (Math.min(this.container.clientHeight, this.container.clientWidth) - 64) / iconSize / 2

        const posX = -this.container.clientWidth / 2 + 64 + iconSize
        const posY = this.container.clientHeight / 2 - 32 - iconSize

        this.brain.rotation.x += 0.01 * step
        this.brain.rotation.y += 0.01 * step

        this.brain.position.x += (posX / (d90 / 0.01)) * step
        this.brain.position.y += (posY / (d90 / 0.01)) * step

        const stepScale =
          scale - Math.min(Math.max((scale * this.brain.position.x) / posX, 1), scale) + 1

        this.brain.scale.set(stepScale, stepScale, stepScale)

        if (this.brain.rotation.x > d90 || this.progress > 0) {
          this.brain.scale.set(1, 1, 1)
          this.brain.rotation.x = d90
          this.brain.rotation.y = d90
          this.brain.position.x = posX
          this.brain.position.y = posY

          this.progress += step
          const maxProgress = 100

          this.container.style.opacity = (
            Math.max(maxProgress - this.progress, 0) / maxProgress
          ).toString()

          if (this.progress >= maxProgress) {
            this.endAnimation()
          }
        } else if (this.brain.rotation.x < 0) {
          this.brain.scale.set(scale, scale, scale)
          this.brain.rotation.x = 0
          this.brain.rotation.y = 0
          this.brain.position.x = 0
          this.brain.position.y = 0
        } else if (this.brain.rotation.x < d90) this.progress = 0

        this.renderer.render(toRaw(this.scene), this.camera)
      }
    },
    updateThree: function () {
      if (!this.renderer || !this.camera || !this.scene) {
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
      this.renderer.render(toRaw(this.scene), this.camera)
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
