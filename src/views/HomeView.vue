<script setup lang="ts">
import Model from '@/components/Model.vue'
import LatestProduct from '../components/LatestProduct.vue'
import Mission from '../components/Mission.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
  mounted() {
    document.documentElement.scrollTop = 0
  },
}
</script>

<template>
  <Model class="logo-animation" />
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
