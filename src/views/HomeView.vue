<script setup lang="ts">
import LogoAnimation from '@/components/LogoAnimation.vue'
import LatestProduct from '../components/LatestProduct.vue'
// import MissionSection from '../components/MissionSection.vue'
import PartnerList from '@/components/PartnerList.vue'
import TriAnimation from '@/components/TriAnimation.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
  beforeRouteLeave(to, from, next) {
    const threeScene = document.getElementById('model')
    if (threeScene) {
      threeScene.remove() // To avoid lag
    }

    next()
  },
}
</script>

<template>
  <LogoAnimation class="logo-animation" />
  <main>
    <div class="wrapper">
      <p>Our Mission</p>
      <p class="display-1">
        Lead the Growth. <span style="color: var(--highlight)">Lit</span> the Future.
      </p>
      <TriAnimation />
      <p style="text-align: center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        labo
      </p>
    </div>
    <!-- <MissionSection :data="data[($route.meta.path as string) ?? 'home']" /> -->
    <LatestProduct />
    <PartnerList :partners="data.partners" />
  </main>
</template>

<style scoped>
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
