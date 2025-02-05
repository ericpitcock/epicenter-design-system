# EpTableRangeFilter



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `name` | - | `string` | `-` |
| `label` | - | `string` | `-` |
| `min` | - | `number` | `0` |
| `max` | - | `number` | `100` |
| `value` | - | `object` | `{
  start: 0,
  end: 100
}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `update:filters` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<!-- eslint-disable vue/html-self-closing -->
<template>
  <div class="ep-table-range-filter">
    <label :for="name">{{ label }}</label>
    <input
      :id="name"
      v-model="rangeStart"
      type="number"
      placeholder="Min"
      @input="onInput"
    />
    <input
      v-model="rangeEnd"
      type="number"
      placeholder="Max"
      @input="onInput"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Object,
      default: () => ({ start: 0, end: 100 })
    }
  })

  const emit = defineEmits(['update:filters'])

  const rangeStart = ref(props.value?.start || props.min || 0)
  const rangeEnd = ref(props.value?.end || props.max || 100)

  const onInput = () => {
    emit('update:filters', { category: props.name, range: { start: rangeStart.value, end: rangeEnd.value } })
  }
</script>

```