<script setup lang="ts">
import LogoAnimation from '@/components/LogoAnimation.vue'
import LatestProduct from '../components/LatestProduct.vue'
import PartnerList from '@/components/PartnerList.vue'
import TriAnimation from '@/components/TriAnimation.vue'
import { Icon } from '@iconify/vue/dist/iconify.js'

import { useDataStore } from '@/stores/data.ts'
const { partners, products } = useDataStore()
</script>

<script lang="ts">
export default {
  props: ['onLogoEnd', 'onLogoStart'],
  beforeRouteLeave(to, from, next) {
    const threeScene = document.getElementById('model')
    if (threeScene) threeScene.remove() // To avoid lag
    next()
  },
}
const latestProductId = '1'
</script>

<template>
  <LogoAnimation class="logo-animation" :onEnd="onLogoEnd" :onStart="onLogoStart" />
  <main>
    <div class="wrapper" style="margin-bottom: 4rem">
      <h1>{{ $t('Our Mission') }}</h1>
      <div style="display: flex; align-items: flex-end">
        <TriAnimation height="20rem" />
        <div class="mission">
          <h4 style="line-height: normal">
            {{ $t('mission') }}
          </h4>
          <div
            v-for="(icon, index) in [
              'material-symbols:psychology',
              'ic:round-task',
              'carbon:ai-business-impact-assessment',
            ]"
            class="mission-item"
            :key="index"
          >
            <div class="mission-icon center">
              <Icon :icon="icon" style="font-size: 1.5rem" />
            </div>
            <p>
              {{ $t('mission-' + (index + 1)) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <LatestProduct :product="products.find((product) => product.id == latestProductId)" />
    <PartnerList :partners="partners" />
  </main>
</template>

<style scoped>
.mission {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 50px;
}

.mission-icon {
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  color: var(--white);
  background-color: var(--brand-color);
  border-radius: 0.5rem;
  margin-top: 4px;
}

.mission-item {
  display: flex;
  gap: 2rem;
}

.logo-animation {
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

main {
  gap: 1rem;
}
</style>
