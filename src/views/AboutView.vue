<script setup lang="ts">
import MembersScroll from '@/components/MembersScroll.vue'
import { useDataStore } from '@/stores/data.ts'

const { members } = useDataStore()
</script>

<template>
  <div class="wrapper">
    <h1 style="width: 100%">{{ $t('About TB') }}</h1>
    <div class="about-wrapper">
      <div
        style="background-image: url('https://picsum.photos/500/500'); background-size: cover"
        class="about-image"
      ></div>
      <div style="width: 100%">
        {{ $t('about-1') }}
        <br />
        <br />
        {{ $t('about-2') }}
      </div>
      <div style="width: 100%">
        {{ $t('about-3') }}
        <br />
        <br />
        {{ $t('about-4') }}
      </div>
      <div
        style="background-image: url('https://picsum.photos/500/500'); background-size: cover"
        class="about-image"
      ></div>
    </div>
    <MembersScroll :members="members" :title="$t('Our Members')" />
  </div>
</template>

<style scoped>
.about-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .about-wrapper {
    grid-template-columns: 1fr;
  }

  .about-image:not(:last-child) {
    height: 20rem;
    width: 100%;
    background-position: center;
    background-size: cover;
  }
}
</style>
