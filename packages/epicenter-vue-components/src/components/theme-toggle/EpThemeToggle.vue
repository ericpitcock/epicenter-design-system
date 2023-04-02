<template>
  <ep-button
    variant="ghost"
    :icon-left="{ name: buttonIcon }"
    title="Toggle theme"
    class="theme-toggle"
    @click="toggleTheme"
  />
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import EpButton from '../button/EpButton'

  export default {
    components: {
      EpButton
    },
    computed: {
      ...mapState(['theme']),
      buttonIcon() {
        return this.theme == 'dark' ? 'light-mode' : 'dark-mode'
      }
    },
    methods: {
      ...mapActions(['toggleTheme'])
    }
  }
</script>
