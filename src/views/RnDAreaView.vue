<script setup lang="ts">
import TimeLine from '@/components/TimeLine.vue'
import { ref, onBeforeMount } from 'vue'

import { useDataStore } from '@/stores/data.ts'
const { publications } = useDataStore()

const year = ref(0)
const current = ref(0)
let sortedPub: Array<Array<(typeof publications)[0]>>

onBeforeMount(() => {
  publications.sort((a, b) => Number(a.year) - Number(b.year))

  sortedPub = publications.reduce(
    (acc, pub) => {
      const lastGroup = acc[acc.length - 1]
      if (!lastGroup || lastGroup[0].year !== pub.year) {
        acc.push([pub])
      } else {
        lastGroup.push(pub)
      }
      return acc
    },
    [] as Array<Array<(typeof publications)[0]>>,
  )
})

const updateYear = (newYear: number) => {
  year.value = newYear
  current.value = 0
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
  <div class="wrapper-background">
    <div class="wrapper">
      <div style="width: 100%">
        <h1 style="width: 100%; text-align: center">{{ $t('Publications') }}</h1>
        <TimeLine
          :years="sortedPub.map((pub) => pub[0].year)"
          :onChange="(year: number) => updateYear(year)"
          light
        />
        <div style="display: flex; width: 100%; align-items: center; gap: 1rem">
          <button class="btn" @click="current -= 1" :disabled="current === 0">❮</button>
          <div style="width: 100%">
            <img
              :src="sortedPub[year][current].image.path"
              alt="Research Image"
              style="width: 100%; margin-block: 1rem"
            />
            <p>
              {{ $t(sortedPub[year][current].description) }}
            </p>
            <div class="dot-content">
              <div v-for="func in sortedPub[year][current].functions" :key="func.name">
                <p class="dot">{{ $t(func.name) }}</p>
              </div>
            </div>
          </div>
          <button
            class="btn"
            @click="current += 1"
            :disabled="current === sortedPub[year].length - 1"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  height: min-content;
  background-color: var(--text-light-1);
  color: var(--text-light-1);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 0.5rem;
}
.btn:disabled {
  opacity: 0;
  cursor: unset;
}

@media only screen and (max-width: 768px) {
  .btn {
    padding: 0.5rem 0.5rem;
    text-align: center;
  }

  .btn:first-child {
    margin-left: -1rem;
  }
  .btn:last-child {
    margin-right: -1rem;
  }
}
</style>
