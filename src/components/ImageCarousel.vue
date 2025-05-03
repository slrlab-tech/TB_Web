<script lang="ts" setup>
import { ref, defineProps, onMounted, onUnmounted } from 'vue'
import { resolveImagePath } from '@/utils/commonFunctions.ts'

let intervalId = -1

const { images, auto = true } = defineProps<{
  images: { image: string; alt: string }[]
  auto?: boolean
}>()
const currentIndex = ref(0)

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  resetInterval()
}
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
  resetInterval()
}
const resetInterval = () => {
  if (intervalId != -1) clearInterval(intervalId)
  intervalId = setInterval(
    () => (currentIndex.value = (currentIndex.value + 1) % images.length),
    5000,
  )
}

onMounted(() => {
  if (auto) resetInterval()
})

onUnmounted(() => clearInterval(intervalId))
</script>

<template>
  <div class="image-carousel">
    <div class="carousel-container">
      <img
        class="carousel-slide"
        v-for="(item, index) in images"
        :key="index"
        :src="resolveImagePath(item.image)"
        :alt="item.alt ?? 'logo'"
        :class="{ active: index === currentIndex }"
      />
    </div>
    <div class="carousel-btn">
      <button class="prev" @click="prevSlide">❮</button>
      <button class="next" @click="nextSlide">❯</button>
    </div>
  </div>
</template>

<style scoped>
.image-carousel {
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;
  height: 1px;
  min-height: 20px;
  overflow: hidden;
}
.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
}
.carousel-slide {
  width: 0;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  transition: opacity 0.5s ease-in-out;
  object-fit: contain;
}
.carousel-slide.active {
  width: 100%;
  opacity: 1;
}
.carousel-btn {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  padding-inline: 1rem;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.carousel-btn:hover {
  opacity: 1;
}
.prev,
.next {
  text-shadow:
    #000 1px 0 2px,
    #000 0 1px 2px,
    #000 -1px 0 2px,
    #000 0 -1px 2px;
  background-color: transparent;
  font-size: 2rem;
  height: 3rem;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
