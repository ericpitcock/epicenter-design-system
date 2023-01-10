<template>
  <hr class="ep-divider" />
</template>

<script>
  export default {
    name: 'EpDivider',
    props: {
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
    background-color: var(--border-color--lighter);
    border: none;
    margin: v-bind(margin);
  }
</style>