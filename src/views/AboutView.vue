<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue'
import Members from '@/components/Members.vue'
import PopUpButton from '@/components/PopUpButton.vue'
import TimeLine from '@/components/TimeLine.vue'
import TypingAnimation from '@/components/TypingAnimation.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
  beforeRouteLeave(to, from, next) {
    const typing = this.$refs.typing as { clear: () => void }
    typing.clear()
    next()
  },
}
</script>

<template>
  <div class="about">
    <TypingAnimation ref="typing" :typing="data.typing" />
    <TimeLine :onChange="(year: string) => console.log(year)" />
    <Members :members="data.members" :title="$t('Our Members')" />
    <ImageCarousel :items="data.sponsors" class="carousel" />
    <ImageCarousel :items="data.sponsors" reverse class="carousel" />
    <div class="button-section">
      <div style="background-color: gray; height: 500px; width: 100%"></div>
      <PopUpButton @click="() => console.log('Button clicked!')">
        <span>test</span>
      </PopUpButton>
    </div>
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
