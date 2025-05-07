<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
import TitleBanner from '@/components/TitleBanner.vue'
import json from '@/assets/data.json'
import SiteFooter from '@/components/SiteFooter.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref } from 'vue'
import CurvedBg from '@/components/CurvedBg.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      data: json as {
        [key: string]: unknown
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

const SideBarRef = ref<{ toggleMenu: (_: boolean) => void } | null>(null)

const closeMenu = () => {
  SideBarRef.value?.toggleMenu(false)
}
</script>

<template>
  <SideBar class="top-bar" :title="$route.name || data.brand" :brand="data.brand" ref="SideBarRef">
    <nav>
      <RouterLink @click="closeMenu()" to="/">{{ $t('Home') }}</RouterLink>
      <RouterLink @click="closeMenu()" to="/about">{{ $t('About') }}</RouterLink>
      <RouterLink @click="closeMenu()" to="/products">{{ $t('Products') }}</RouterLink>
    </nav>
  </SideBar>
  <TitleBanner :title="$route.name || data.brand" :home="$route.path == '/'"></TitleBanner>
  <video
    class="background"
    src="https://videos.pexels.com/video-files/857134/857134-hd_1280_720_24fps.mp4"
    autoplay
    loop
    muted
    width="100%"
    height="100%"
    style="object-fit: cover"
    TODO="replace video"
  ></video>
  <CurvedBg>
    <RouterView :data="data" />
  </CurvedBg>
  <Icon icon="mingcute:up-line" class="up-btn" @click="toTop()"></Icon>
  <SiteFooter :data="data.contacts"></SiteFooter>
</template>

<style scoped>
.up-btn {
  width: auto;
  height: 4rem;
  color: var(--white);
  background-color: var(--brand-color);
  border-radius: 1rem;
  padding: 0rem 0.5rem;

  position: fixed;
  z-index: 100;
  bottom: 4rem;
  right: 4rem;

  filter: drop-shadow(2px 2px 2px);
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
  z-index: -100;
  object-fit: cover;
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
