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
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2)
          this.$el.children[0].classList.add('is-inViewport')
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
    <div class="circle">
      <div @click="onClick" class="popup-button" id="btn">
        <h4 class="popup-content">
          <slot></slot>
        </h4>
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
  pointer-events: none;
}

.circle {
  position: sticky;
  bottom: 0;
  margin-bottom: 0;
  margin-top: 2rem;

  height: 0;
  width: 0;

  background-color: var(--highlight);
  outline: 0rem solid rgb(from var(--highlight) r g b / 50%);
  border-radius: 100%;

  .popup-button {
    pointer-events: all;

    --size: 3rem;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    padding-inline: 4rem;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;

    border-radius: var(--size);
    height: var(--size);
    width: var(--size);

    background-color: var(--highlight);
    color: var(--text-light-1);
    align-content: center;

    .popup-content {
      opacity: 0;
      white-space: nowrap;
    }
  }
}

.is-inViewport {
  --size: 3rem;
  animation: ring 0.8s ease-in-out 1;

  bottom: 4rem;
  margin-bottom: 4rem;
  height: var(--size);
  width: var(--size);

  transition: all 0.6s ease-in-out;

  .popup-button {
    opacity: 1;
    width: max-content; /* Fall back for unsupported browser */
    width: calc-size(max-content, size);

    transition:
      width 0.4s 0.7s ease-in-out,
      opacity 0.2s 0.7s ease-in-out;

    .popup-content {
      opacity: 1;

      transition: opacity 0.2s 1s ease-in-out;
    }
  }
}

.popup-button:hover {
  background-image: linear-gradient(rgb(0 0 0/10%) 0 0);
}

.popup-button:active {
  background-image: linear-gradient(rgb(0 0 0/30%) 0 0);
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
