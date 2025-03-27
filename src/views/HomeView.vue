<script setup lang="ts">
import LatestProduct from '../components/LatestProduct.vue'
import Mission from '../components/Mission.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
  mounted() {
    console.log(this.data)
  },
}
</script>

<template>
  <main>
    <Mission :data="data[$route.name]" />
    <div style="height: 1rem"></div>
    <LatestProduct />
  </main>
</template>
