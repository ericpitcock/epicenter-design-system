<template>
  <div
    :class="[
      'ep-container',
      { 'ep-container--full-width': fullWidth },
      { 'ep-container--connected': connected }
    ]"
    :style="{ padding: padding, marginTop: gap }"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      connected: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: false
      },
      gap: {
        type: String,
        default: '0'
      },
      padding: {
        type: String,
        default: '30px'
      }
    }
  }
</script>

<style lang="scss">
  .ep-container {
    display: inline-block;
    border-radius: 6px;
    background-color: var(--component-background);
    border: 1px solid var(--border-color);
    &:first-child {
      margin-top: 0 !important;
    }
    &--connected {
      border-radius: 0;
      &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }
      &:last-child {
        border-bottom-right-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      & + & {
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
    &--full-width {
      // display: block;
      width: 100%;
    }
  }
</style>
