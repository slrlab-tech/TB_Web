<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { RouterView } from 'vue-router'
import { ref } from 'vue'

import { useDataStore } from '@/stores/data.ts'

import TopBar from '@/components/TopBar.vue'
import TitleBanner from '@/components/TitleBanner.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import CurvedBg from '@/components/CurvedBg.vue'

const data = useDataStore()
</script>

<script lang="ts">
const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const TopBarRef = ref<{ toggleMenu: (_: boolean) => void } | null>(null)
const iconOpacity = ref(1)

const closeMenu = () => {
  TopBarRef.value?.toggleMenu(false)
}

const onLogoEnd = (progress: number) => {
  iconOpacity.value = progress
}

const onLogoStart = () => {
  iconOpacity.value = 0
}
</script>

<template>
  <TopBar class="top-bar" ref="TopBarRef" :iconOpacity="iconOpacity">
    <nav>
      <div class="nav-section">
        <RouterLink @click="closeMenu()" to="/about">{{ $t('About Us') }}</RouterLink>
        <RouterLink @click="closeMenu()" to="/products">{{ $t('Company Background') }}</RouterLink>
        <RouterLink @click="closeMenu()" to="/products">{{ $t('Members') }}</RouterLink>
      </div>
      <div class="nav-section">
        <RouterLink @click="closeMenu()" to="/products">{{ $t('Research Team') }}</RouterLink>
      </div>
      <div class="nav-section">
        <RouterLink @click="closeMenu()" to="/products">{{ $t('Our Products') }}</RouterLink>
      </div>
      <div class="nav-section">
        <RouterLink @click="closeMenu()" to="/components">{{
          $t('Learn more about SEN!')
        }}</RouterLink>
      </div>
    </nav>
  </TopBar>
  <TitleBanner :title="$route.name || 'Tomorrow\'s Brain'" :home="$route.path == '/'"></TitleBanner>
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
    <!-- <RouterView v-if="isLoaded" :data="data" :onLogoEnd="onLogoEnd" :onLogoStart="onLogoStart" /> -->
    <RouterView :data="data" :onLogoEnd="onLogoEnd" :onLogoStart="onLogoStart" />
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

nav {
  display: flex;
}

.nav-section {
  text-align: left;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  :first-child {
    font-size: var(--h2);
  }
}

.nav-section:not(:last-child) {
  border-right: 1px solid var(--divider-light-1);
}
</style>

<!-- TODO: replace picsum images -->
