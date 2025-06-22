<script setup lang="ts">
import MembersScroll from '@/components/MembersScroll.vue'
import { useDataStore } from '@/stores/data.ts'

const { members } = useDataStore()
</script>

<!-- !!!TODO: clean up -->
<template>
  <div class="wrapper">
    <h2 class="heading">{{ $t('About TB') }}</h2>
  </div>
  <div class="wrapper about-container">
    <div>
      <span style="font-weight: bold; white-space: pre-line">{{ $t('about-0') }}</span>
      {{ $t('about-1') }}
    </div>
    <div v-for="i in 3" :key="i">
      {{ $t('about-' + (i + 1)) }}
    </div>
  </div>
  <div class="wrapper">
    <h2 class="heading">{{ $t('Our Members') }}</h2>
    <MembersScroll :members="members" />
  </div>
</template>

<style scoped>
.about-container {
  box-shadow: 4px 4px 8px var(--indigo);
  gap: 1rem;
}

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
