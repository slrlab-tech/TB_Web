<script setup lang="ts">
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import Banner from './components/Banner.vue'
</script>

<script lang="ts">
import json from './assets/data.json'
import Footer from './components/Footer.vue'
export default {
  data() {
    return {
      data: json as {
        [key: string]: { title: string; mission?: { banner: string; image: string } } | any
      },
    }
  },
}
</script>

<template>
  <div style="height: 5rem"></div>
  <TopBar
    class="topBar"
    :title="data[$route.name as string]?.title || data.brand"
    :brand="data.brand"
  ></TopBar>

  <Banner :title="data[$route.name as string]?.title || data.brand" :brand="data.brand"></Banner>

  <video
    class="background"
    ref="videoRef"
    src="https://videos.pexels.com/video-files/857134/857134-hd_1280_720_24fps.mp4"
    autoplay
    loop
    muted
    width="100%"
    height="100%"
    style="object-fit: cover"
  ></video>

  <div class="container">
    <RouterView :data="data" />
  </div>
  <Footer :data="data.contacts"></Footer>
</template>

<style scoped>
.topBar {
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
  top: -12vh;
  z-index: -1;
  background-color: var(--vt-c-white);
  border-radius: 50% 50% 0 0;
  height: 60vh;
  width: 120vw;
  min-width: 120vw;
  margin: 0 -10vw 0 -10vw;
}

.container {
  margin-top: 10vh;
  margin-bottom: 10vh;
  background:
    linear-gradient(
      transparent 10vh,
      var(--vt-c-white) 10vh,
      var(--vt-c-white) 50%,
      transparent 50%
    ),
    linear-gradient(
      to top,
      transparent 10vh,
      var(--vt-c-white) 10vh,
      var(--vt-c-white) 50%,
      transparent 50%
    );
  position: relative;
}

.container::after {
  content: '';
  position: absolute;
  bottom: -12vh;
  z-index: -1;
  background-color: var(--vt-c-white);
  border-radius: 0 0 50% 50%;
  height: 60vh;
  width: 120vw;
  min-width: 120vw;
  margin: 0 -10vw 0 -10vw;
}
</style>

<!-- TODO: replace picsum images -->
