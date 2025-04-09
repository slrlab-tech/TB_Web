<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
</script>
<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="about">
    <!-- <h1>This is about page</h1> -->
    <Carousel :items="data.sponsors" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
