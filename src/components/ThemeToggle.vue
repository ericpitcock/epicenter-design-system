<template>
  <div class="theme-toggle" @click="toggleTheme()">Toggle theme</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions(['doTheme']),
      toggleTheme() {
        let newTheme = this.getTheme == 'dark' ? 'light' : 'dark'
        this.doTheme(newTheme)
      }
    },
    computed: {
      ...mapGetters(['getTheme'])
    }
  }
</script>

<style lang="scss" scoped>
  .theme-toggle {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
</style>