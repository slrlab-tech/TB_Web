<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import { onMounted } from 'vue'
</script>

<script lang="ts">
export default {
  props: ['typing'],
  expose: ['clear'],
  data() {
    return {
      text: null as HTMLElement | null,
      field: null as HTMLElement | null,
      timeout: null as number | null,
      imgs: [] as HTMLElement[],
    }
  },
  methods: {
    typeChar(text = '', index = -1) {
      if (text.length === 0) {
        index += 1
        this.text.innerHTML = ''

        for (let i = 0; i < this.imgs.length; i++) {
          this.imgs[i].style.display = 'none'
        }

        if (index >= this.typing.length) index = 0

        text = [' ', ...this.typing[index].text, '.']
      }

      const char = text.shift(1)

      if (char === '.') {
        this.imgs[index].style.display = 'block'

        this.timeout = setTimeout(() => {
          this.field.style.backgroundColor = 'rgb(from var(--vt-c-text-light-1) r g b / 20%)'
          this.deleteChar(index)
        }, 1000)
      } else {
        this.imgs[index].style.display = 'none'
        this.text.innerHTML += char

        this.timeout = setTimeout(() => {
          this.typeChar(text, index)
        }, 200)
      }
    },
    deleteChar(index) {
      this.timeout = setTimeout(() => {
        this.field.style.backgroundColor = ''
        this.typeChar('', index)
      }, 800)
    },
    clear() {
      clearTimeout(this.timeout)
    },
  },
  mounted() {
    this.text = document.getElementById('typing-text')
    this.imgs = document.getElementById('typing-icons').children
    this.field = document.getElementById('typing-field')

    this.typeChar()
  },
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
          style="color: black"
          class="icon"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon {
  display: none;
  color: var(--vt-c-text-light-1);
}

.typing-wrapper {
  background-color: rgb(from var(--vt-c-text-light-1) r g b / 20%);
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
  background-color: var(--vt-c-text-light-1);
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
