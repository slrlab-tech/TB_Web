<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref(false)
</script>

<script lang="ts">
export default {
  props: ['title', 'brand'],
  mounted() {
    console.log('title', this.title)
    console.log('brand', this.brand)
  },
}

window.onscroll = function () {
  if (document.documentElement.scrollTop < 32) {
    document
      .querySelector('header')
      ?.style.setProperty(
        'padding-top',
        (24 - document.documentElement.scrollTop || 0).toString() + 'px',
      )
  } else {
    document.querySelector('header')?.style.setProperty('padding-top', '8px')
  }
}
</script>

<template>
  <header>
    <div class="brand">{{ brand }}</div>
    <Icon @click="isMenuOpen = true" icon="gg:details-more" class="iconButton" />

    <div class="menuMask" @click="isMenuOpen = false" v-show="isMenuOpen"></div>
    <div
      class="drawer"
      :style="{
        right: isMenuOpen ? '0' : ' -10vw',
      }"
    >
      <nav>
        <RouterLink @click="isMenuOpen = false" to="/">Home</RouterLink>
        <RouterLink @click="isMenuOpen = false" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.brand {
  height: 2rem;
  font-size: 1rem;
  background-color: var(--vt-c-white);
  padding: 0 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
}
.brand:after {
  content: '';
  width: 1rem;
  height: 1rem;
  background-color: var(--vt-c-brand-color);
  border-radius: 50%;
  margin-left: 0.5rem;
}

.drawer {
  background-color: var(--color-background);
  position: absolute;
  height: 100vh;
  width: 10vw;
  right: -10vw;
  top: 0;
  z-index: 100;
  transition: all 0.2s;
  padding-left: 1rem;
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

.menuMask {
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.iconButton {
  height: 3rem;
  width: 3rem;
  color: var(--vt-c-white);
}

header {
  line-height: 1.5;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem 1rem 4rem;
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

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
