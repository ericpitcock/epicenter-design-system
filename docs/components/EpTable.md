# EpTable



`EpTable` is built for data-rich apps, with all the features you need: sorting, filtering, pagination, search, column visibility, and more.

#### `stickyHeader` vs`fixedHeader`

Use `stickyHeader` when the table can rely on pure CSS `position: sticky` (no scrolling overflow ancestor breaking it).

If the table lives inside a scrollable container where sticky fails, use `fixedHeader` together with the `useFixedHeader` composable. This duplicates the header and positions it with `position: fixed`, keeping column widths in sync.

## Columns
Columns are defined in the `columns` prop. Each column can have the following properties:

```javascript
const columns = [
  {
    label: 'Name',
    key: 'name',
    sortable: true,
    filterable: true,
    formatter: (value) => value.toUpperCase(),
    sorter: (a, b) => a.localeCompare(b),
    class: 'text-left',
  },
  …
]
```

### `filterable`
If `filterable: true`, you’ll need to use `useColumnFilters` to manage column filtering functionality.

### `formatter`
`formatter` is a function that formats column values for display. For example, transforming "john doe" into "JOHN DOE" or 1234 into $1,234. This is useful when you want to sort by the raw value but display a formatted value.

```javascript
// john doe => JOHN DOE
formatter: (value) => value.toUpperCase()

// 1234 => $1,234
formatter: (value) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(value)
```
### `sorter`
The `sorter` function customizes how column values are compared during sorting. For example, if sorting by severity levels (‘critical’, ‘high’, ‘medium’, ‘low’), the default alphabetical order won’t work. Instead, a `sorter` function ensures they are sorted by their severity levels.

```javascript
sorter: (a, b) => {
  const sortMap = {
    Critical: 4,
    High: 3,
    Medium: 2,
    Low: 1
  }
  
  const aValue = sortMap[a.severity] || 0
  const bValue = sortMap[b.severity] || 0
  
  return aValue - bValue
}
```

The `sorter` function receives two values and should return a number: -1 for sorting the first value before the second, 1 for sorting it after, and 0 for treating them as equal. Note that sorter requires `sortable: true` and the integration of `useSorting` and `EpTableSortableHeader` in your table setup.

## Usage

```vue
<template>
  <ep-table
    :columns="visibleColumns"
    :data="paginatedData"
    :style="styles"
    v-bind="args"
    @row-click="onRowClick"
  >
    <template #thead="{ visibleColumns, cellWidths, showActionsMenu }">
      <ep-table-head
        :columns="visibleColumns"
        :cell-widths="cellWidths"
        :show-actions-menu="showActionsMenu"
      >
        <template #header="{ column, cellWidths }">
          <ep-table-sortable-header
            :column="column"
            :sort-column="sortColumn"
            :sort-order="sortOrder"
            @sort="onSortChange"
          />
        </template>
      </ep-table-head>
    </template>
    <template #cell-severity="{ row }">
      <ep-badge :label="row.severity" />
    </template>
    <template #actions-menu="{ row }">
      <ep-dropdown v-bind="actionMenuProps(row.id)" />
    </template>
    <template #thead-fixed="{ visibleColumns, cellWidths, showActionsMenu }">
      <ep-table-head
        :columns="visibleColumns"
        :cell-widths="cellWidths"
        :show-actions-menu="showActionsMenu"
      >
        <template #header="{ column, cellWidths }">
          <ep-table-sortable-header
            :column="column"
            :sort-column="sortColumn"
            :sort-order="sortOrder"
            @sort="onSortChange"
          />
        </template>
      </ep-table-head>
    </template>
  </ep-table>
  <ep-table-pagination
    :current-page="currentPage"
    :total-pages="totalPages"
    :show-pages="true"
    :results-per-page="pageSize"
    @page-change="onPageNavigate"
    @update:results-per-page="onPageSizeUpdate"
  />
</template>

<script setup>
  import { ref, computed } from 'vue'
  import {
    EpTable,
    EpTableHead,
    EpTableSearchInput,
    EpTablePagination,
    EpTableSortableHeader,
    EpTableCheckboxFilters,
  } from '@ericpitcock/epicenter-components-vue'
  import {
    useExclude,
    useColumnFilters,
    useDataFilters,
    useSorting,
    usePagination,
    useSearch,
  } from '@epicenter/vue-composables'

  const columns = ref([
    { key: 'name', label: 'Name', sortable: true },
    { key: 'age', label: 'Age', sortable: true },
    { key: 'severity', label: 'Severity' },
    { key: 'actions', label: 'Actions' }
  ])
  ```


    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `bordered` | - | `boolean` | `-` |
