import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import enPrivate from './i18n/en.json'
import cnPrivate from './i18n/zh-cn.json'
import hkPrivate from './i18n/zh-hk.json'

async function loadPublicTranslations(locale: string) {
  const response = await fetch(`/i18n/${locale}.json`)
  if (!response.ok) return {}
  return await response.json()
}

async function setupI18n() {
  const enPublic = await loadPublicTranslations('en')
  const cnPublic = await loadPublicTranslations('zh-cn')
  const hkPublic = await loadPublicTranslations('zh-hk')

  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: { ...enPrivate, ...enPublic },
      'zh-cn': { ...cnPrivate, ...cnPublic },
      'zh-hk': { ...hkPrivate, ...hkPublic },
    },
  })

  return i18n
}

const pinia = createPinia()
const app = createApp(App)

setupI18n().then((i18n) => {
  app.use(i18n)
  app.use(router)
  app.use(pinia)
  app.mount('#app')
})

// const pinia = createPinia()
// const app = createApp(App)

// app.use(i18n)
// app.use(router)
// app.use(pinia)

// app.mount('#app')
