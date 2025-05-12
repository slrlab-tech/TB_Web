import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import en from './i18n/en.json'
import cn from './i18n/zh-cn.json'
import hk from './i18n/zh-hk.json'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en,
    'zh-cn': cn,
    'zh-hk': hk,
  },
})

const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