| `columns` | - | `Array` | `-` |
| `compact` | - | `boolean` | `-` |
| `data` | - | `Array` | `-` |
| `fixedHeader` | - | `boolean` | `-` |
| `hiddenColumns` | - | `Array` | `-` |
| `selectable` | - | `boolean` | `-` |
| `showActionsMenu` | - | `boolean` | `-` |
| `stickyHeader` | - | `boolean` | `-` |
| `striped` | - | `boolean` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `row-click` | - | - |
| `container-scroll` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `thead` | Table header slot. Use this to define your table headers with columns and sorting. |
| ``cell-${column.key}`` | Custom cell content for a specific column. The slot name is dynamically generated as `cell-${column.key}`. |
| `actions-menu` | Actions menu for each row. Receives the current row data. |
| `thead-fixed` | Fixed header slot for when using fixed header mode. Syncs with the main table header. |

## Component Code

```vue
<script setup lang="ts">
  import { computed, useTemplateRef } from 'vue'

  import type { TableColumn, TableRow } from '../../types'

  import EpTableCell from './EpTableCell.vue'

  interface EpTableProps {
    bordered?: boolean
    columns: TableColumn[]
    compact?: boolean
    data: TableRow[]
    fixedHeader?: boolean
    hiddenColumns?: string[]
    selectable?: boolean
    showActionsMenu?: boolean
    stickyHeader?: boolean
    striped?: boolean
  }

  const {
    columns,
    bordered = false,
    compact = false,
    fixedHeader = false,
    hiddenColumns = [],
    selectable = false,
    showActionsMenu = false,
    stickyHeader = false,
    striped = false,
  } = defineProps<EpTableProps>()

  const emit = defineEmits<{
    'row-click': [row: TableRow]
    'container-scroll': [scrollLeft: number]
  }>()

  const visibleColumns = computed(() => {
    return columns.filter(column => !hiddenColumns.includes(column.key))
  })

  const tableContainer = useTemplateRef<HTMLDivElement>('tableContainer')

  const classes = computed(() => {
    return {
      'ep-table--bordered': bordered,
      'ep-table--compact': compact,
      'ep-table--selectable': selectable,
      'ep-table--sticky': stickyHeader,
      'ep-table--striped': striped,
    }
  })

  const onRowClick = (row: TableRow): void => {
    if (!selectable) return
    emit('row-click', row)
  }

  const onScroll = (): void => {
    if (!fixedHeader || !tableContainer.value) return
    emit('container-scroll', tableContainer.value.scrollLeft)
  }
</script>

<template>
  <div
    ref="tableContainer"
    class="ep-table-container"
    @scroll="onScroll"
  >
    <table :class="['ep-table', classes]">
      <!-- @slot Table header slot. Use this to define your table headers with columns and sorting. -->
      <slot
        name="thead"
        v-bind="{ visibleColumns, showActionsMenu }"
      />
      <tbody ref="tableBody">
        <tr
          v-for="row in data"
          :key="(row.id as PropertyKey)"
          @click="onRowClick(row)"
        >
          <template
            v-for="column in visibleColumns"
            :key="`body-${column.key}`"
          >
            <td>
              <!-- @slot Custom cell content for a specific column. The slot name is dynamically generated as `cell-${column.key}`. -->
              <slot
                v-if="$slots[`cell-${column.key}`]"
                :name="`cell-${column.key}`"
                v-bind="{ row, column }"
              />
              <ep-table-cell
                v-else
                :row="row"
                :column="column"
              />
            </td>
          </template>
          <td
            v-if="showActionsMenu"
            class="ep-table__actions-menu"
          >
            <!-- @slot Actions menu for each row. Receives the current row data. -->
            <slot
              name="actions-menu"
              v-bind="{ row }"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <table
      v-show="fixedHeader"
      ref="tableFixed"
      class="ep-table ep-table--fixed-header"
    >
      <!-- @slot Fixed header slot for when using fixed header mode. Syncs with the main table header. -->
      <slot
        name="thead-fixed"
        v-bind="{ visibleColumns, showActionsMenu }"
      />
    </table>
  </div>
</template>

```

