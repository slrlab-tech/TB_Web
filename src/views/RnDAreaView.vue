<script setup lang="ts">
import TimeLine from '@/components/TimeLine.vue'
import { ref, onBeforeMount } from 'vue'
import { resolveImagePath } from '@/utils/utils'

import { useDataStore } from '@/stores/data.ts'
const { publications } = useDataStore()

const year = ref(0)

onBeforeMount(() =>
  publications.sort((a, b) => {
    if (a.year > b.year) return 1
    if (a.year < b.year) return -1
    return 0
  }),
)

const updateYear = (newYear: number) => {
  year.value = newYear
}
</script>

<template>
  <div class="wrapper">
    <h1>{{ $t('About Speech, Language and Reading Lab') }}</h1>
    <img
      src="https://picsum.photos/400/200"
      alt="Lab Image"
      style="width: 100%; margin-block: 1.5rem"
    />
    <p>
      {{ $t('Descriptions') }}
    </p>
  </div>
  <div class="wrapper" style="background-color: var(--brand-color); color: var(--text-dark-1)">
    <h1>{{ $t('Publications') }}</h1>
    <TimeLine
      :years="publications.map(({ year }) => year)"
      :onChange="(year: number) => updateYear(year)"
      light
    />
    <img
      :src="resolveImagePath(publications[year].image)"
      alt="Research Image"
      style="width: 100%; margin-block: 1.5rem"
    />
    <p>
      {{ $t(publications[year].description) }}
    </p>
    <div class="dot-content">
      <div v-for="func in publications[year].functions" :key="func.name">
        <p class="dot">{{ $t(func.name) }}</p>
      </div>
    </div>
  </div>
</template>
