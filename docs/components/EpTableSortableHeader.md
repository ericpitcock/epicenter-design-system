# EpTableSortableHeader



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `column` | - | `object` | `-` |
| `cellWidths` | - | `array` | `[]` |
| `columnIndex` | - | `number` | `null` |
| `sortColumn` | - | `string` | `-` |
| `sortOrder` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `sort` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<template>
  <th
    :style="cellWidths[columnIndex]"
    @click="emit('sort', column.key)"
  >
    <div :class="headerClass">
      {{ column.label }}
      <ep-icon
        v-if="isSorted"
        v-bind="iconProps"
      />
    </div>
  </th>
</template>

<script setup>
  import EpIcon from '../icon/EpIcon.vue'
  import { computed } from 'vue'

  defineOptions({
    name: 'EpTableSortableHeader'
  })

  const props = defineProps({
    column: {
      type: Object,
      required: true
    },
    cellWidths: {
      type: Array,
      default: () => []
    },
    columnIndex: {
      type: Number,
      default: null
    },
    sortColumn: {
      type: String,
      required: true
    },
    sortOrder: {
      type: String,
      required: true
    }
  })

  const emit = defineEmits(['sort'])

  const iconProps = computed(() => {
    return {
      name: props.sortOrder === 'asc' ? 'arrow-up' : 'arrow-down',
    }
  })

  const headerClass = computed(() => {
    return [
      'ep-table-sortable-header',
      { 'ep-table-sortable-header--active': props.sortColumn === props.column.key }
    ]
  })

  const isSorted = computed(() => {
    return props.column.sortable && props.sortColumn === props.column.key
  })
</script>
```

## Styles (SCSS)

```scss
.ep-table thead th div.ep-table-sortable-header {
  --ep-table-sortable-header-active-text-color: var(--primary-color-200);
  justify-content: space-between;
  padding-right: 3rem;
  white-space: nowrap;
  cursor: pointer;

  &--active {
    color: var(--ep-table-sortable-header-active-text-color);
  }

  .ep-icon {
    --ep-icon-height: 1.7rem;
    --ep-icon-stroke-width: 2;
    position: absolute;
    right: 0;
  }
}
```