## Styles (SCSS)

```scss
@use '../mixins/mixins' as *;

.dark-theme {
  --ep-table-row-stripe-color: var(--interface-foreground);
  --ep-table-row-hover-bg-color: hsl(var(--gray-450));
}

.light-theme {
  --ep-table-row-stripe-color: var(--interface-foreground);
  --ep-table-row-hover-bg-color: hsl(var(--gray-10));
}

.ep-table-container {
  --ep-table-container-width: auto;
  --ep-table-container-height: auto;
  --ep-table-container-min-width: 0;
  --ep-table-container-overflow: auto;
  --ep-table-container-padding: 0;
  --ep-table-header-bg-color: var(--interface-surface);
  --ep-table-border-color: var(--border-color);
  --ep-table-width: auto;
  --ep-table-min-width: 0;
  --ep-table-sticky-top: 0;
  // --ep-table-fixed-top: 0;
  --ep-table-head-width: auto;
  --ep-table-body-width: auto;
  --ep-table-cell-vertical-align: middle;
  --ep-table-cell-white-space: normal;
  overflow: var(--ep-table-container-overflow);
  width: var(--ep-table-container-width);
  min-width: var(--ep-table-container-min-width);
  height: var(--ep-table-container-height);
  padding: var(--ep-table-container-padding);
}

.ep-table {
  width: var(--ep-table-width);
  min-width: var(--ep-table-min-width);

  thead {
    width: var(--ep-table-head-width);
    color: var(--text-color--loud);
    font-variation-settings: 'wght' 600;
    user-select: none;

    th {
      background: var(--ep-table-header-bg-color);
      text-align: left;

      &.ep-table__actions-menu {
        width: 5rem;
      }

      div {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 1.4rem;
        border-bottom: 1px solid var(--ep-table-border-color);

        span.label {
          flex: 1;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  tbody {
    width: var(--ep-table-body-width);

    tr {
      position: relative;

      &:first-child {
        border-top: 0;
      }

      td {
        min-width: 1px;
        padding: 1.4rem;
        vertical-align: var(--ep-table-cell-vertical-align);
        white-space: var(--ep-table-cell-white-space);

        &.ep-table__actions-menu {
          width: 5rem;
          padding: 0;
        }
      }
    }
  }

  &--bordered {
    tbody tr {
      border: 1px solid var(--ep-table-border-color);
      border-right: 0;
      border-left: 0;
    }
  }

  &--compact {

    thead tr th div,
    tbody tr td {
      padding: 0.8rem 1.2rem;
    }
  }

  &--layout-fixed {
    table-layout: fixed;
  }

  &--selectable {
    tbody {
      tr td {
        user-select: none;
      }

      @include hover {
        tr:not(.ep-table-row--selected):hover {
          cursor: pointer;

          td {
            background: var(--ep-table-row-hover-bg-color);
          }
        }
      }

      tr.ep-table-row--selected {
        td {
          background: var(--primary-color-base);
          color: var(--white);
        }
      }
    }
  }

  &--sticky {
    thead {
      th {
        position: sticky;
        z-index: var(--z-index--sticky);
        top: var(--ep-table-sticky-top);
      }
    }
  }

  &--fixed-header {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
  }

  &--striped {
    tbody tr:nth-child(even) {
      background-color: var(--ep-table-row-stripe-color);
    }
  }
}
```