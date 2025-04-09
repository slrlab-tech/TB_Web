<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import Banner from './components/Banner.vue'
import json from './assets/data.json'
import Footer from './components/Footer.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref } from 'vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      data: json as {
        [key: string]: { title: string; mission?: { banner: string; image: string } } | any
      },
    }
  },
}

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const topBarRef = ref<{ closeMenu: () => void } | null>(null)

const closeMenu = () => {
  topBarRef.value?.closeMenu()
}
</script>

<template>
  <TopBar class="top-bar" :title="$route.name || data.brand" :brand="data.brand" ref="topBarRef">
    <nav>
      <RouterLink @click="closeMenu()" to="/">Home</RouterLink>
      <RouterLink @click="closeMenu()" to="/about">About</RouterLink>
      <RouterLink @click="closeMenu()" to="/products">Products</RouterLink>
    </nav>
  </TopBar>

  <Banner :title="$route.name || data.brand" :brand="data.brand"></Banner>

  <video
    class="background"
    src="https://videos.pexels.com/video-files/857134/857134-hd_1280_720_24fps.mp4"
    autoplay
    loop
    muted
    width="100%"
    height="100%"
    style="object-fit: cover"
  ></video>
  <!-- TODO: replace video -->
  <div class="container">
    <RouterView :data="data" />
  </div>
  <Icon icon="mingcute:up-line" class="up-btn" @click="toTop()"></Icon>
  <Footer :data="data.contacts"></Footer>
</template>

<style scoped>
.up-btn {
  width: 4rem;
  height: 4rem;
  color: var(--vt-c-white);
  background-color: var(--vt-c-brand-color);
  border-radius: 1rem;

  position: fixed;
  bottom: 4rem;
  right: 4rem;
}

.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  object-fit: cover;
}

.container::before {
  content: '';
  position: absolute;
  top: -10vw;
  z-index: -1;
  background-color: var(--vt-c-white);
  border-radius: 50% 50% 0 0;
  height: 30vw;
  width: 120vw;
  min-width: 120vw;
  margin: 0 -10vw 0 -10vw;
}

.container {
  margin-top: 10vw;
  margin-bottom: 10vw;
  padding-bottom: 5vh;
  background:
    linear-gradient(
      transparent 10vw,
      var(--vt-c-white) 10vw,
      var(--vt-c-white) 51%,
      transparent 51%
    ),
    linear-gradient(
      to top,
      transparent 10vw,
      var(--vt-c-white) 10vw,
      var(--vt-c-white) 51%,
      transparent 51%
    );
  position: relative;
}

.container::after {
  content: '';
  position: absolute;
  bottom: -10vw;
  z-index: -1;
  background-color: var(--vt-c-white);
  border-radius: 0 0 50% 50%;
  height: 30vw;
  width: 120vw;
  min-width: 120vw;
  margin: 0 -10vw 0 -10vw;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a:not(:first-of-type) {
  border-top: 1px solid var(--color-border);
}

nav {
  display: flex;
  flex-direction: column;
}
</style>

<!-- TODO: replace picsum images -->
