# EpThemeToggle



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `currentTheme` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `toggle-theme` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<template>
  <ep-button
    title="Toggle theme"
    @click="toggleTheme"
  >
    <template #icon-left>
      <ep-icon :name="buttonIcon" />
    </template>
  </ep-button>
</template>

<script setup>
  import { computed } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpIcon from '../icon/EpIcon.vue'

  defineOptions({
    name: 'EpThemeToggle'
  })

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