<template>
  <div
    :class="[
      'ep-container',
      { 'ep-container--flex-col': flexCol },
      { 'ep-container--connected': connected }
    ]"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpContainer',
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      },
      padding: {
        type: String,
        default: '0'
      },
      margin: {
        type: String,
        default: '0'
      },
      connected: {
        type: Boolean,
        default: false
      },
      flexCol: {
        type: Boolean,
        default: false
      },
      gap: {
        type: String,
        default: '0'
      }
    }
  }
</script>

<style lang="scss">
  .ep-container {
    width: v-bind(width);
    height: v-bind(height);
    padding: v-bind(padding);
    margin: v-bind(margin);
    display: inline-flex;
    border-radius: 6px;
    background-color: var(--background-2);
    border: 1px solid var(--border-color);
    // this kills the sticky header on the table
    // overflow: hidden;
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
    &--flex-col {
      flex-direction: column;
    }
  }
</style>
