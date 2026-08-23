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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-table thead th div.ep-table-sortable-header` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-table thead th div.ep-table-sortable-header {
  --ep-table-sortable-header-active-text-color: /* … */;
}
```

### Text

| Property | Default | State |
|---|---|---|
| `--ep-table-sortable-header-active-text-color` | `var(--primary-color-200)` | active |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-table-sortable-header-padding-inline-end` | `3rem` | — |

## Component Code

```vue
<script setup lang="ts">
  import ArrowDown01 from '@ericpitcock/epicenter-icons-vue/ArrowDown01'
  import ArrowUp01 from '@ericpitcock/epicenter-icons-vue/ArrowUp01'
  import { computed } from 'vue'

  import type { TableColumn, SortOrder } from '../../types'

  interface Props {
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
  } = defineProps<Props>()

  const emit = defineEmits<{
    sort: [key: string]
  }>()

  defineOptions({ name: 'EpTableSortableHeader' })

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
// The sortable header only ever renders inside a table head cell, so its root
// selector is a descendant rather than a bare class.
// @root .ep-table thead th div.ep-table-sortable-header
.ep-table thead th div.ep-table-sortable-header {
  --ep-table-sortable-header-active-text-color: var(--primary-color-200);
  --ep-table-sortable-header-padding-inline-end: 3rem;
  justify-content: space-between;
  cursor: pointer;
  padding-inline-end: var(--ep-table-sortable-header-padding-inline-end);
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