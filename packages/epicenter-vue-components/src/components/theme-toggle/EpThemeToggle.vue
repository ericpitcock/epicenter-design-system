<template>
  <ep-button
    variant="ghost"
    :icon-left="{ name: buttonIcon, color: iconColor }"
    title="Toggle theme"
    class="theme-toggle"
    @click="toggleTheme"
  />
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import EpButton from '../button/EpButton.vue'

  export default {
    name: 'EpThemeToggle',
    components: {
      EpButton
    },
    props: {
      iconColor: {
        type: String,
        default: 'currentColor'
      }
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
