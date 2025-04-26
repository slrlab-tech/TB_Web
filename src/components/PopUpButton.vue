<script lang="ts">
export default {
  props: ['onClick'],
  data() {
    return {
      observer: null as IntersectionObserver | null,
    }
  },
  created() {
    this.observer = new IntersectionObserver(this.onElementObserved, {
      root: this.$el,
      threshold: 1,
    })
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) this.$el.classList.add('is-inViewport')
        else this.$el.classList.remove('is-inViewport')
      })
    },
  },
  mounted() {
    if (!this.observer) return
    // const section = this.$el.closest('.button-section')
    this.observer?.observe(this.$el)
  },
}
</script>

<template>
  <div class="popup-wrapper">
    <div @click="onClick" class="popup-button" id="btn">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.popup-wrapper {
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.popup-button {
  border-radius: 2rem;
  height: 3rem;
  width: 3rem;
  padding: 0.5rem 1rem;
  background-color: var(--vt-c-highlight);
  transition: all 0.5s ease-in-out;
  color: var(--vt-c-text-dark-1);
  animation: ring 1s ease-in-out 1;
  display: flex;
  position: sticky;
  bottom: 2rem;

  margin-block: 2rem;
}

.is-inViewport {
}

@keyframes ring {
  0% {
    outline-width: 0rem;
  }
  50% {
    outline-width: 1rem;
  }
  100% {
    outline-width: 0rem;
  }
}
</style>
