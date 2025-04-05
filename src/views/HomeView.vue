<script setup lang="ts">
import LatestProduct from '../components/LatestProduct.vue'
import Mission from '../components/Mission.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <main>
    <Mission :data="data[$route.name ?? 'default']" />
    <LatestProduct />
  </main>
</template>

<style scoped>
main {
  gap: 1rem;
}
</style>
