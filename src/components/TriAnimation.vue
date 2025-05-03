<template>
  <div class="r-wrapper">
    <div class="rhombus r-straight r-1">
      Educational Neuroscience <br />
      教育神經科學
    </div>
    <div class="rhombus r-rotate r-2">
      AI <br />
      人工智慧
    </div>
    <div class="rhombus r-rotate r-3">Psychology <br />心理測評</div>
    <div class="text-center">Tomorrow’s Brain <br />明日腦</div>
  </div>
</template>

<style scoped>
.text-center {
  position: absolute;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -50%);
  text-align: center;

  animation: text-opacity ease;
  animation-timeline: scroll();
}

.r-wrapper * {
  font-weight: 700;
  /* font-size: var(--h4); */
  color: var(--text-dark-1);
}
.r-wrapper {
  margin: 50px;
  --height: 20rem;
  --translate: calc(var(--height) / 3);
  position: relative;
  height: var(--height);
  width: calc(var(--height) * 2 / sqrt(3));

  .rhombus {
    position: absolute;
    background-color: #4c91c1; /* color? */
    mix-blend-mode: multiply;
    text-align: center;

    animation-timeline: scroll();
  }

  .r-1 {
    position: absolute;
    height: var(--height);
    aspect-ratio: 1 / calc(sqrt(3));
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);

    padding: 22% 10% 45% 10%;
  }

  .r-2 {
    height: calc(var(--height) / 2);
    max-height: calc(var(--height) / 2);
    aspect-ratio: calc(sqrt(3));
    clip-path: polygon(calc(100% / 3) 0, 100% 0, calc(200% / 3) 100%, 0 100%);

    padding: 22% 35% 5% 10%;
  }

  .r-3 {
    height: calc(var(--height) / 2);
    aspect-ratio: calc(sqrt(3));
    clip-path: polygon(calc(100% / 3) 100%, 100% 100%, calc(200% / 3) 0, 0 0);

    padding: 22% 10% 5% 35%;
  }
}

@supports (animation-timeline: scroll()) {
  .r-1 {
    animation:
      r1 ease,
      opacity ease;

    left: 50%;
    transform: translateX(-50%);
  }

  .r-2 {
    animation:
      r2 ease,
      opacity ease;

    left: 0;
    bottom: 0;
  }

  .r-3 {
    animation:
      r3 ease,
      opacity ease;

    right: 0;
    bottom: 0;
  }
}

@keyframes r1 {
  0% {
    opacity: 0;
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
