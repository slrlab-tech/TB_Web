<script setup lang="ts">
import MembersScroll from '@/components/MembersScroll.vue'
// import { Buffer } from 'buffer'
</script>

<script lang="ts">
export default {
  props: ['data'],
  data() {
    return {
      client: this.$ossClient,
    }
  },
  methods: {
    async sendData() {
      try {
        // TODO: how to get pos?
        const sub = await this.client.head('subscription.json')
        console.log(sub)
        //   this.client.append(
        //     'subscription.json',
        //     Buffer.from("{ name: 'test', email: 'abc@mail.com' }", 'utf8'),
        //   )
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <input
      type="text"
      placeholder="Search"
      style="
        width: 100%;
        height: 3rem;
        border-radius: 1.5rem;
        padding-left: 1rem;
        border: none;
        background-color: #f0f0f0;
      "
    />
    <button
      style="
        width: 100%;
        height: 3rem;
        border-radius: 1.5rem;
        padding-left: 1rem;
        border: none;
        background-color: #f0f0f0;
      "
      @click="sendData"
    >
      {{ $t('Submit') }}
    </button>
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
        <br />
        <br />
        {{ $t('about-3') }}
        <br />
        <br />
        {{ $t('about-4') }}
      </div>
    </div>
    <MembersScroll :members="data.members" :title="$t('Our Members')" />
  </div>
</template>
