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
  } from '@epicenter/vue-components'
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
| `columns` | The columns of the table. | `array` | `-` |
| `data` | The data of the table. | `array` | `-` |
| `hiddenColumns` | Columns to hide, but not filter from the data. An ID, for example, can be hidden, but still accessible to the app. | `array` | `[]` |
| `compact` | Compact rows in a single line table scenario. | `boolean` | `false` |
| `bordered` | Gives borders to your table rows. Helpful for tables with a lot of data. | `boolean` | `false` |
| `selectable` | Selectable rows | `boolean` | `false` |
| `striped` | Background colors for every other row. Helpful for tables with a lot of data. | `boolean` | `false` |
| `stickyHeader` | Sticky header or nah | `boolean` | `false` |
| `fixedHeader` | Whether to use a fixed header or not (requires useFixedHeader composable) | `boolean` | `false` |
| `showActionsMenu` | Enable actions menu | `boolean` | `false` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `row-click` | - | - |
| `container-scroll` | - | - |

## Slots
| Name | Description |
|------|-------------|
| `thead` | No description available. |
| ``cell-${column.key}`` | No description available. |
| `actions-menu` | No description available. |
| `thead-fixed` | No description available. |

## Component Code

```vue
<template>
  <div
    ref="tableContainer"
    class="ep-table-container"
    @scroll="onScroll"
  >
    <table :class="['ep-table', classes]">
      <slot
        name="thead"
        v-bind="{ visibleColumns, showActionsMenu }"
      />
      <tbody ref="tableBody">
        <tr
          v-for="row in data"
          :key="row.id"
          @click="onRowClick(row)"
        >
          <template
            v-for="column in visibleColumns"
            :key="`body-${column.key}`"
          >
            <td>
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
      <slot
        name="thead-fixed"
        v-bind="{ visibleColumns, showActionsMenu }"
      />
    </table>
  </div>
</template>

<script setup>
  import { computed, useTemplateRef } from 'vue'

  import EpTableCell from './EpTableCell.vue'

  defineOptions({
    name: 'EpTable'
  })

  const props = defineProps({
    /**
     * The columns of the table.
     */
    columns: {
      type: Array,
      required: true
    },
    /**
     * The data of the table.
     */
    data: {
      type: Array,
      required: true
    },
    /**
     * Columns to hide, but not filter from the data. An ID, for example, can be hidden, but still accessible to the app.
     */
    hiddenColumns: {
      type: Array,
      default: () => []
    },
    /**
     * Compact rows in a single line table scenario.
     */
    compact: {
      type: Boolean,
      default: false
    },
    /**
     * Gives borders to your table rows. Helpful for tables with a lot of data.
     */
    bordered: {
      type: Boolean,
      default: false
    },
    /**
     * Selectable rows
     */
    selectable: {
      type: Boolean,
      default: false
    },
    /**
     * Background colors for every other row. Helpful for tables with a lot of data.
     */
    striped: {
      type: Boolean,
      default: false
    },
    /**
     * Sticky header or nah
     */
    stickyHeader: {
      type: Boolean,
      default: false
    },
    /**
     * Whether to use a fixed header or not (requires useFixedHeader composable)
     */
    fixedHeader: {
      type: Boolean,
      default: false
    },
    /**
     * Enable actions menu
     */
    showActionsMenu: {
      type: Boolean,
      default: false
    },
  })

  const visibleColumns = computed(() => {
    return props.columns.filter(column => !props.hiddenColumns.includes(column.key))
  })

  const tableContainer = useTemplateRef('tableContainer')

  const classes = computed(() => {
    return {
      'ep-table--bordered': props.bordered,
      'ep-table--compact': props.compact,
      'ep-table--selectable': props.selectable,
      'ep-table--sticky': props.stickyHeader,
      'ep-table--striped': props.striped,
    }
  })

  const emit = defineEmits(['row-click', 'container-scroll'])

  const onRowClick = (row) => {
    if (!props.selectable) return
    emit('row-click', row)
  }

  const onScroll = () => {
    if (!props.fixedHeader) return
    emit('container-scroll', tableContainer.value.scrollLeft)
  }
</script>

```

## Styles (SCSS)

```scss
@use '../mixins/_mixins' as *;

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
  --ep-table-row-stripe-color: var(--interface-foreground);
  --ep-table-row-hover-bg-color: hsl(var(--gray-450));
  --ep-table-cell-vertical-align: middle;
  --ep-table-cell-white-space: normal;
  width: var(--ep-table-container-width);
  height: var(--ep-table-container-height);
  min-width: var(--ep-table-container-min-width);
  overflow: var(--ep-table-container-overflow);
  padding: var(--ep-table-container-padding);
}

.ep-table {
  width: var(--ep-table-width);
  min-width: var(--ep-table-min-width);

  thead {
    width: var(--ep-table-head-width);
    font-variation-settings: 'wght' 600;
    user-select: none;
    color: var(--text-color--loud);

    th {
      text-align: left;
      background: var(--ep-table-header-bg-color);

      &.ep-table__actions-menu {
        width: 5rem;
      }

      div {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 1.4rem;
        border-bottom: 1px solid var(--ep-table-border-color);

        span.label {
          white-space: nowrap;
          text-overflow: ellipsis;
          flex: 1;
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
        top: var(--ep-table-sticky-top);
        z-index: var(--z-index--sticky);
      }
    }
  }

  &--fixed-header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }

  &--striped {
    tbody tr:nth-child(even) {
      background-color: var(--ep-table-row-stripe-color);
    }
  }
}
```