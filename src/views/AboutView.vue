<script setup lang="ts">
import MembersScroll from '@/components/MembersScroll.vue'
// import OSS from 'ali-oss'
import { Buffer } from 'buffer'
</script>

<script lang="ts">
export default {
  props: ['data'],
  data() {
    return {
      // client: this.$ossClient as unknown as OSS,
    }
  },
  // methods: {
  //   async sendData() {
  //     try {
  //       // const result = await this.client.get('subscription.json')
  //       this.client.append(
  //         'subscription.json',
  //         Buffer.from("{ name: 'test', email: 'abc@mail.com' }", 'utf8'),
  //       )
  //       // const jsonString = Buffer.from(result.content).toString('utf8')
  //       // console.log(JSON.parse(jsonString))
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   },
  // },
}

// const client = this.$ossClient

// async function sendData() {
//   try {
//     const result = await client.get('subscription.json')
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }

// listObject()
// const sendData = () => {
//   const input = document.querySelector('input[type="text"]') as HTMLInputElement
//   const value = input.value
//   console.log(value)

//   fetch('https://tb-web.oss-cn-hongkong.aliyuncs.com/subscription.json', {
//     method: 'HEAD',
//     headers: {
//       // 'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//     },
//     // body: JSON.stringify({ value }),
//   })
//     .then((response) => {
//       if (!response.ok) throw new Error('Network response was not ok')
//       return response.json()
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.error('Error:', error))
// }
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
