<script setup lang="ts">
import MembersScroll from '@/components/MembersScroll.vue'
</script>

<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="wrapper">
    <h1 style="width: 100%">{{ $t('About TB') }}</h1>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; width: 100%">
      <div style="background-image: url('https://picsum.photos/500/500')"></div>
      <div style="width: 100%">
        {{ $t('about-1') }}
        <br />
        <br />
        {{ $t('about-2') }}
      </div>
    </div>
    <MembersScroll :members="data.members" :title="$t('Our Members')" />
  </div>
</template>
