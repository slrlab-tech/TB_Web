<script lang="ts">
export default {
  props: {
    items: {
      type: Array as () => { image: string; alt?: string }[],
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <div class="scroller-wrapper">
    <div :class="'scroller-animation' + (reverse ? ' reverse' : '')">
      <div class="scroller" v-for="i in 2" data-test="scroller" :key="i">
        <div v-for="(item, index) in items" :key="index" class="scroller-item">
          <img :src="item.image" :alt="item.alt ?? 'logo'" class="scroller-image" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroller-item {
  flex: 1;
  height: auto;
  object-fit: cover;
  padding-right: 2rem;
}

.scroller-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%);

  -drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.scroller-image:hover {
  filter: none;
}

.scroller {
  display: flex;
  width: 100vw;
  min-width: 100vw;
}

.scroller-wrapper {
  width: 100vw;
  overflow: hidden;
}

.scroller-animation {
  display: flex;
  animation-play-state: running;

  animation:
    move-first var(--scroller-time) linear infinite,
    move-second 0s linear infinite;
  -webkit-animation:
    move-first var(--scroller-time) linear infinite,
    move-second 0s linear infinite;
  -moz-animation:
    move-first var(--scroller-time) linear infinite,
    move-second 0s linear infinite;
  -o-animation:
    move-first var(--scroller-time) linear infinite,
    move-second 0s linear infinite;
  animation-fill-mode: forwards, none;
}

.reverse {
  animation:
    move-second var(--scroller-time) linear infinite,
    move-first 0s linear infinite;
  -webkit-animation:
    move-second var(--scroller-time) linear infinite,
    move-first 0s linear infinite;
  -moz-animation:
    move-second var(--scroller-time) linear infinite,
    move-first 0s linear infinite;
  -o-animation:
    move-second var(--scroller-time) linear infinite,
    move-first 0s linear infinite;
  animation-fill-mode: forwards, none;
}

.scroller-animation:hover {
  animation-play-state: paused;
}

@keyframes move-first {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes move-second {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
