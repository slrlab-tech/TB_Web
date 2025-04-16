<script setup lang="ts">
import { ref } from 'vue'

const year = ref(1)
const props = defineProps({
  onChange: {
    type: Function,
    default: () => {},
  },
})

const onClicked = (i) => {
  year.value = i
  props.onChange(i + 2010)
}
</script>

<template>
  <div class="wrapper">
    <div class="timeline">
      <div class="line"></div>
      <div v-for="i in 10" :key="i" @click="() => onClicked(i)" style="flex: 1">
        <div :class="'year ' + (year == i ? 'highlighted' : '')">{{ i + 2010 }}</div>
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
  background-color: var(--vt-c-text-light-1);
  z-index: -1;
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
}

.year:hover {
  font-size: 1.5rem;
}

.year:after {
  content: '';
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--vt-c-text-light-1);
  border-radius: 100%;
  transition: all 0.2s;
}

.highlighted {
  color: var(--vt-c-highlight);
  font-size: 1.5rem;
}

.highlighted:after {
  background-color: var(--vt-c-highlight);
}
</style>
