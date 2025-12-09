<template>
  <ep-button
    title="Toggle theme"
    @click="toggleTheme"
  >
    <template #icon-left>
      <!-- @slot Icon to display for theme toggle (typically a sun or moon icon) -->
      theme icon
    </template>
  </ep-button>
</template>

<script setup>
  import { computed } from 'vue'

  import EpButton from '../button/EpButton.vue'

  const props = defineProps({
    /**
     * The current theme of the application.
     * @values light, dark
     */
    currentTheme: {
      type: String,
      required: true
    }
  })

  const buttonIcon = computed(() => props.currentTheme === 'dark' ? 'light-mode' : 'dark-mode')

  const emit = defineEmits(['toggle-theme'])

  const toggleTheme = () => {
    emit('toggle-theme')
  }
</script>
