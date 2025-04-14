<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import Members from '@/components/Members.vue'
</script>
<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="about">
    <Members :members="data.members" :title="$t('Our Members')" />
    <Carousel :items="data.sponsors" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
