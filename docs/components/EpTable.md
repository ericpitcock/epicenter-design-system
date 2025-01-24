# EpTable



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `columns` | - | `array` | `-` |
| `data` | - | `array` | `-` |
| `hiddenColumns` | - | `array` | `[]` |
| `compact` | - | `boolean` | `false` |
| `bordered` | - | `boolean` | `false` |
| `selectable` | - | `boolean` | `false` |
| `striped` | - | `boolean` | `false` |
| `stickyHeader` | - | `boolean` | `false` |
| `fixedHeader` | - | `boolean` | `false` |
| `calculateHeight` | - | `boolean` | `false` |
| `calculateHeightOffset` | - | `number` | `0` |
| `showActionsMenu` | - | `boolean` | `false` |

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
    :style="containerStyles"
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
  import { computed, ref } from 'vue'
  import EpTableCell from './EpTableCell.vue'
  import useCalculatedHeight from '../../composables/useCalculatedHeight'

  defineOptions({
    name: 'EpTable'
  })

  const props = defineProps({
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    hiddenColumns: {
      type: Array,
      default: () => []
    },
    compact: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    stickyHeader: {
      type: Boolean,
      default: false
    },
    fixedHeader: {
      type: Boolean,
      default: false
    },
    calculateHeight: {
      type: Boolean,
      default: false
    },
    calculateHeightOffset: {
      type: Number,
      default: 0
    },
    showActionsMenu: {
      type: Boolean,
      default: false
    },
  })

  const visibleColumns = computed(() => {
    return props.columns.filter(column => !props.hiddenColumns.includes(column.key))
  })

  const tableContainer = ref(null)
  // not convinced I don't need these
  // const tableBody = ref(null)
  // const tableFixed = ref(null)

  const { containerHeight } = useCalculatedHeight(tableContainer, props.calculateHeightOffset)

  const containerStyles = computed(() => ({
    ...(props.calculateHeight && containerHeight.value),
    ...props.styles
  }))

  const classes = computed(() => {
    return {
      'ep-table--selectable': props.selectable,
      'ep-table--bordered': props.bordered,
      'ep-table--compact': props.compact,
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


## Styles

```scss
.ep-table-container {
  --ep-table-container-width: auto;
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

      tr:not(.ep-table-row--selected):hover {
        cursor: pointer;

        td {
          background: var(--ep-table-row-hover-bg-color);
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