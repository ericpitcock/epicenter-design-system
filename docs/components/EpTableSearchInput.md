# EpTableSearchInput




::: info
This component does not use props, events, slots.
:::

## Component Code

```vue
<script setup lang="ts">
  const modelValue = defineModel<string>({ required: true })
</script>

<template>
  <input
    v-model="modelValue"
    placeholder="Search..."
  >
</template>

```