<template>
  <div class="ep-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
  .ep-container {
    border-radius: 6px;
    background-color: var(--color-bg-container);
    border: 1px solid var(--color-border-container);
  }
</style>