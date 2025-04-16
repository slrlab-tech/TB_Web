<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import Members from '@/components/Members.vue'
import TimeLine from '@/components/TimeLine.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="about">
    <TimeLine :onChange="(year) => console.log(year)" />
    <Members :members="data.members" :title="$t('Our Members')" />
    <Carousel :items="data.sponsors" class="carousel" />
    <Carousel :items="data.sponsors" reverse class="carousel" />
  </div>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  padding-top: 1rem;
}
</style>
