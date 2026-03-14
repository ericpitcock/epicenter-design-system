# EpTableSortableHeader



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `cellWidths` | - | `Array` | `-` |
| `column` | - | `TableColumn` | `-` |
| `columnIndex` | - | `union` | `-` |
| `sortColumn` | - | `string` | `-` |
| `sortOrder` | - | `SortOrder` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `sort` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
<script setup lang="ts">
  import ArrowDown01 from '@ericpitcock/epicenter-icons-vue/ArrowDown01'
  import ArrowUp01 from '@ericpitcock/epicenter-icons-vue/ArrowUp01'
  import { computed } from 'vue'

  import type { TableColumn, SortOrder } from '../../types'

  interface EpTableSortableHeaderProps {
    cellWidths?: Record<string, string>[]
    column: TableColumn
    columnIndex?: number | null
    sortColumn: string
    sortOrder: SortOrder
  }

  const {
    sortColumn,
    column,
    cellWidths = [],
    columnIndex = null,
  } = defineProps<EpTableSortableHeaderProps>()

  const emit = defineEmits<{
    sort: [key: string]
  }>()

  const headerClass = computed(() => {
    return [
      'ep-table-sortable-header',
      { 'ep-table-sortable-header--active': sortColumn === column.key }
    ]
  })

  const isSorted = computed(() => {
    return column.sortable && sortColumn === column.key
  })
</script>

<template>
  <th
    :style="columnIndex != null ? cellWidths[columnIndex] : undefined"
    @click="emit('sort', column.key)"
  >
    <div :class="headerClass">
      {{ column.label }}
      <ArrowUp01 v-if="isSorted && sortOrder === 'asc'" />
      <ArrowDown01 v-if="isSorted && sortOrder === 'desc'" />
    </div>
  </th>
</template>
```

## Styles (SCSS)

```scss
.ep-table thead th div.ep-table-sortable-header {
  --ep-table-sortable-header-active-text-color: var(--primary-color-200);
  justify-content: space-between;
  padding-right: 3rem;
  cursor: pointer;
  white-space: nowrap;

  &--active {
    color: var(--ep-table-sortable-header-active-text-color);
  }

  .ep-icon {
    --ep-icon-height: 1.5rem;
    --ep-icon-stroke-width: 2;
    position: absolute;
    right: 0;
  }
}
```