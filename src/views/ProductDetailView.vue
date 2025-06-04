<script setup lang="ts">
import router from '@/router'
import { useDataStore } from '@/stores/data.ts'
import { useRoute } from 'vue-router'

const { products } = useDataStore()
const route = useRoute()

const product = products.find((p) => p.id === route.params.productId)

if (!product) {
  console.error('Product not found for ID:', route.params.productId)
  router.push({ name: 'NotFound' })
}
</script>

<template>
  <div class="wrapper" v-if="product">
    <h2>Temporary Product detail</h2>
    <h1>{{ $t(product.name) }}</h1>
    <div class="product-detail">
      <div class="product-images">
        <img
          v-for="(image, index) in product.images"
          :key="index"
          :src="image.image"
          :alt="image.alt"
        />
      </div>
      <div class="product-info">
        <h2>{{ $t(product.category) }}</h2>
        <p>{{ $t(product.description) }}</p>
        <img :src="product.images[0].image" alt="Product Detail Image" />
      </div>
      <div class="product-functions">
        <h3>{{ $t('Functions') }}</h3>
        <div class="function-list">
          <div v-for="(func, index) in product.functions" :key="index" class="function-item">
            <img v-if="!func.isVideo" :src="func.url" alt="Function Image" />
            <video v-else controls>
              <source :src="func.url" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h4>{{ $t(func.name) }}</h4>
            <p>{{ $t(func.description) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.product-images img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.product-info {
  text-align: center;
  margin-top: 20px;
}
.product-functions {
  margin-top: 20px;
}
.function-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.function-item {
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  text-align: center;
}
.function-item img,
.function-item video {
  width: 100%;
  height: auto;
}
.function-item h4 {
  margin-top: 10px;
}
.function-item p {
  margin-top: 5px;
}
</style>
