<script>
  export default {
    props: {
      gradient: {
        type: String,
        required: true,
      },
    },
  }
</script>

<template>
  <div
    class="gradient-box"
    :style="{ background: gradient }"
  >
    <slot />
  </div>
</template>

<style scoped>
  .gradient-box {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    text-align: center;
  }
</style>