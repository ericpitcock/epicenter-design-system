<!-- eslint-disable vue/no-template-shadow -->
<script setup>
  import { EpTable, EpTableHead, EpTableSortableHeader, useFixedHeader, useSorting } from '@ericpitcock/epicenter-components-vue'
  import { columns, fakeTableData } from '@sb/data/tableData'
  import { ref } from 'vue'

  const tableColumnsRef = ref(columns)
  const tableDataRef = ref(fakeTableData(60))

  const {
    sortedData,
    onSortChange,
    sortColumn,
    sortOrder
  } = useSorting(tableColumnsRef, tableDataRef, 'intensity', 'desc')

  // No arguments: the composable watches the real header to decide when to pin,
  // and binds the pinned header to the table container's own scroll. The 100px
  // offset this used to pass was compensating for the old default pinning on the
  // first pixel of scroll — that is derived from the header's position now.
  const {
    fixedHeader,
    cellWidths,
    tableComponent,
    tableHead,
  } = useFixedHeader()
</script>

<template>
  <!-- `min-width: 0` is load-bearing, not cosmetic. This is a flex item of the
       decorator, so its automatic minimum size is its content — the full width
       of the table — which overrides `width: 100%` and blows the whole chain
       out past the viewport. The table container then grows to fit rather than
       scrolling, and a pinned header has no scroll to follow. -->
  <div class="fixed-header-story">
    <div class="story-header">
      Header
    </div>
    <ep-table
      ref="tableComponent"
      :columns="tableColumnsRef"
      :data="sortedData"
      v-bind="$attrs"
      class="fixed-header-table"
      :fixed-header="fixedHeader"
    >
      <template #thead="{ visibleColumns, showActionsMenu }">
        <ep-table-head
          ref="tableHead"
          :columns="visibleColumns"
          :show-actions-menu="showActionsMenu"
        >
          <template
            #header="{ column, cellWidths: slotCellWidths, columnIndex }"
          >
            <ep-table-sortable-header
              :column="column"
              :column-index="columnIndex"
              :cell-widths="slotCellWidths"
              :sort-column="sortColumn"
              :sort-order="sortOrder"
              @sort="onSortChange"
            />
          </template>
        </ep-table-head>
      </template>
      <template #thead-fixed="{ visibleColumns, showActionsMenu }">
        <ep-table-head
          :columns="visibleColumns"
          :cell-widths="cellWidths"
          :show-actions-menu="showActionsMenu"
        >
          <template
            #header="{ column, cellWidths: slotCellWidths, columnIndex }"
          >
            <ep-table-sortable-header
              :column="column"
              :column-index="columnIndex"
              :cell-widths="slotCellWidths"
              :sort-column="sortColumn"
              :sort-order="sortOrder"
              @sort="onSortChange"
            />
          </template>
        </ep-table-head>
      </template>
    </ep-table>
  </div>
</template>

<style scoped>
  .fixed-header-story {
    width: 100%;
    /* Clamped to the viewport, not just `width: 100%`. Every ancestor up to the
       body is sized by its content here, so a percentage resolves against the
       table's own width and the container grows instead of scrolling. A
       definite size is the only thing that bounds it. */
    max-width: 100dvw;
    min-width: 0;
  }

  .story-header {
    display: grid;
    place-items: center;
    height: 100px;
    background-color: var(--interface-surface);
    border-bottom: 1px solid var(--border-color);
    width: 100%;
  }

  .fixed-header-table {
    --ep-table-width: 100%;
    --ep-table-head-width: max-content;
    --ep-table-header-bg-color: var(--interface-bg);
    --ep-table-body-width: max-content;
    --ep-table-container-overflow: auto;
    --ep-table-fixed-top: 0;
  }
</style>