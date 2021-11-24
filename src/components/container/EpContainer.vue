<template>
  <div
    :class="[
      'ep-container',
      { 'ep-container--flex-col': flexCol }
    ]"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'EpContainer',
    props: {
      display: {
        type: String,
        default: 'block'
      },
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
      backgroundColor: {
        type: String,
        default: 'var(--background-2)'
      },
      borderRadius: {
        type: String,
        default: 'var(--border-radius--large)'
      },
      borderWidth: {
        type: String,
        default: '0.1rem'
      },
      borderColor: {
        type: String,
        default: 'var(--border-color)'
      },
      flexDirection: {
        type: String,
        default: 'row'
      },
      flexWrap: {
        type: String,
        default: 'nowrap'
      },
      justifyContent: {
        type: String,
        default: 'flex-start'
      },
      alignItems: {
        type: String,
        default: 'flex-start'
      },
      alignContent: {
        type: String,
        default: 'flex-start'
      },
      gap: {
        type: String,
        default: '0'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-container {
    display: v-bind(display);
    flex-direction: v-bind(flexDirection);
    flex-wrap: v-bind(flexWrap);
    justify-content: v-bind(justifyContent);
    align-items: v-bind(alignItems);
    align-content: v-bind(alignContent);
    gap: v-bind(gap);
    width: v-bind(width);
    height: v-bind(height);
    padding: v-bind(padding);
    margin: v-bind(margin);
    border-radius: v-bind(borderRadius);
    background-color: v-bind(backgroundColor);
    border: v-bind(borderWidth) solid v-bind(borderColor);
  }
</style>
