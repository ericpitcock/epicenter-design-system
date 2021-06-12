<template>
  <div :class="[
      'ep-container',
      { 'ep-container--full-width': fullWidth }
    ]"
  >
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
    background-color: var(--color-bg-container);
    border: 1px solid var(--color-border-container);
    &--full-width {
      display: block;
    }
  }
</style>