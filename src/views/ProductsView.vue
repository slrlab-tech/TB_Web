<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>

<script lang="ts">
export default {
  props: ['data'],
  data() {
    return {
      categories: [] as string[],
    }
  },
  mounted() {
    this.categories = this.data.products.reduce(
      (cat: string[], product: { category: string; isFirst?: boolean }) => {
        product.isFirst = false
        if (!cat.includes(product.category)) {
          product.isFirst = true
          cat.push(product.category)
        }
        return cat
      },
      [],
    )
    this.data.products.sort(
      (a: { category: string; isFirst: boolean }, b: { category: string; isFirst: boolean }) =>
        a.category.localeCompare(b.category),
    )
  },
}
</script>

<template>
  <div class="wrapper">
    <div style="position: relative">
      <Icon class="left scroll-icon" icon="ic:baseline-arrow-back-ios" />
      <!-- TODO: stop arrow from showing when no overflow -->
      <div class="tab" ref="tabRef">
        <a v-for="category in categories" :key="category" :href="'#' + category">
          <p>{{ category }}</p>
        </a>
      </div>
      <Icon class="right scroll-icon" icon="ic:baseline-arrow-forward-ios" />
    </div>
    <div class="products-list">
      <div class="product" v-for="product in data.products" :key="product.id">
        <h1 v-if="product.isFirst" :id="product.category">{{ product.category }}</h1>
        <img :src="product.image" alt="" />
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <button @click="$router.push({ path: '/products/' + product.id })">
          <!-- TODO: update for product name get from backend -->
          More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.none {
  display: none;
}

.products {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.scroll-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: var(--color-text);
  height: 100%;
}

.scroll-icon.left {
  left: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 60%,
    rgba(255, 255, 255, 0) 100%
  );
}

.scroll-icon.right {
  right: 0;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 60%,
    rgba(255, 255, 255, 0) 100%
  );
}

.tab {
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 0 2rem;
}

.tab ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 0;
}

.tab a:not(:first-of-type) {
  border-left: 1px solid var(--color-border);
}
</style>
