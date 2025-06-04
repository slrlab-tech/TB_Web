<script setup lang="ts">
import ImageScroller from './ImageScroller.vue'

function openLink(href: string) {
  if (href) {
    window.open(href, '_blank')
  }
}
</script>

<script lang="ts">
export default {
  props: ['partners'],
}
</script>

<template>
  <div>
    <h1 class="center" style="margin-top: 4rem">{{ $t('Our Partners') }}</h1>
    <div v-if="partners?.length <= 5" class="wrapper partners-wrapper" id="partners">
      <div class="partner-wrapper" v-for="partner in partners" :key="partner.alt">
        <img
          :src="partner.image"
          :alt="partner.alt ?? 'logo'"
          class="partner-image"
          @click="openLink(partner.href)"
        />
      </div>
    </div>
    <ImageScroller
      v-else
      :items="
        partners?.length <= 10 ? partners : partners?.slice(0, Math.floor(partners.length / 2))
      "
      class="carousel"
    />
    <ImageScroller
      v-if="partners?.length >= 10"
      :items="partners.slice(Math.floor(partners.length / 2), partners.length)"
      class="carousel"
      reverse
    />
  </div>
</template>

<style scoped>
.partner-image:hover {
  filter: none;
}
.partner-image {
  min-width: 0;
  flex: 1;
  object-fit: contain;
  cursor: pointer;
  filter: grayscale(30%);
  height: min-content;

  -drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.partners-wrapper {
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
}

.carousel {
  max-height: 4rem;
}
</style>
