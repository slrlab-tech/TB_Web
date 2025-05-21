<script setup lang="ts">
import ImageCarousel from './ImageCarousel.vue'
import PopUpButton from './PopUpButton.vue'
import { ref } from 'vue'
</script>

<script lang="ts">
export default {
  props: ['items'],
}

const currentIndex = ref(0)
</script>

<template>
  <div class="banner">
    <div class="wrapper button-section">
      <h1>Highlights of TB</h1>
      <h2>{{ $t(items[currentIndex]?.name || 'Product Name') }}</h2>
      <ImageCarousel
        height="20rem"
        :items="items"
        :onChange="(index) => (currentIndex = index)"
        style="margin-top: 2rem"
      />
      <div class="content">
        <div v-for="func in items[currentIndex]?.functions" :key="func.name">
          <p class="dot">{{ $t(func.name) }}</p>
        </div>
      </div>
      <PopUpButton @click="() => console.log('Button clicked!')">{{
        $t('More Information')
      }}</PopUpButton>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-color: var(--brand-color);
}

.wrapper {
  display: flex;
  color: var(--white);
  padding-block: 4rem;
}

.content {
  flex: 1;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
  margin-block: 2rem 6rem;
}
</style>
