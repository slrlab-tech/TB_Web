<script setup lang="ts">
import { onMounted, ref } from 'vue'

const year = ref('')
const { onChange, years, light } = defineProps({
  onChange: {
    type: Function,
    default: () => {},
  },
  years: {
    type: Array<string>,
    default: () => Array.from({ length: 10 }, (_, i) => i + 2010),
  },
  light: {
    type: Boolean,
    default: false,
  },
})

const onClicked = (i: number) => {
  year.value = years[i]
  onChange(i)
}

onMounted(() => onClicked(0))
</script>

<template>
  <div class="wrapper">
    <div class="timeline">
      <div
        class="line"
        :style="{ backgroundColor: light ? 'var(--text-dark-1)' : 'var(--text-light-1)' }"
      ></div>
      <div v-for="(i, index) in years" :key="i" @click="() => onClicked(index)" style="flex: 1">
        <div class="year" :class="{ light, highlighted: year == i }">{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

.line {
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  width: 100vw;
  height: 2px;
}

.timeline {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  position: relative;
}

.year {
  cursor: pointer;
  justify-items: center;
  transition: all 0.2s;
  z-index: 1;
  position: relative;
}

.year:hover {
  font-size: 1.5rem;
}

.year:after {
  content: '';
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--text-light-1);
  border-radius: 100%;
  transition: all 0.2s;
}

.year.light:after {
  background-color: var(--text-dark-1);
}

.highlighted {
  color: var(--highlight);
  font-size: 1.5rem;
}

.highlighted:after {
  background-color: var(--highlight) !important;
}
</style>
