<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggle() {
  isMenuOpen = !isMenuOpen
}
</script>

<script lang="ts">
import json from './assets/data.json'
export default {
  data() {
    return {
      data: json,
    }
  },
}
</script>

<template>
  <header>
    <button class="menuButton" @click="isMenuOpen = true">Menu</button>

    <div class="menuMask" @click="isMenuOpen = false" v-show="isMenuOpen"></div>

    <div
      class="drawer"
      :style="{
        width: isMenuOpen ? '10vw' : '0',
        padding: isMenuOpen ? '0 1rem' : '0',
      }"
    >
      <nav>
        <RouterLink @click="isMenuOpen = false" to="/">Home</RouterLink>
        <RouterLink @click="isMenuOpen = false" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div>{{ data[$route.name].title }}</div>
  <RouterView :data="data" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

header {
  display: flex;
  justify-content: right;
}

.menuMask {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.drawer {
  background-color: var(--color-background);
  width: 0;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
  transition: all 0.2s;
}

nav {
  width: min-content;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  padding: 0 1rem 0 1rem;
  border-top: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

<!-- For sending data to child -->
<!-- <script setup lang="ts">
defineProps<{
  msg: string
}>()
</script> -->
