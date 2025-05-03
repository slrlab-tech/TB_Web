<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>

<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="wrapper">
    <div
      :class="index % 2 ? 'columns reverse' : 'columns'"
      v-for="(item, index) in data"
      :key="item.title"
    >
      <div class="function-container">
        <Icon :icon="item.icon" style="font-size: 4.5rem" />
        <h2 style="margin-block: 0.5rem">{{ item.title }}</h2>
        <p style="text-align: center">{{ item.description }}</p>
      </div>
      <div style="height: 100%; width: 4px; background-color: var(--brand-color)"></div>
      <div class="function-container">
        <h2 class="title-bg">{{ $t('Used Tech') }}</h2>
        <div style="width: 100%">
          <div class="point" v-for="tech in item.technology" :key="tech">{{ tech }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.columns:not(:last-child) {
  margin-bottom: 3rem;
}

.title-bg {
  background-color: var(--brand-color);
  color: var(--white);
  width: 100%;
  border-radius: 1rem;
}

.point {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
}

.point:first-child {
  margin-top: 1.5rem;
}

.point::before,
.point::after {
  content: '';
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  margin: 0 1.5rem;
  background-color: var(--highlight-2);
}

.point::after {
  display: none;
}

.columns {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 3rem;
  text-align: center;
}

.reverse {
  direction: rtl;

  .point::before {
    display: none;
  }

  .point::after {
    display: block;
    background-color: var(--highlight);
  }

  .point {
    display: flex;
    justify-content: flex-end;
  }
}

.function-container {
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
