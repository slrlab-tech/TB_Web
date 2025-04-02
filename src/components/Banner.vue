<script lang="ts">
export default {
  props: ['title', 'brand'],
  mounted() {
    console.log('title', this.title)
    console.log('title', this.brand)
  },
}
</script>

<template>
  <div class="banner">
    <template v-if="brand !== title">
      <h1>{{ title }}</h1>
    </template>
    <template v-if="brand == title">
      <div class="brandWrapper">
        <h1>{{ brand.slice(0, brand.indexOf(' ')) }}</h1>
        <h1 class="enlarge">{{ brand.slice(brand.indexOf(' ')) }}</h1>
      </div>
    </template>
    <div>
      <div class="line1"></div>
      <div class="line2"></div>
    </div>
    <div class="line3"></div>
  </div>
</template>

<style scoped>
.brandWrapper {
  display: flex;
  flex-direction: column;
}

.enlarge {
  font-size: 6rem;
  margin: -3rem 0 0 16rem;
}

.banner {
  color: var(--vt-c-white);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: darkblue;
}

.line1 {
  width: 30%;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  right: 0;
  top: 7rem;
}
.line2 {
  rotate: -45deg;
  width: 4rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  right: calc(30% + 2rem - 4rem * cos(45deg));
  top: calc(7rem + 3.5rem - 3rem * cos(45deg));
}
.line3 {
  width: 10%;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  right: calc(30% + 4rem * cos(45deg) - 0.5rem);
  top: calc(7rem - 3rem * cos(45deg));
}
</style>
