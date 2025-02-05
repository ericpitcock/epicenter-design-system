# EpThemeToggle



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `currentTheme` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `toggle-theme` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <EpButton
    :icon-left="{ name: buttonIcon }"
    title="Toggle theme"
    @click="toggleTheme"
  />
</template>

<script setup>
  defineOptions({
    name: 'EpThemeToggle'
  })

  import EpButton from '../button/EpButton.vue'
  import { computed } from 'vue'

  const props = defineProps({
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

```