<template>
  <div class="banner">
    <div class="wrapper">
      <h1 class="title">Latest Products</h1>

      <div class="content">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
          vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras
          venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
          vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada.
        </div>
        <div style="justify-content: end; display: flex">
          <RouterLink class="route-btn" to="/about">More(TODO)</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-color: var(--vt-c-brand-color);
}

.wrapper {
  display: flex;
  color: var(--vt-c-white);
  gap: 2rem;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 1rem;
}

.route-btn {
  background-color: var(--vt-c-white);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}
</style>
