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
      class="columns"
      :class="{ reverse: index % 2 }"
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
          <div class="dot function" v-for="tech in item.technology" :key="tech">{{ tech }}</div>
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

.function {
  margin-top: 1rem;
}

.function:first-child {
  margin-top: 1.5rem;
}

.columns {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 3rem;
  text-align: center;
}

.reverse {
  direction: rtl;

  .dot::before {
    display: none;
  }

  .dot::after {
    display: block;
    background-color: var(--highlight);
  }

  .dot {
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
