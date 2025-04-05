<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="products">
    <h1>This is products page</h1>
    <div class="products-list">
      <div class="product" v-for="product in data.products" :key="product.id">
        <img :src="product.image" alt="" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .products {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
