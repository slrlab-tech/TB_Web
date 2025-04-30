<script setup lang="ts">
import FunctionList from '@/components/FunctionList.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import ImageScroller from '@/components/ImageScroller.vue'
import MembersScroll from '@/components/MembersScroll.vue'
import PopUpButton from '@/components/PopUpButton.vue'
import TimeLine from '@/components/TimeLine.vue'
import TypingAnimation from '@/components/TypingAnimation.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="about">
    <div class="wrapper" style="width: 900px">
      <ImageCarousel :images="data.sponsors" style="height: 300px" />
    </div>
    <TypingAnimation ref="typing" :typing="data.typing" />
    <TimeLine :onChange="(year: string) => console.log(year)" />
    <MembersScroll :members="data.members" :title="$t('Our Members')" />
    <ImageScroller :items="data.sponsors" class="carousel" />
    <ImageScroller :items="data.sponsors" reverse class="carousel" />
    <div class="button-section">
      <div style="background-color: lightgray; height: 110vh; width: 100%; text-align: center">
        Pop up button
      </div>
      <PopUpButton @click="() => console.log('Button clicked!')"> test button </PopUpButton>
    </div>
    <FunctionList :data="data['functions']" />
  </div>
</template>

<style>
.about {
  min-height: 100dvh;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
}
.carousel {
  padding-top: 1rem;
}
</style>
