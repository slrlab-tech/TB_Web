<script setup lang="ts">
import LogoAnimation from '@/components/LogoAnimation.vue'
import LatestProduct from '../components/LatestProduct.vue'
import Mission from '../components/Mission.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <LogoAnimation class="logo-animation" />
  <main>
    <Mission :data="data[($route.meta.path as string) ?? 'home']" />
    <LatestProduct />
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
