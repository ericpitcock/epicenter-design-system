<template>
  <ep-button kind="naked" :icon="buttonIcon" title="Toggle theme" class="theme-toggle" @click.native="toggleTheme()" />
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import EpButton from './button/EpButton'

  export default {
    components: {
      EpButton
    },
    methods: {
      ...mapActions(['updateTheme']),
      toggleTheme() {
        let newTheme = this.getTheme == 'dark' ? 'light' : 'dark'
        this.updateTheme(newTheme)
      }
    },
    computed: {
      ...mapGetters(['getTheme']),
      buttonLabel() {
        return this.getTheme == 'dark' ? 'Light theme' : 'Dark theme'
      },
      buttonIcon() {
        return this.getTheme == 'dark' ? 'light-mode' : 'dark-mode'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .theme-toggle {
    position: fixed;
    top: 10px;
    left: 10px;
    cursor: pointer;
  }
</style>