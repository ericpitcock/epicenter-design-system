# EpTableSearchInput



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
No props available.

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <input
    v-model="modelValue"
    placeholder="Search..."
  >
</template>

<script setup>
  const modelValue = defineModel({
    type: String,
    required: true
  })
</script>

```