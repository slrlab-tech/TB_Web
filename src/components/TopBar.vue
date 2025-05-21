<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { getBrowser } from '@/utils/utils.ts'

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
  props: ['iconOpacity'],
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

const SafariScale = getBrowser() == 'Safari' ? 2 : 1
</script>

<template>
  <header>
    <img v-if="$route.path == '/'" src="../assets/logo.svg" alt="Logo" class="logo" />
    <div v-if="$route.path !== '/'" @click="$router.push({ path: '/' })" class="logo-btn">
      {{ $t('Tomorrow’s Brain') }}
      <div class="logo-wrapper" :style="{ height: SafariScale === 2 ? 'var(--h4)' : 'unset' }">
        <img src="../assets/logo.svg" alt="Logo" class="logo" />
      </div>
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
  opacity: v-bind(iconOpacity);
  width: calc(4rem * v-bind(SafariScale));
  scale: calc(1 / v-bind(SafariScale));
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
    width: calc(var(--h4) * v-bind(SafariScale));
    translate: calc((v-bind(SafariScale) - 1) * -25%) calc((v-bind(SafariScale) - 1) * -25%);
    scale: calc(1 / v-bind(SafariScale));
  }
}

.logo-wrapper {
  width: var(--h4);
  display: flex;
  align-items: center;
  justify-content: center;
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
  top: -100dvh;
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
