<script lang="ts">
interface Product {
  description: string
  id: string
  image: string
  name: string
  detailImage: string | null
  functions: Array<{
    name: string
    description: string
    url: string
    isVideo: boolean
  }>
}

export default {
  props: ['data'],
  data() {
    return {
      product: {} as Product,
    }
  },
  beforeMount() {
    this.data.products.some((product: Product) => {
      if (product.id === this.$route.params.productId) {
        this.product = product
        return true
      }
    })
  },
}
</script>

<template>
  <div class="wrapper">
    <h1>{{ product.name }}</h1>
    <div class="product-details">
      <img :src="product.detailImage ?? product.image" alt="Product image" class="product-image" />
      <p>{{ product.description }}</p>
      <div v-for="func in product.functions" :key="func.name">
        <h2>{{ func.name }}</h2>
        <img
          class="product-image"
          v-if="!func.isVideo"
          :src="func.url"
          :alt="func.name + ' image'"
        />
        <video class="product-image" v-if="func.isVideo" :src="func.url" autoplay loop></video>
        <p>{{ func.description }}</p>
      </div>
      <!-- <p>Price: {{ product.price }}</p> -->
    </div>
  </div>
</template>

<style scoped>
.product-image {
  width: 100%;
  aspect-ratio: 3;
  border-radius: 1rem;
}

.product-image {
  width: 100%;
  aspect-ratio: 2;
  border-radius: 1rem;
  object-fit: cover;
}
</style>
