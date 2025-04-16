<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
import Members from '@/components/Members.vue'
import TimeLine from '@/components/TimeLine.vue'
import TypingAnimation from '@/components/TypingAnimation.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
  beforeRouteLeave(to, from, next) {
    this.$refs.typing.clear()
    next()
  },
}
</script>

<template>
  <div class="about">
    <TypingAnimation ref="typing" :typing="data.typing" />
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
