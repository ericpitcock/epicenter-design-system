<template>
  <div :class="['ep-container', { 'ep-container--full-width': fullWidth }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      fullWidth: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  .ep-container {
    display: inline-block;
    border-radius: 6px;
    background-color: var(--background-level-2);
    border: 1px solid var(--border-color);
    &--full-width {
      display: block;
    }
  }
</style>
