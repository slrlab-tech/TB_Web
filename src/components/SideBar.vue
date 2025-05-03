<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref(false)
const drawer = ref(null as HTMLElement | null)

const toggleMenu = (isOpen: boolean) => {
  isMenuOpen.value = isOpen
}

const setMenuPos = (isOpen: boolean) => {
  if (!drawer.value) return
  drawer.value.style.setProperty('right', isOpen ? '0' : -drawer.value.offsetWidth - 2 + 'px')
}

onUpdated(() => setMenuPos(isMenuOpen.value))

defineExpose({
  toggleMenu,
})
</script>

<script lang="ts">
export default {
  props: ['title', 'brand'],
}

window.onscroll = function () {
  if (document.documentElement.scrollTop < 24) {
    document
      .querySelector('header')
      ?.style.setProperty(
        'padding-top',
        (32 - document.documentElement.scrollTop || 0).toString() + 'px',
      )
  } else {
    document.querySelector('header')?.style.setProperty('padding-top', '8px')
  }
}
</script>

<template>
  <header>
    <!-- <div class="brand">{{ brand }}</div> -->
    <img src="../assets/logo.svg" alt="Logo" class="logo" />
    <Icon @click="toggleMenu(true)" icon="gg:details-more" class="icon-button" />
    <div class="menuMask" @click="toggleMenu(false)" v-show="isMenuOpen"></div>
    <div class="drawer" ref="drawer">
      <div class="language-switcher">
        <p @click="$i18n.locale = 'en'" :class="{ green: $i18n.locale !== 'en', locale: true }">
          EN
        </p>
        |
        <p
          @click="$i18n.locale = 'zh-hk'"
          :class="{ green: $i18n.locale !== 'zh-hk', locale: true }"
        >
          繁
        </p>
        |
        <p
          @click="$i18n.locale = 'zh-cn'"
          :class="{ green: $i18n.locale !== 'zh-cn', locale: true }"
        >
          简
        </p>
      </div>
      <slot></slot>
    </div>
  </header>
</template>

<style scoped>
.logo {
  width: 4rem;
}
.locale {
  cursor: pointer;
  padding: 3px;
  text-decoration: underline;
}
.language-switcher {
  display: flex;
  gap: 0.2rem;
}
.brand {
  height: 2rem;
  font-size: 1rem;
  background-color: var(--white);
  padding: 0 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  filter: drop-shadow(0.1rem 0.1rem 0.2rem var(--color-text));
}
.brand:after {
  content: '';
  width: 1rem;
  height: 1rem;
  background-color: var(--brand-color);
  border-radius: 50%;
  margin-left: 0.5rem;
}

.drawer {
  background-color: var(--color-background);
  position: absolute;
  height: 100dvh;
  right: -100vw;
  top: 0;
  z-index: 100;
  transition: all 0.2s;
  padding: 0 1rem;
}

.menuMask {
  height: 100dvh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.icon-button {
  height: 3rem;
  width: 3rem;
  color: var(--white);
  filter: drop-shadow(0.1rem 0.1rem 0.2rem var(--color-text));
  cursor: pointer;
}

header {
  line-height: 1.5;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem 1rem 4rem;
}
</style>
