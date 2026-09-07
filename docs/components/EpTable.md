# EpTable



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

Interactive controls in the pinned copy are not clickable — it is `inert` and `aria-hidden`, being a duplicate of a header that is still in the DOM. Sorting from a pinned header is a known gap.

##### Troubleshooting

| Symptom | Cause |
|---|---|
| Header pins, but does not move when scrolling sideways | The container is not the horizontal scroller — see requirement 1. Check `el.scrollWidth > el.clientWidth` on `.ep-table-container`. |
| Header never appears | The `thead` ref is missing, so nothing is being observed. |
| Columns misaligned | The two headers render different cells, or a custom header does not reproduce `th > div > span.label`. |
| Header appears in the wrong place | An ancestor with `transform`, `filter`, `perspective`, `backdrop-filter` or `contain: paint` makes itself the containing block for `position: fixed`. |

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

## CSS Custom Properties

Set any of these with a selector that matches `.ep-table-container` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-table-container {
  --ep-table-actions-menu-width: /* … */;
}
```

### Box

| Property | Default | State |
|---|---|---|
| `--ep-table-actions-menu-width` | `5rem` | — |
| `--ep-table-body-width` | `auto` | — |
| `--ep-table-cell-min-width` | `0.1rem` | — |
| `--ep-table-container-height` | `auto` | — |
| `--ep-table-container-min-width` | `0` | — |
| `--ep-table-container-width` | `auto` | — |
| `--ep-table-head-width` | `auto` | — |
| `--ep-table-min-width` | `0` | — |
| `--ep-table-width` | `auto` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-table-border-color` | `var(--border-color)` | — |
| `--ep-table-border-style` | `solid` | — |
| `--ep-table-border-width` | `var(--border-width--hairline)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-table-cell-padding` | `1.4rem` | — |
| `--ep-table-container-padding` | `0` | — |

### Layout

| Property | Default | State |
|---|---|---|
| `--ep-table-cell-vertical-align` | `middle` | — |
| `--ep-table-container-overflow` | `auto` | — |
| `--ep-table-fixed-box-shadow` | `0 0.2rem 1.1rem var(--box-shadow-color)` | — |
| `--ep-table-fixed-offset` | `0` | — |
| `--ep-table-pin-sentinel-size` | `0.1rem` | — |
| `--ep-table-fixed-top` | `0` | — |
| `--ep-table-fixed-z-index` | `10` | — |
| `--ep-table-sticky-top` | `0` | — |
| `--ep-table-sticky-z-index` | `var(--z-index--sticky)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-table-cell-white-space` | `normal` | — |
| `--ep-table-header-font-variation-settings` | `var(--font-weight--semi-bold)` | — |
| `--ep-table-header-text-color` | `var(--text-color--loud)` | — |
| `--ep-table-row-selected-text-color` | `var(--text--white)` | selected |

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-table-header-bg-color` | `var(--interface-surface)` | — |
| `--ep-table-row-hover-bg-color` | `light-dark(hsl(var(--gray-10)), hsl(var(--gray-450)))` | hover |
| `--ep-table-row-selected-bg-color` | `var(--primary-color-base)` | selected |
| `--ep-table-row-stripe-bg-color` | `var(--interface-foreground)` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed, useTemplateRef } from 'vue'

  import type { TableColumn, TableRow } from '../../types'

  import EpTableCell from './EpTableCell.vue'

  interface Props {
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
  } = defineProps<Props>()

  const emit = defineEmits<{
    'row-click': [row: TableRow]
    'container-scroll': [scrollLeft: number]
  }>()

  defineOptions({ name: 'EpTable' })

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

  // Informational for consumers only: useFixedHeader binds the pinned header to
  // this container's scroll itself rather than being driven by this event.
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
    <!--
      Marks the top edge of the header for useFixedHeader's IntersectionObserver.
      A zero-height marker rather than the header itself: an observer can only
      report the header leaving the viewport, which happens a full header-height
      after its top reaches the line. Sticky on the inline axis so scrolling the
      table sideways cannot carry it out of view and read as "scrolled away".
    -->
    <div
      ref="tablePinSentinel"
      class="ep-table__pin-sentinel"
      aria-hidden="true"
    />
    <table
      ref="tableElement"
      :class="['ep-table', classes]"
    >
      <!-- @slot Table header slot. Use this to define your table headers with columns and sorting. -->
      <slot
        name="thead"
        v-bind="{ visibleColumns, showActionsMenu }"
      />
      <tbody>
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
    <!--
      The pinned header is `position: fixed`, so the container's `overflow` does
      not clip it — scrolled right, it would hang off the container's leading
      edge. This wrapper is the fixed, clipping box, sized over the container by
      useFixedHeader; the table inside is what translates, so the element being
      animated owns no positional properties of its own.

      `aria-hidden` alone would leave focusable duplicates hidden from assistive
      tech, which is worse than either state on its own — `inert` takes them out
      of the tab order and out of hit testing to match. The real header never
      leaves the DOM, so nothing is lost.
    -->
    <div
      v-show="fixedHeader"
      ref="tableFixedViewport"
      class="ep-table-fixed-viewport"
      aria-hidden="true"
      inert
    >
      <table
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
  </div>
</template>
```

