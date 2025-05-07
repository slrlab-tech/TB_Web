<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'

const isMenuOpen = ref(false)
const drawer = ref(null as HTMLElement | null)

const toggleMenu = (isOpen: boolean) => {
  if (!drawer.value) return
  isMenuOpen.value = isOpen
  drawer.value.classList.toggle('open-drawer', isOpen)
}

onMounted(() => {
  if (drawer.value) {
    drawer.value.style.setProperty('top', -drawer.value.offsetHeight - 2 + 'px')
  }
})

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
    <img v-if="$route.path == '/'" src="../assets/logo.svg" alt="Logo" class="logo" />
    <div v-if="$route.path !== '/'" @click="$router.push({ path: '/' })" class="logo-btn">
      {{ $t('Tomorrow’s Brain') }}
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
    </div>
    <Icon @click="toggleMenu(true)" icon="gg:details-more" class="icon-button" />
    <div class="menuMask" @click="toggleMenu(false)" v-show="isMenuOpen"></div>
    <div class="drawer" ref="drawer">
      <slot></slot>
      <div class="language-switcher">
        <p @click="$i18n.locale = 'en'" :class="{ blue: $i18n.locale !== 'en', locale: true }">
          EN
        </p>
        |
        <p
          @click="$i18n.locale = 'zh-hk'"
          :class="{ blue: $i18n.locale !== 'zh-hk', locale: true }"
        >
          繁
        </p>
        |
        <p
          @click="$i18n.locale = 'zh-cn'"
          :class="{ blue: $i18n.locale !== 'zh-cn', locale: true }"
        >
          简
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo {
  width: 4rem;
}

.logo-btn {
  background-color: var(--white);
  padding: 0.25rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: var(--h4);
  font-weight: 700;
  border-radius: var(--h4);

  .logo {
    width: var(--h4);
  }
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

.open-drawer {
  top: 0 !important;
}

.drawer {
  background-color: var(--color-background);
  position: absolute;
  padding: 2rem 0;
  width: 100vw;
  top: -100%;
  left: 0;
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
