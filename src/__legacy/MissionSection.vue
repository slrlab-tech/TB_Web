<script lang="ts">
export default {
  props: ['data'],
}
</script>

<template>
  <div class="wrapper columns">
    <div class="column left">
      <img :src="data.mission.banner" alt="Left Image" class="image" style="min-height: 100px" />
      <h1>Our Mission</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
        vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras
        venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
        vestibulum. Cras venenatis euismod malesuada. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
        malesuada.
      </p>
    </div>
    <div class="column right">
      <img :src="data.mission.image" alt="Right Image" class="image" style="min-height: 100%" />
    </div>
  </div>
</template>

<style scoped>
.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.column {
  width: 100%;
}

.image {
  width: 100%;
  background-color: grey;
  border-radius: 0.5rem;
  object-fit: cover;
}
</style>
