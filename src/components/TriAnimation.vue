<script setup lang="ts">
import { getBrowser } from '@/utils/utils'

const browser = getBrowser()
const isAnimated =
  browser !== 'Safari' && browser !== 'Firefox' && !/iPhone|iPad|iPod/i.test(navigator.userAgent)

const { height = '20rem' } = defineProps<{
  height?: string
}>()
</script>

<template>
  <div class="r-wrapper">
    <div :class="isAnimated ? 'animation animation-1' : 'animation animation-1 fixed-1'">
      <div class="rhombus text">
        Educational Neuroscience <br />
        教育神經科學
      </div>
    </div>
    <div :class="isAnimated ? 'animation animation-2' : 'animation animation-2 fixed-2'">
      <div class="rhombus text">
        AI <br />
        人工智慧
      </div>
    </div>
    <div :class="isAnimated ? 'animation animation-3' : 'animation animation-3 fixed-3'">
      <div class="rhombus text">Psychology <br />心理測評</div>
    </div>
    <div class="text-center text">Tomorrow’s Brain <br />明日腦</div>
  </div>
</template>

<style scoped>
.text {
  color: var(--text-dark-1);
  font-weight: 700;
  text-align: center;
}

.text-center {
  position: absolute;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);

  animation: text-opacity ease;
  animation-timeline: scroll();
}

.r-wrapper {
  margin: 50px;
  --height: v-bind(height);
  --translate: calc(var(--height) / 3);
  position: relative;
  height: var(--height);
  width: calc(var(--height) * 2 / sqrt(3));
  min-width: calc(var(--height) * 2 / sqrt(3));
  will-change: transform;

  .rhombus {
    background-color: #4c91c1; /* color? */
    height: 100%;
    width: 100%;
  }

  .animation {
    mix-blend-mode: multiply;
    position: absolute;

    animation-timeline: scroll();
    will-change: transform;
  }

  .animation-1 {
    height: var(--height);
    aspect-ratio: 1 / calc(sqrt(3));

    .rhombus {
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
      padding: 42% 10% 45% 10%;
    }
  }

  .animation-2 {
    height: calc(var(--height) / 2);
    aspect-ratio: calc(sqrt(3));

    .rhombus {
      clip-path: polygon(calc(100% / 3) 0, 100% 0, calc(200% / 3) 100%, 0 100%);
      padding: 28% 42% 5% 9%;
    }
  }

  .animation-3 {
    height: calc(var(--height) / 2);
    aspect-ratio: calc(sqrt(3));

    .rhombus {
      clip-path: polygon(calc(100% / 3) 100%, 100% 100%, calc(200% / 3) 0, 0 0);
      padding: 28% 9% 5% 42%;
    }
  }
}

.fixed-1 {
  left: 50%;
  transform: translateX(-50%);
}
.fixed-2 {
  left: 0;
  bottom: 0;
}
.fixed-3 {
  right: 0;
  bottom: 0;
}

@supports (animation-timeline: scroll()) {
  .animation-1 {
    animation:
      r1 ease,
      opacity ease;

    left: 50%;
    transform: translateX(-50%);
  }

  .animation-2 {
    animation:
      r2 ease,
      opacity ease;

    left: 0;
    bottom: 0;
  }

  .animation-3 {
    animation:
      r3 ease,
      opacity ease;

    right: 0;
    bottom: 0;
  }
}

@keyframes r1 {
  0% {
    transform: translateX(-50%) translateY(calc(-1 * var(--translate)));
  }
  25% {
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes r2 {
  0% {
    transform: translateX(calc(-1 * var(--translate) * sqrt(3) / 2))
      translateY(calc(var(--translate) / 2));
  }
  25% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes r3 {
  0% {
    transform: translateX(calc(var(--translate) * sqrt(3) / 2))
      translateY(calc(var(--translate) / 2));
  }
  25% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes opacity {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
}

@keyframes text-opacity {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
}
</style>
