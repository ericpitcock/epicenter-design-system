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
