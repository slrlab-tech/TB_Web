<script setup lang="ts">
import LogoAnimation from '@/components/HomeView/LogoAnimation.vue'
import LatestProduct from '../components/HomeView/FeaturedProduct.vue'
import PartnerList from '@/components/HomeView/PartnerList.vue'
import TriAnimation from '@/components/HomeView/TriAnimation.vue'

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
</script>

<template>
  <LogoAnimation class="logo-animation" :onEnd="onLogoEnd" :onStart="onLogoStart" />
  <main>
    <div class="wrapper" style="margin-bottom: 4rem">
      <h1 class="heading">{{ $t('Our Mission') }}</h1>
      <div class="mission-wrapper">
        <TriAnimation />
        <div class="mission">
          <h4 style="line-height: normal; width: 100%; font-weight: normal">
            {{ $t('mission-01') }}
            <span style="font-weight: bold; color: var(--highlight-2)">{{ $t('mission-02') }}</span>
            {{ $t('mission-03') }}
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
            <p class="dot">
              {{ $t('mission-' + (index + 1)) }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <LatestProduct :product="products.find((product) => product.featured == true)" />
    <PartnerList :partners="partners" />
  </main>
</template>

<style scoped>
.dot:before {
  margin-bottom: auto;
  margin-top: 0.3rem;
  margin-inline: 1rem;
  background-color: var(--highlight-2);
}
.mission-wrapper {
  display: flex;
  align-items: flex-end;
}

.mission {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 50px;
}

@media only screen and (max-width: 768px) {
  .mission-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .mission {
    margin: 0;
    align-items: center;
  }
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
  width: 100%;
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
