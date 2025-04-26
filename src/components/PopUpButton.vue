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
      threshold: [0, 0.2],
    })
  },
  methods: {
    onElementObserved(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) this.$el.children[0].classList.add('is-inViewport')
        else if (entry.intersectionRatio <= 0)
          this.$el.children[0].classList.remove('is-inViewport')
      })
    },
  },
  mounted() {
    if (!this.observer) return
    const section = this.$el.closest('.button-section')
    this.observer?.observe(section)
  },
}
</script>

<template>
  <div class="popup-wrapper">
    <div @click="onClick" class="popup-button" id="btn">
      <div class="popup-content">
        test test test test test
        <!-- <slot></slot> -->
      </div>
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
  --height: 0rem;
  border-radius: var(--height);
  height: var(--height);
  width: var(--height);
  max-width: 5rem;
  padding: 0;
  background-color: var(--vt-c-highlight);
  color: var(--vt-c-text-dark-1);
  outline: 0rem solid rgb(from var(--vt-c-highlight) r g b / 50%);
  font-size: 2rem;

  display: flex;
  position: sticky;
  bottom: -1rem;
  margin-bottom: -1rem;
  margin-top: 2rem;

  .popup-content {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-items: center;
    color: var(--vt-c-brand-color);
  }
}

.is-inViewport {
  --height: 5rem;

  animation: ring 0.8s ease-in-out 1;
  bottom: 7.5rem;
  margin-bottom: 7.5rem;
  padding: 0.5rem 5rem;

  border-radius: var(--height);
  height: var(--height);
  width: auto;

  max-width: 100%;

  transition:
    all 0.5s ease-in-out,
    max-width 0.7s 0.5s ease-in-out,
    padding 0.5s 0.5s ease-in-out,
    bottom 0.5s 0.2s ease-in-out;

  .popup-content {
    opacity: 1;
    transition: opacity 0.3s 1s ease-in-out;
  }
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
