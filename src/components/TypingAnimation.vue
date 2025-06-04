<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
</script>

<script lang="ts">
export default {
  props: ['typing'],
  data() {
    return {
      textBox: null as HTMLElement | null,
      field: null as HTMLElement | null,
      timeout: null as number | null,
      imgs: undefined as HTMLCollection | undefined,
    }
  },
  methods: {
    typeChar(text = '' as string, index = -1) {
      if (text.length === 0) {
        index += 1
        if (this.textBox) this.textBox.innerHTML = ''
        if (this.imgs) {
          for (let i = 0; i < this.imgs.length; i++) {
            ;(this.imgs[i] as HTMLElement).style.display = 'none'
          }
        }

        if (index >= this.typing.length) index = 0

        text = ' ' + this.typing[index].text + '.'
      }

      const char = text.charAt(0)
      text = text.slice(1)

      if (char === '.') {
        if (this.imgs) (this.imgs[index] as HTMLElement).style.display = 'block'

        this.timeout = window.setTimeout(() => {
          if (this.field)
            this.field.style.backgroundColor = 'rgb(from var(--text-light-1) r g b / 20%)'
          this.deleteChar(index)
        }, 1000)
      } else {
        if (this.imgs) (this.imgs[index] as HTMLElement).style.display = 'none'
        if (this.textBox) this.textBox.innerHTML += char

        this.timeout = window.setTimeout(() => {
          this.typeChar(text, index)
        }, 200)
      }
    },
    deleteChar(index: number) {
      this.timeout = window.setTimeout(() => {
        if (this.field) this.field.style.backgroundColor = ''
        this.typeChar('', index)
      }, 800)
    },
    clear() {
      if (this.timeout) clearTimeout(this.timeout)
    },
  },
  mounted() {
    this.textBox = document.getElementById('typing-text')
    this.imgs = document.getElementById('typing-icons')?.children
    this.field = document.getElementById('typing-field')

    this.typeChar()
  },
  exposed: ['clear'],
}
</script>

<template>
  <div class="typing-wrapper">
    <div id="typing-field">
      <div id="typing-text">test</div>
      <div id="typing-icons">
        <Icon
          v-for="word in typing"
          :icon="word.icon"
          :id="word.icon"
          class="icon"
          :key="word.icon"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  display: none;
  color: var(--text-light-1);
}

.typing-wrapper {
  background-color: rgb(from var(--text-light-1) r g b / 20%);
  width: 10rem;
  height: 4rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

#typing-field {
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  width: min-content;
}

#typing-field:after {
  content: '';
  display: inline-block;
  width: 0.15rem;
  height: 3rem;
  background-color: var(--text-light-1);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  60% {
    opacity: 1;
  }
  61%,
  100% {
    opacity: 0;
  }
}
</style>
