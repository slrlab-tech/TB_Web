<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue'
// import PopUpButton from '@/components/PopUpButton.vue'
import { ref } from 'vue'
import type { ImageInfo } from '@/stores/data'
</script>

<script lang="ts">
export default {
  props: {
    product: {
      type: { images: Array<ImageInfo>, name: String, functions: Array },
      required: true,
    },
  },
}

const currentIndex = ref(0)
</script>

<template>
  <div class="wrapper-background">
    <div class="wrapper button-section">
      <h1 class="heading">{{ $t('highlight.title') }}</h1>
      <h2 style="text-align: center">{{ $t('highlight.' + (product.name || 'Product Name')) }}</h2>
      <ImageCarousel
        height="20rem"
        :items="product.images"
        :onChange="(index: number) => (currentIndex = index)"
        style="margin-top: 2rem"
      />
      <div class="dot-content">
        <div v-for="func in product.functions" :key="func.name">
          <p class="dot">{{ $t(func.name) }}</p>
        </div>
      </div>
      <!-- <PopUpButton @click="() => $router.push({ path: '/products/' + product.id })">{{
        $t('More Information')
      }}</PopUpButton> -->
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  color: var(--text-light-1);
  padding-block: 4rem;
}

.dot-content {
  margin-bottom: 6rem;
}
</style>
