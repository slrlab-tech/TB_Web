<script lang="ts">
export default {
  props: ['data'],
  data() {
    return {
      categories: [] as string[],
    }
  },
  computed: {
    products() {
      return [...this.data.products].sort(
        (a: { category: string; isFirst: boolean }, b: { category: string; isFirst: boolean }) =>
          this.categories.indexOf(a.category) - this.categories.indexOf(b.category),
      )
    },
  },
  created() {
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
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="tab-wrapper">
      <div class="tab-overlay"></div>
      <div class="tab">
        <a v-for="category in categories" :key="category" :href="'#' + category">
          <p>{{ category }}</p>
        </a>
      </div>
    </div>
    <div class="products-list">
      <div class="product" v-for="product in products" :key="product.id">
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
  min-height: 100dvh;
  display: flex;
  align-items: center;
}

.tab-wrapper {
  position: relative;
  width: 100%;
}

.tab-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;

  background:
    linear-gradient(to right, var(--white) 0, transparent 6rem),
    linear-gradient(to left, var(--white) 0, transparent 6rem);
}

.tab {
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 0 3rem;

  scrollbar-width: none;
  -ms-overflow-style: none;

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-button {
    display: none;
  }
}

.tab a:not(:first-of-type) {
  border-left: 1px solid var(--color-border);
}
</style>
