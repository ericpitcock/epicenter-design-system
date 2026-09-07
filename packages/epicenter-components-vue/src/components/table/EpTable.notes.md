`EpTable` is built for data-rich apps, with all the features you need: sorting, filtering, pagination, search, column visibility, and more.

#### `stickyHeader` vs `fixedHeader`

Use `stickyHeader` when the table can rely on pure CSS `position: sticky`.

Reach for `fixedHeader` when it cannot. The usual case is a table that scrolls horizontally inside its container while the *page* scrolls vertically: giving the container inline overflow makes it a scrollport on both axes, so a sticky header inside it has nothing left to stick to. `fixedHeader` duplicates the header, pins the copy to the viewport, and keeps its columns locked to the body.

Pair it with the `useFixedHeader` composable, which needs no arguments — it watches the real header to decide when to pin, and binds the copy to the container's own scroll:

```js
const { fixedHeader, cellWidths, tableComponent, tableHead } = useFixedHeader()
```

The copy's horizontal offset is a CSS scroll-driven animation whose timeline is the container's scroll, so the browser interpolates it on the compositor and it cannot fall behind the body. Column widths are measured by a `ResizeObserver`, and nothing runs on scroll at all. Where `animation-timeline` is unsupported the composable falls back to a `requestAnimationFrame`-coalesced transform.

##### What a consumer has to provide

`fixedHeader` has real requirements, and all but the last fail *silently*.

**1. `.ep-table-container` must be the element that scrolls sideways.** This is the one that bites. The pinned copy is bound to that container's scroll, so if something else scrolls instead there is nothing for it to follow and the copy sits still while the body moves.

The container needs a **definite** inline size. `width: 100%` is not enough on its own — a percentage only resolves if every ancestor up to a definite size resolves too, and a single shrink-to-fit ancestor sizes the whole chain by the table instead. The container then grows past the viewport and some ancestor scrolls in its place. The usual culprits:

- a flex item left at the default `min-width: auto` (its automatic minimum size is its content, which overrides `width: 100%`)
- a column flex container with `align-items` other than `stretch`
- an `inline-block`, a grid item at `min-width: auto`, or a table cell

`useFixedHeader` logs a one-time warning when it detects this.

**2. The header component must expose its `<thead>` as a template ref named `thead`.** Widths are measured off the real header's cells. `EpTableHead` does this; a custom header rendered into the `thead` slot must too.

**3. Both headers must render the same cells in the same order.** Widths are copied positionally, and `.ep-table--fixed-header` is `table-layout: fixed`, so the copy honours them exactly.

**4. `--ep-table-fixed-top` is an offset from the top of the viewport,** because the copy is `position: fixed`. Passing a `scrollElement` other than `window` changes *when* the header pins, not *where* it sits.

**5. Nothing in the `thead-fixed` slot may be focusable.** The pinned copy is clickable — sorting from it is the point, and while pinned it is the only header on screen. It is also `aria-hidden`, so that a screen reader hears one set of column headers rather than two; the real header never leaves the DOM, so table semantics come from it as usual.

That pairing is only safe while the copy holds no focusable elements, since `aria-hidden` must never hide something reachable by keyboard. `EpTableHead` and `EpTableSortableHeader` satisfy this today — the sortable header is a `<th>` with a click handler, not a button. If you put a `<button>`, link or input in a header, drop `aria-hidden` from the copy and accept the duplicate announcement, because the alternative is a WCAG 4.1.2 failure.

Worth knowing: because sorting is a click handler on a `<th>` rather than a button, it is not keyboard-operable in *either* header. That is a pre-existing gap in `EpTableSortableHeader`, not something the pinned copy introduces.

##### Troubleshooting

| Symptom | Cause |
|---|---|
| Header pins, but does not move when scrolling sideways | The container is not the horizontal scroller — see requirement 1. Check `el.scrollWidth > el.clientWidth` on `.ep-table-container`. |
| Header never appears | The `thead` ref is missing, so nothing is being observed. |
| Columns misaligned | The two headers render different cells, or a custom header does not reproduce `th > div > span.label`. |
| Header appears in the wrong place | An ancestor with `transform`, `filter`, `perspective`, `backdrop-filter` or `contain: paint` makes itself the containing block for `position: fixed`. |
| Clicks on the pinned header do nothing | Something is intercepting them — check for `inert` or `pointer-events: none` on an ancestor of `.ep-table-fixed-viewport`. |

##### Migrating from 2.0.0-beta.6

`useFixedHeader` now takes a single options object — `{ fixedTop?, scrollElement? }` — instead of four positional arguments, and returns `{ cellWidths, fixedHeader, measure, tableComponent, tableHead }`.

| Removed | Replacement |
|---|---|
| `fixedHeaderOffset` | Nothing. An `IntersectionObserver` derives the activation point from the header's own position, so there is no offset to measure or pass. Callers that measured one can delete that code. |
| `updateAndSync` | Nothing. Drop `@container-scroll="updateAndSync"` — the composable listens to the container itself. |
| `updateCellWidths` | `measure()`, for a layout change the observers cannot see. |
| `syncTablePosition` | `measure()`. |

`initialFixedHeader` is gone too; the observer settles the pinned state within a frame of mount.

`EpTable` now wraps the duplicate header in `<div class="ep-table-fixed-viewport">`, which is the fixed, clipping box. It also renames its internal `tableBody` ref to `tableElement` and adds `tableFixedViewport`.

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

