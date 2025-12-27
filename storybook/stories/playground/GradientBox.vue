<template>
  <div
    class="gradient-box"
    :style="{ background: gradient }"
  >
    <slot></slot>
  </div>
</template>

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