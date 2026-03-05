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

  const props = withDefaults(defineProps<EpTableProps>(), {
    bordered: false,
    compact: false,
    fixedHeader: false,
    hiddenColumns: () => [],
    selectable: false,
    showActionsMenu: false,
    stickyHeader: false,
    striped: false,
  })

  const emit = defineEmits<{
    'row-click': [row: TableRow]
    'container-scroll': [scrollLeft: number]
  }>()

  const visibleColumns = computed(() => {
    return props.columns.filter(column => !props.hiddenColumns.includes(column.key))
  })

  const tableContainer = useTemplateRef<HTMLDivElement>('tableContainer')

  const classes = computed(() => {
    return {
      'ep-table--bordered': props.bordered,
      'ep-table--compact': props.compact,
      'ep-table--selectable': props.selectable,
      'ep-table--sticky': props.stickyHeader,
      'ep-table--striped': props.striped,
    }
  })

  const onRowClick = (row: TableRow): void => {
    if (!props.selectable) return
    emit('row-click', row)
  }

  const onScroll = (): void => {
    if (!props.fixedHeader || !tableContainer.value) return
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
