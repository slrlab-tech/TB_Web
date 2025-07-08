<script setup lang="ts">
import { Icon } from '@iconify/vue'
import OSS from 'ali-oss'
import PartnersForm from '@/components/AdminView/PartnersForm.vue'
import ProductsForm from '@/components/AdminView/ProductsForm.vue'
import MembersForm from '@/components/AdminView/MembersForm.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      currentTab: '',
      client: null as OSS | null,
      id: '' as string,
      secret: '' as string,
      loggedIn: false as boolean,
    }
  },
  methods: {
    goBack() {
      const answer = window.confirm(
        'Are you sure you want to leave this page? Any unsaved changes will be lost.',
      )
      if (answer) {
        this.currentTab = ''
      }
    },
    async login() {
      if (!this.id || !this.secret) {
        alert('Please enter AccessKey ID and Secret.')
        return
      }

      this.client = new OSS({
        region: 'oss-cn-hongkong',
        accessKeyId: this.id,
        accessKeySecret: this.secret,
        bucket: 'tb-website',
        secure: true,
      })

      try {
        // Test connection
        await this.client.get('empty.txt')
        // If login always fails, please check if there is a file named 'empty.txt' in OSS bucket.

        console.log('Login successful!')
        this.loggedIn = true
        this.id = ''
        this.secret = ''
      } catch (error) {
        console.error('Login failed:', error)
        alert('Login failed. Please check your AccessKey ID and Secret.')
      }
    },
  },
  beforeRouteLeave: function (to, from, next) {
    const answer = window.confirm(
      'Are you sure you want to leave this page? Any unsaved changes will be lost.',
    )
    if (answer) {
      next()
    } else {
      next(false)
    }
  },
}
</script>

<template>
  <!-- TODO: add delete -->
  <div class="wrapper" v-if="!loggedIn">
    <h2>{{ $t('Login') }}</h2>
    <div>
      <span>{{ $t('AccessKey ID') }}: </span>
      <input type="text" v-model="id" placeholder="Enter AccessKey ID for log in" />
    </div>
    <div>
      <span>{{ $t('AccessKey Secret') }}: </span>
      <input type="text" v-model="secret" placeholder="Enter AccessKey Secret for log in" />
    </div>
    <button @click="login" class="tab-btn">{{ $t('Log in') }}</button>
  </div>
  <div class="wrapper" v-if="loggedIn">
    <div class="tab-buttons" v-if="currentTab == ''">
      <button
        v-for="tab in ['partners', 'products', 'members']"
        :key="tab"
        @click="currentTab = tab"
        class="tab-btn"
      >
        {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
      </button>
    </div>
    <div class="btn-container" v-if="currentTab !== ''">
      <Icon class="icon-btn" icon="mingcute:back-2-fill" @click="goBack"></Icon>
    </div>
    <PartnersForm v-if="currentTab === 'partners'" :client="client" :loggedIn="loggedIn" />
    <ProductsForm v-if="currentTab === 'products'" :client="client" :loggedIn="loggedIn" />
    <MembersForm v-if="currentTab === 'members'" :client="client" :loggedIn="loggedIn" />
  </div>
</template>

<style>
.tab-btn {
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--brand-color);
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
}
.tab-btn:hover {
  filter: brightness(0.9);
}
.tab-btn:active {
  filter: brightness(0.7);
}

.btn-container {
  display: flex;
  width: 100%;
}
.icon-btn {
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  border-radius: 0.5rem;
}
.icon-btn:hover {
  background-color: lightgray;
}
.icon-btn:active {
  background-color: gray;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.item {
  display: flex;
  flex-direction: column;
  margin-block: 1rem;
}

.details {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.details div {
  flex: 1;
  display: flex;
  align-items: center;
}

.reverse {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
}

input[type='text'] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--brand-color);
  border-radius: 0.5rem;
  margin: 0.5rem;
}
span {
  text-wrap: nowrap;
}
</style>