## Styles (SCSS)

```scss
@use '../mixins/mixins' as *;

// @block table
// @root .ep-table-container
.ep-table-container {
  // Container box
  --ep-table-container-width: auto;
  --ep-table-container-height: auto;
  --ep-table-container-min-width: 0;
  --ep-table-container-overflow: auto;
  --ep-table-container-padding: 0;

  // Table box
  --ep-table-width: auto;
  --ep-table-min-width: 0;
  --ep-table-head-width: auto;
  --ep-table-body-width: auto;

  // Surface
  --ep-table-header-bg-color: var(--interface-surface);

  // These were previously declared under .dark-theme / .light-theme, which meant
  // they did not exist at all unless a theme class was applied. As light-dark()
  // pairs they work off the OS preference too, like every other themed value.
  --ep-table-row-stripe-bg-color: var(--interface-foreground);
  --ep-table-row-hover-bg-color: light-dark(hsl(var(--gray-10)), hsl(var(--gray-450)));
  --ep-table-row-selected-bg-color: var(--primary-color-base);
  // Was var(--white), which nothing declares — selected rows had no text colour.
  --ep-table-row-selected-text-color: var(--text--white);

  // Border
  --ep-table-border-width: var(--border-width--hairline);
  --ep-table-border-style: solid;
  --ep-table-border-color: var(--border-color);

  // Cells
  --ep-table-cell-padding: 1.4rem;
  // Lets a cell shrink below its content width when the table is constrained.
  --ep-table-cell-min-width: 0.1rem;
  --ep-table-cell-vertical-align: middle;
  --ep-table-cell-white-space: normal;
  --ep-table-actions-menu-width: 5rem;

  // Text
  --ep-table-header-text-color: var(--text-color--loud);
  --ep-table-header-font-variation-settings: var(--font-weight--semi-bold);

  // Stacking
  --ep-table-sticky-top: 0;
  --ep-table-sticky-z-index: var(--z-index--sticky);
  --ep-table-fixed-top: 0;
  --ep-table-fixed-z-index: 10;
  --ep-table-fixed-box-shadow: 0 0.2rem 1.1rem var(--box-shadow-color);
  // How far the pinned header is translated along the inline axis. Written by
  // useFixedHeader on layout change — never while scrolling — and read by the
  // `ep-table-track-x` keyframes, which the container's scroll timeline drives.
  --ep-table-fixed-offset: 0;
  // The pin marker's box. Small but not zero: a zero-area target is unreliable
  // for an IntersectionObserver. Not a design knob.
  --ep-table-pin-sentinel-size: 0.1rem;

  overflow: var(--ep-table-container-overflow);
  width: var(--ep-table-container-width);
  min-width: var(--ep-table-container-min-width);
  height: var(--ep-table-container-height);
  padding: var(--ep-table-container-padding);

  // Names this element's inline scroll as a timeline the pinned header animates
  // against. Declared rather than looked up with `scroll(nearest)`: the pinned
  // header is out of flow, and `nearest` is ambiguous between the DOM chain and
  // the containing-block chain for an out-of-flow box.
  scroll-timeline-axis: inline;
  scroll-timeline-name: --ep-table-scroll-x;
}

.ep-table {
  width: var(--ep-table-width);
  min-width: var(--ep-table-min-width);

  // Sits at the top edge of the header and is watched by useFixedHeader.
  // `sticky` on the inline axis keeps it in view when the table is scrolled
  // sideways; the negative margin keeps it out of the layout entirely.
  &__pin-sentinel {
    position: sticky;
    left: 0;
    width: var(--ep-table-pin-sentinel-size);
    height: var(--ep-table-pin-sentinel-size);
    margin-bottom: calc(-1 * var(--ep-table-pin-sentinel-size));
    pointer-events: none;
    visibility: hidden;
  }

  thead {
    width: var(--ep-table-head-width);
    color: var(--ep-table-header-text-color);
    font-variation-settings: var(--ep-table-header-font-variation-settings);
    user-select: none;

    th {
      background: var(--ep-table-header-bg-color);
      text-align: left;

      &.ep-table__actions-menu {
        width: var(--ep-table-actions-menu-width);
      }

      div {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: var(--ep-table-cell-padding);
        border-bottom: var(--ep-table-border-width) var(--ep-table-border-style) var(--ep-table-border-color);

        span.label {
          overflow: hidden;
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
        min-width: var(--ep-table-cell-min-width);
        padding: var(--ep-table-cell-padding);
        vertical-align: var(--ep-table-cell-vertical-align);
        white-space: var(--ep-table-cell-white-space);

        &.ep-table__actions-menu {
          width: var(--ep-table-actions-menu-width);
          padding: 0;
        }
      }
    }
  }

  &--bordered {
    tbody tr {
      border: var(--ep-table-border-width) var(--ep-table-border-style) var(--ep-table-border-color);
      border-right: 0;
      border-left: 0;
    }
  }

  // Density is one property, not a second set of padding rules.
  &--compact {
    --ep-table-cell-padding: 0.8rem 1.2rem;
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
          background: var(--ep-table-row-selected-bg-color);
          color: var(--ep-table-row-selected-text-color);
        }
      }
    }
  }

  &--sticky {
    thead {
      th {
        position: sticky;
        z-index: var(--ep-table-sticky-z-index);
        top: var(--ep-table-sticky-top);
      }
    }
  }

  // The duplicate header shown while the real one is scrolled away. It owns no
  // positional properties: `.ep-table-fixed-viewport` places and clips it, and
  // its horizontal offset is a transform bound to the container's scroll.
  // `table-layout: fixed` makes the widths useFixedHeader copies off the real
  // header authoritative rather than a hint an auto layout may talk itself out
  // of, and drops the layout cost from O(cells) to O(columns).
  &--fixed-header {
    display: table;
    table-layout: fixed;
    will-change: transform;

    // Bind the offset to the container's scroll. The browser interpolates this
    // on the compositor from the scroll position itself, so the header moves in
    // the same frame as the body and cannot fall behind — which is what it did
    // when the offset was written from a scroll handler. useFixedHeader only
    // supplies the distance, and falls back to a scroll listener where this
    // @supports fails.
    // Longhands, not the `animation` shorthand: the shorthand resets
    // `animation-timeline` to `auto`. These rules are inside
    // `@layer epicenter.components`, so any unlayered `animation:` declaration
    // in a consumer's CSS would win and silently unbind the header.
    @supports (animation-timeline: --x) {
      animation-duration: auto;
      animation-fill-mode: both;
      animation-name: ep-table-track-x;
      animation-timeline: --ep-table-scroll-x;
      animation-timing-function: linear;
    }
  }

  &--striped {
    tbody tr:nth-child(even) {
      background-color: var(--ep-table-row-stripe-bg-color);
    }
  }
}

// Spans the container's whole scrollable distance, so timeline progress maps
// straight onto the offset. `--ep-table-fixed-offset` is written by
// useFixedHeader whenever layout changes, never while scrolling.
@keyframes ep-table-track-x {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(var(--ep-table-fixed-offset));
  }
}

// The pinned header's clipping box, sized over `.ep-table-container`'s
// scrollport by useFixedHeader. The header is wider than the container whenever
// the table overflows, and being fixed it is not clipped by the container's own
// `overflow`.
// `position: fixed` pins to the VIEWPORT, so `--ep-table-fixed-top` is an offset
// from the top of the window. Passing a `scrollElement` other than `window` to
// useFixedHeader changes when the header pins, not where.
.ep-table-fixed-viewport {
  // `clip`, not `hidden`: `hidden` would make this a scroll container, and
  // though nothing could scroll it by hand, focusing a control in the pinned
  // header or a `scrollIntoView` would — leaving it permanently offset with
  // nothing to reset it. Clipping only the inline axis lets a menu opened from
  // a pinned header still escape downward.
  position: fixed;
  z-index: var(--ep-table-fixed-z-index);
  top: var(--ep-table-fixed-top);
  left: 0;
  box-shadow: var(--ep-table-fixed-box-shadow);
  overflow-x: clip;
  overflow-y: visible;
}
```