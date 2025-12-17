<template>
  <ep-button
    title="Toggle theme"
    @click="toggleTheme"
  >
    <template #icon-left>
      <!-- @slot Icon to display for theme toggle (typically a sun or moon icon) -->
      <component :is="iconComponent" />
    </template>
  </ep-button>
</template>

<script setup>
  import Moon02 from '@ericpitcock/epicenter-icons/epicenter-icons/Moon02'
  import Sun02 from '@ericpitcock/epicenter-icons/epicenter-icons/Sun02'
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

  const iconComponent = computed(() => props.currentTheme === 'dark' ? Sun02 : Moon02)

  const emit = defineEmits(['toggle-theme'])

  const toggleTheme = () => {
    emit('toggle-theme')
  }
</script>
