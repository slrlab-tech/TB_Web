<script setup lang="ts">
import LogoAnimation from '@/components/LogoAnimation.vue'
import LatestProduct from '../components/LatestProduct.vue'
import MissionSection from '../components/MissionSection.vue'
import FunctionList from '../components/FunctionList.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
  beforeRouteLeave(to, from, next) {
    const threeScene = document.getElementById('model')
    if (threeScene) {
      threeScene.remove()
    }

    next()
  },
}
</script>

<template>
  <LogoAnimation class="logo-animation" />
  <main>
    <MissionSection :data="data[($route.meta.path as string) ?? 'home']" />
    <LatestProduct />
    <FunctionList :data="data['functions']" />
  </main>
</template>

<style scoped>
.logo-animation {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

main {
  gap: 1rem;
}
</style>
