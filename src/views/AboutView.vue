<script setup lang="ts">
import MembersScroll from '@/components/MembersScroll.vue'
import { useDataStore } from '@/stores/data.ts'
import SubscribeForm from '@/components/SubscribeForm.vue'

const { members } = useDataStore()
</script>

<script lang="ts">
export default {
  data() {
    return {
      client: this.$ossClient,
    }
  },
}
</script>

<template>
  <div class="wrapper">
    <SubscribeForm />
    <h1 style="width: 100%">{{ $t('About TB') }}</h1>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; width: 100%">
      <div
        style="background-image: url('https://picsum.photos/500/500'); background-size: cover"
      ></div>
      <div style="width: 100%">
        {{ $t('about-1') }}
        <br />
        <br />
        {{ $t('about-2') }}
      </div>
      <div style="width: 100%">
        {{ $t('about-3') }}
        <br />
        <br />
        {{ $t('about-4') }}
      </div>
      <div
        style="background-image: url('https://picsum.photos/500/500'); background-size: cover"
      ></div>
    </div>
    <MembersScroll :members="members" :title="$t('Our Members')" />
  </div>
</template>
