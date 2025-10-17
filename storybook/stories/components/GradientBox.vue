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
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    text-align: center;
    border-radius: 8px;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
</style>