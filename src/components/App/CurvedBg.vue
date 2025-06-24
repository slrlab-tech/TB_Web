<template>
  <div class="curve-wrapper">
    <div class="curve"></div>
  </div>
  <div class="container">
    <slot></slot>
  </div>

  <div class="curve-wrapper">
    <div class="curve"></div>
  </div>
</template>

<style scoped>
.curve-wrapper {
  width: 100vw;
  overflow: hidden;
}

.curve {
  background-color: var(--white);
  border-radius: 50%;
  height: 30vw;
  width: 120vw;
  min-width: 120vw;
  margin: 0vw -10vw;
  z-index: -1;
}

.container {
  margin-block: -20vw;
  padding-bottom: 5dvh;
  background:
    linear-gradient(var(--white) 0, var(--white) 51%, transparent 51%),
    linear-gradient(to top, var(--white) 0, var(--white) 51%, transparent 51%);
  position: relative;
  z-index: 1;
}
</style>
