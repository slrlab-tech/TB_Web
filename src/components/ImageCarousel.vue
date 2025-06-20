<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

let intervalId = -1

const {
  items,
  auto = true,
  onChange,
} = defineProps<{
  items: { image: string; alt: string; name: string; link: string }[]
  auto?: boolean
  onChange?: (index: number) => void
}>()
const currentIndex = ref(0)

const openImage = (link: string) => {
  if (link) window.open(link, '_blank')
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
  onChange?.(currentIndex.value)
  resetInterval()
}
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length
  onChange?.(currentIndex.value)
  resetInterval()
}
const resetInterval = () => {
  if (intervalId != -1) clearInterval(intervalId)
  intervalId = window.setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % items.length
    onChange?.(currentIndex.value)
  }, 5000)
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
        v-for="(item, index) in items"
        @click="() => openImage(item.link)"
        :key="index"
        :src="item.image"
        :alt="item.alt ?? item.name ?? 'image'"
        :class="{ active: index === currentIndex }"
        :style="{ cursor: item.link ? 'pointer' : 'default' }"
      />
      <div class="carousel-btn" v-if="items.length > 1">
        <button class="prev" @click="prevSlide">❮</button>
        <button class="next" @click="nextSlide">❯</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-carousel {
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 1200/628;
}
.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
  height: 100%;
}
.carousel-container:hover {
  .carousel-btn {
    opacity: 1;
  }
}
.carousel-slide {
  pointer-events: all;
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
  pointer-events: none;
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
.prev,
.next {
  user-select: none;
  -webkit-user-select: none;
  pointer-events: all;
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
