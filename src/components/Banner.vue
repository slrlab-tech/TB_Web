<script lang="ts">
export default {
  props: ['title', 'brand'],
}
</script>

<template>
  <div class="banner">
    <template v-if="brand !== title">
      <h1 class="title">{{ $t(title) }}</h1>
    </template>
    <template v-if="brand == title">
      <div class="brand-wrapper">
        <h1>{{ brand.slice(0, brand.indexOf(' ')) }}</h1>
        <h1 class="enlarge">{{ brand.slice(brand.indexOf(' ')) }}</h1>
      </div>
    </template>

    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    <div class="line4"></div>

    <div class="line5"></div>
    <div class="line6"></div>
    <div class="line7"></div>
    <div class="line8"></div>
  </div>
</template>

<style scoped>
.title {
  padding: 1rem 0 4rem 0;
}

.brand-wrapper {
  display: flex;
  flex-direction: column;
}

.enlarge {
  font-size: 6rem;
  margin: -3rem 0 0 16rem;
}

.banner {
  padding: 8rem 0 1rem 0;
  color: var(--vt-c-white);
  display: flex;
  align-items: center;
  justify-content: center;
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
  right: calc(30% + 1.75rem * cos(45deg) - 2.25rem);
  top: calc(7rem + 1.75rem * cos(45deg));
}
.line3 {
  width: 5%;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  right: calc(30% + 3.5rem * cos(45deg) - 0.5rem);
  top: calc(7rem + 3.5rem * cos(45deg));
}
.line4 {
  width: 15%;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  right: 10%;
  top: calc(7rem + 3.5rem * cos(45deg));
}

.line5 {
  width: 20%;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  left: 0;
  top: 14rem;
}
.line6 {
  rotate: 45deg;
  width: 4rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  left: calc(20% + 1.75rem * cos(45deg) - 2.25rem);
  top: calc(14rem + 1.75rem * cos(45deg));
}
.line7 {
  width: 10%;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  left: calc(20% + 3.5rem * cos(45deg) - 0.5rem);
  top: calc(14rem + 3.5rem * cos(45deg));
}
.line8 {
  width: 12%;
  height: 0.5rem;
  border-radius: 0.5rem;
  background-color: var(--vt-c-white);
  position: absolute;
  left: 30%;
  top: 15rem;
}
</style>
