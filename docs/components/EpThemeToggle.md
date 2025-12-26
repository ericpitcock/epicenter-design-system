# EpThemeToggle




::: info
This component does not use props, events, slots.
:::

## Component Code

```vue
<script setup>
  import Moon02 from '@ericpitcock/epicenter-icons/epicenter-icons/Moon02'
  import Sun02 from '@ericpitcock/epicenter-icons/epicenter-icons/Sun02'
  import { computed } from 'vue'

  import useTheme from '../../composables/useTheme.js'
  import EpButton from '../button/EpButton.vue'

  const { theme, toggleTheme } = useTheme()

  const iconComponent = computed(() => theme.value === 'dark' ? Sun02 : Moon02)
</script>

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

```