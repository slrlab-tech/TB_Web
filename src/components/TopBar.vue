<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { getBrowser } from '@/utils/utils.ts'

const drawer = ref(null as HTMLElement | null)
const isMenuOpen = ref(false)
const isLanguageOpen = ref(false)
let menuHeight: number

const toggleMenu = (isOpen: boolean) => {
  if (!drawer.value) return
  isMenuOpen.value = isOpen
  if (isOpen) drawer.value.style.setProperty('top', '0px')
  else drawer.value.style.setProperty('top', menuHeight - 2 + 'px')
}

const toggleLanguage = (isOpen: boolean) => {
  isLanguageOpen.value = isOpen
}

onMounted(() => {
  menuHeight = drawer.value ? -drawer.value.offsetHeight : 0
  toggleMenu(false)
})

defineExpose({ toggleMenu })
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
    <div>
      <Icon
        @click="toggleLanguage(true)"
        icon="material-symbols:language"
        class="icon-button"
        style="anchor-name: --language"
      />
      <Icon @click="toggleMenu(true)" icon="gg:details-more" class="icon-button" />
    </div>
    <div
      class="mask"
      style="background-color: rgba(0, 0, 0, 0.5)"
      @click="toggleMenu(false)"
      v-show="isMenuOpen"
    ></div>
    <div class="drawer" ref="drawer">
      <slot></slot>
    </div>
    <div class="mask" @click="toggleLanguage(false)" v-show="isLanguageOpen"></div>
    <div v-show="isLanguageOpen" class="language-switcher">
      <p @click="$i18n.locale = 'en'" :class="{ blue: $i18n.locale !== 'en', locale: true }">EN</p>
      |
      <p @click="$i18n.locale = 'zh-hk'" :class="{ blue: $i18n.locale !== 'zh-hk', locale: true }">
        繁
      </p>
      |
      <p @click="$i18n.locale = 'zh-cn'" :class="{ blue: $i18n.locale !== 'zh-cn', locale: true }">
        简
      </p>
    </div>
  </header>
</template>

<style scoped>
.logo {
  opacity: v-bind(iconOpacity);
  width: calc((var(--h4) * 1.5 + 1.25rem) * v-bind(SafariScale));
  margin: -0.5rem;
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

  top: anchor(--language bottom);
  right: anchor(--language right);
  position: absolute;
  background-color: var(--white);
  box-shadow: 0.1rem 0.1rem 0.2rem var(--color-text);
  z-index: 100;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.drawer {
  background-color: var(--color-background);
  position: absolute;
  padding: 2rem 0;
  width: 100vw;
  left: 0;
  z-index: 100;
  transition: top 0.2s;
  padding: 0 1rem;
}

.mask {
  height: 100dvh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.icon-button {
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
  color: var(--white);
  filter: drop-shadow(0.1rem 0.1rem 0.2rem var(--color-text));
  cursor: pointer;
}

header {
  line-height: 1.5;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem 0 4rem;
}
</style>
