<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
import { Icon } from '@iconify/vue'
import { getBrowser, getMobile } from '@/utils/utils.ts'

const drawer = ref(null as HTMLElement | null)
const isMenuOpen = ref(false)
const isLanguageOpen = ref(false)
const isMobile = getMobile()
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

onUpdated(() => {
  menuHeight = drawer.value ? -drawer.value.offsetHeight : 0
  toggleMenu(isMenuOpen.value)
})

onMounted(() => {
  window.addEventListener('resize', () => {
    menuHeight = drawer.value ? -drawer.value.offsetHeight : 0
    toggleMenu(isMenuOpen.value)
  })
})

defineExpose({ toggleMenu })
</script>

<script lang="ts">
export default {
  props: { iconOpacity: { type: Number, default: 1 } },
}

window.onscroll = function () {
  if (document.documentElement.scrollTop < 56) {
    document
      .querySelector('header')
      ?.style.setProperty(
        'padding-top',
        (64 - document.documentElement.scrollTop || 0).toString() + 'px',
      )
  } else {
    document.querySelector('header')?.style.setProperty('padding-top', '8px')
  }
}

const SafariScale = getBrowser() == 'Safari' ? 2 : 1
</script>

<template>
  <header>
    <div style="position: relative">
      <div
        v-if="$route.path !== '/' && !isMobile"
        @click="$router.push({ path: '/' })"
        class="logo-btn shadow"
      >
        <div class="logo-text">{{ $t('Tomorrow’s Brain') }}</div>
      </div>
      <img
        src="@/assets/logo.svg"
        alt="Logo"
        class="logo big-logo"
        :style="{ transform: $route.path !== '/' ? 'translateY(0)' : 'translateY(-40%)' }"
      />
    </div>
    <div style="position: relative">
      <Icon
        @click="toggleLanguage(true)"
        icon="material-symbols:language"
        class="icon-button shadow"
        style="anchor-name: --language"
      />
      <Icon @click="toggleMenu(true)" icon="gg:details-more" class="icon-button shadow" />
      <div v-show="isLanguageOpen" class="language-switcher">
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
  </header>
</template>

<style scoped>
.logo {
  opacity: v-bind(iconOpacity);
  width: calc((var(--h4) * 1.5 + 1.25rem) * v-bind(SafariScale));
  margin-block: -0.5rem;
  scale: calc(1 / v-bind(SafariScale));
}

.big-logo {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  filter: drop-shadow(0rem 0rem 0.1rem var(--white)) drop-shadow(0rem 0rem 0.1rem var(--color-text));
  translate: calc((v-bind(SafariScale) - 1) * -25%) calc((v-bind(SafariScale) - 1) * -25%);
}

.logo-text {
  transition: width 0.2s ease-in-out;
  font-size: var(--h4);
  font-weight: 700;
  width: 2rem;
  white-space: nowrap;
  overflow: hidden;
}

.logo-btn:hover {
  padding: 0.25rem 1.5rem 0.25rem 4rem;

  .logo-text {
    width: max-content; /* Fallback for unsupported browser */
    width: calc-size(max-content, size);
  }
}

.logo-btn {
  background-color: var(--white);
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
  cursor: pointer;
  pointer-events: all;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: var(--h4);
  overflow: hidden;
  transition: padding 0.2s ease-in-out;

  .logo {
    width: calc(var(--h4) * v-bind(SafariScale));
    translate: calc((v-bind(SafariScale) - 1)) calc((v-bind(SafariScale) - 1));
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
  left: 0;
  translate: -50% 0;
  position: absolute;
  background-color: var(--white);
  box-shadow: 0.1rem 0.1rem 0.2rem var(--color-text);
  z-index: 101;
  padding: 0.5rem;
  border-radius: 0.5rem;
  pointer-events: all;
}

.drawer {
  background-color: var(--color-background);
  position: absolute;
  padding: 2rem 0;
  width: 100vw;
  left: 0;
  top: -100vh;
  z-index: 101;
  transition: top 0.2s;
  padding: 0 1rem;
  pointer-events: all;
  box-shadow: 0px 2px 4px var(--indigo);
}

.mask {
  height: 100dvh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: all;
}

.icon-button {
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
  color: var(--white);
  cursor: pointer;
  pointer-events: all;
}

.shadow {
  filter: drop-shadow(0rem 0rem 0.1rem var(--color-text));
}

header {
  line-height: 1.5;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem 0 4rem;
  pointer-events: none;
}

@media only screen and (max-width: 1024px) {
  header {
    padding: 1rem;
  }
}
</style>
