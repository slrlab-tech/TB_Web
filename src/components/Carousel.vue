<script lang="ts">
export default {
  props: {
    items: {
      type: Array,
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
  <div :class="'carousel-animation' + (reverse ? ' reverse' : '')">
    <div class="carousel" v-for="i in 2" data-test="carousel" :key="i">
      <div v-for="(item, index) in items" :key="index" class="carousel-item">
        <img :src="item.image" :alt="item.alt ?? 'logo'" class="carousel-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-item {
  flex: 1;
  height: auto;
  object-fit: cover;
  padding-right: 2rem;
}

.carousel-image {
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

.carousel-image:hover {
  filter: none;
}

.carousel {
  display: flex;
  width: 100vw;
}

.carousel-animation {
  display: flex;
  width: auto;

  animation-play-state: running;

  animation:
    move-first var(--carousel-time) linear infinite,
    move-second 0s linear infinite;
  -webkit-animation:
    move-first var(--carousel-time) linear infinite,
    move-second 0s linear infinite;
  -moz-animation:
    move-first var(--carousel-time) linear infinite,
    move-second 0s linear infinite;
  -o-animation:
    move-first var(--carousel-time) linear infinite,
    move-second 0s linear infinite;
  animation-fill-mode: forwards, none;
}

.reverse {
  animation:
    move-second var(--carousel-time) linear infinite,
    move-first 0s linear infinite;
  -webkit-animation:
    move-second var(--carousel-time) linear infinite,
    move-first 0s linear infinite;
  -moz-animation:
    move-second var(--carousel-time) linear infinite,
    move-first 0s linear infinite;
  -o-animation:
    move-second var(--carousel-time) linear infinite,
    move-first 0s linear infinite;
  animation-fill-mode: forwards, none;
}

.carousel-animation:hover {
  animation-play-state: paused;
}

@keyframes move-first {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
@keyframes move-second {
  0% {
    transform: translateX(25%);
  }
  100% {
    transform: translateX(-25%);
  }
}
</style>
