`EpButton` is a button. It’s very exciting. It’s used in many places throughout Epicenter Design System. Okay, just a couple places. But it could be used in many places.

<script setup>
  import EpButton from '@/components/button/EpButton.vue'
</script>

<ep-button label="Click me" />

## Usage
```vue
<template>
  <ep-button v-bind="buttonProps" />
</template>

<script setup>
  import { EpButton } from '@epicenter/vue-components'

  const buttonProps = {
    label: 'Click me',
  }
</script>

<style lang="scss" scoped>
  .ep-button {
    // Your styles here
  }
</style>
```