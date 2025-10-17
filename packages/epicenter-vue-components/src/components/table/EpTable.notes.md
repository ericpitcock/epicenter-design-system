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

