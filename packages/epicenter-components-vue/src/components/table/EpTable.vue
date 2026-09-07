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
