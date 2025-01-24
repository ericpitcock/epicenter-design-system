# EpCheckboxFilter



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `options` | - | `array` | `-` |
| `appliedFilters` | - | `object` | `-` |
| `filterKey` | - | `string` | `-` |
| `columnKey` | - | `string` | `-` |

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
  <div>
    <div
      v-for="option in options"
      :key="option.value"
    >
      <input
        v-model="selectedOptions"
        type="checkbox"
        :value="option.value"
        @change="applyFilter"
      >
      <label>{{ option.label }}</label>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    options: {
      type: Array,
      required: true
    },
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

  // Initialize selected options
  const selectedOptions = ref([])

  // Method to apply filter and emit event
  const applyFilter = () => {
    // Emit event to update applied filters in parent component
    emit('update:appliedFilters', { [columnKey]: selectedOptions.value })
  }
</script>

```


## Styles

```scss
.ep-checkbox-filter {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &--horizontal {
    flex-direction: row;
    gap: 2rem;
  }
}
```