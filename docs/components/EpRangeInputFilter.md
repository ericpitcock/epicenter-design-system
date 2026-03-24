# EpRangeInputFilter



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `appliedFilters` | - | `Record` | `-` |
| `columnKey` | - | `string` | `-` |
| `filterKey` | - | `string` | `-` |
| `max` | - | `number` | `-` |
| `min` | - | `number` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:appliedFilters` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import { ref } from 'vue'

  interface Props {
    appliedFilters: Record<string, unknown>
    columnKey: string
    filterKey: string
    max: number
    min: number
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    'update:appliedFilters': [value: Record<string, number>]
  }>()

  defineOptions({ name: 'EpRangeInputFilter' })

  // Initialize selected range
  const selectedRange = ref<number>(0)

  // Method to apply filter and emit event
  const applyFilter = (): void => {
    // Emit event to update applied filters in parent component
    emit('update:appliedFilters', { [props.columnKey]: selectedRange.value })
  }
</script>

<template>
  <div>
    <input
      v-model="selectedRange"
      type="range"
      :min="min"
      :max="max"
      @input="applyFilter"
    >
    <span>{{ selectedRange }}</span>
  </div>
</template>

```