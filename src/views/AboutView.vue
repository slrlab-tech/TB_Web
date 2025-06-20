<script setup lang="ts">
import MembersScroll from '@/components/MembersScroll.vue'
import { useDataStore } from '@/stores/data.ts'

const { members } = useDataStore()
</script>

<!-- !!!TODO: clean up -->
<template>
  <div class="wrapper">
    <h2 class="title">{{ $t('About TB') }}</h2>
  </div>
  <div class="wrapper about-container">
    <div>
      <span style="font-weight: bold">{{ $t('about-0') }}</span> {{ $t('about-1') }}
    </div>
    <div>
      {{ $t('about-2') }}
    </div>
    <div>
      {{ $t('about-3') }}
    </div>
    <div>
      {{ $t('about-4') }}
    </div>
  </div>
  <div class="wrapper">
    <MembersScroll :members="members" :title="$t('Our Members')" />
  </div>
</template>

<style scoped>
.title {
  border-bottom: 5px solid var(--highlight-1);
  margin-block: 3rem 1px;
  padding-inline: 2rem;
  line-height: 1.2;
  width: fit-content;
}

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
