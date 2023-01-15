<template>
  <hr class="ep-divider" />
</template>

<script>
  export default {
    name: 'EpDivider',
    props: {
      color: {
        type: String,
        default: 'var(--border-color)'
      },
      margin: {
        type: String,
        default: '0'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-divider {
    display: block;
    height: 1px;
    background-color: v-bind(color);
    border: none;
    margin: v-bind(margin);
  }
</style>