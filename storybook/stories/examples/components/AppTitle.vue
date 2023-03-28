<template>
  <h1 class="app-title">
    {{ title }}
  </h1>
</template>

<script>
  export default {
    name: 'AppTitle',
    props: {
      title: {
        type: String,
        default: 'App Title'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-title {
    background: var(--text-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>