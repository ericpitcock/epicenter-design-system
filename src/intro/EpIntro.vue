<template>
  <div class="intro">
    <div class="logo-container">
      <e />
    </div>
    <div class="copy-block">
      <h1>E Design System</h1>
      <p>A design system built by <a href="https://www.ericpitcock.com">Eric Pitcock</a> utilizing the <a href="https://bradfrost.com/blog/post/atomic-web-design">Atomic Design</a> methodology.</p>
      <p>All components are built from scratch in Vue 3. Check out the code on <a href="https://github.com/ericpitcock/ep-design-system">GitHub</a>.</p>
    </div>
  </div>
</template>

<script>
  import E from './E'

  export default {
    name: 'Intro',
    components: {
      E
    }
  }
</script>

<style lang="scss" scoped>
  .intro {
    padding: 8rem 10rem;
    .logo-container {
      width: 10rem;
    }
  }
</style>