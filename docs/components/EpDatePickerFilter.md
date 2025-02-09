# EpDatePickerFilter



::: warning
This component is under development.
:::
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `appliedFilters` | - | `object` | `-` |
| `filterKey` | - | `string` | `-` |
| `columnKey` | - | `string` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<template>
  <div>
    <input
      v-model="selectedDate"
      type="date"
      @change="applyFilter"
    >
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    appliedFilters: {
      type: Object,
      required: true
    },
    filterKey: {
      type: String,
      required: true
    },
    columnKey: {
      type: String,
      required: true
    }
  })

  // Initialize selected date
  const selectedDate = ref('')

  // Method to apply filter and emit event
  const applyFilter = () => {
    // Emit event to update applied filters in parent component
    emit('update:appliedFilters', { [columnKey]: selectedDate.value })
  }
</script>

```