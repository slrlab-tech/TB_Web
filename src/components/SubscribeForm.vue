<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const nameError = ref(false)
const emailError = ref('')
const loading = ref(false)
const btnText = ref('Subscribe')

const sendData = async () => {
  nameError.value = false
  emailError.value = ''

  if (!name.value) {
    nameError.value = true
  }

  if (!email.value) {
    emailError.value = 'Email is required'
  } else if (
    !String(email.value)
      .toLowerCase()
      .match(/.+@.+\..+/g)
  ) {
    emailError.value = 'Invalid email format'
  }

  if (nameError.value || emailError.value !== '') return

  try {
    loading.value = true
    const response = await fetch('http://subscribe.tomorrowsbrain.com', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'test3',
        email: 'test3@email.com',
      }),
    })

    loading.value = false
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    btnText.value = 'Success!'
    name.value = ''
    email.value = ''
    console.log('Data sent successfully')
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="form-wrapper">
    <div style="width: 100%">
      <div class="row">
        {{ $t('Name') }}:
        <input
          type="text"
          v-model="name"
          placeholder="Enter your name"
          class="input"
          :style="{ border: nameError ? '1px solid var(--error)' : 'none' }"
        />
      </div>
      <div :style="{ opacity: nameError ? 1 : 0 }" class="error-text">
        <Icon icon="mingcute:alert-fill" />{{ $t('Name is required') }}
      </div>
    </div>

    <div style="width: 100%">
      <div class="row">
        {{ $t('Email') }}:
        <input
          type="text"
          v-model="email"
          placeholder="Enter your email"
          class="input"
          :style="{ border: emailError ? '1px solid var(--error)' : 'none' }"
        />
      </div>
      <div :style="{ opacity: emailError ? 1 : 0 }" class="error-text">
        <Icon icon="mingcute:alert-fill" />{{ $t(emailError) }}
      </div>
    </div>

    <button class="subscribe-button" @click="sendData">
      {{ $t(btnText) }}
    </button>

    <div class="loading-overlay" v-if="loading">
      <Icon icon="mingcute:loading-3-fill" class="loading-icon" />
    </div>
  </div>
</template>

<style scoped>
.loading-icon {
  width: 3rem;
  height: 3rem;
  color: var(--highlight-1);
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
  padding: 2rem;
}
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.input {
  width: 100%;
  height: 2rem;
  border-radius: 1.5rem;
  padding-left: 1rem;
  border: none;
  background-color: var(--white-soft);
}
.row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.subscribe-button {
  width: min-content;
  height: 3rem;
  border-radius: 1.5rem;
  padding-inline: 2rem;
  border: none;
  background-color: var(--highlight-1);
  color: var(--white);
  font-size: var(--h4);
  margin-top: 1rem;
}
.subscribe-button:hover {
  filter: brightness(1.1);
  cursor: pointer;
}
.subscribe-button:active {
  filter: brightness(0.9);
}
.error-text {
  color: var(--error);
  font-size: var(--option);
  display: flex;
  align-items: center;
  justify-content: end;
}
</style>
