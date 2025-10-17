<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div>
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
      @container-scroll="updateAndSync"
    >
      <template #thead="{ visibleColumns, showActionsMenu }">
        <ep-table-head
          ref="tableHead"
          :columns="visibleColumns"
          :show-actions-menu="showActionsMenu"
        >
          <template #header="{ column, cellWidths, columnIndex }">
            <ep-table-sortable-header
              :column="column"
              :column-index="columnIndex"
              :cell-widths="cellWidths"
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
          <template #header="{ column, cellWidths, columnIndex }">
            <ep-table-sortable-header
              :column="column"
              :column-index="columnIndex"
              :cell-widths="cellWidths"
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

<script setup>
  import { ref } from 'vue'

  import EpTable from '@/components/table/EpTable.vue'
  import EpTableHead from '@/components/table/EpTableHead.vue'
  import EpTableSortableHeader from '@/components/table/EpTableSortableHeader.vue'
  import { useFixedHeader, useSorting } from '@/composables/index.js'

  import { columns, fakeTableData } from '../../data/tableData'

  const tableColumnsRef = ref(columns)
  const tableDataRef = ref(fakeTableData(60))

  const {
    sortedData,
    onSortChange,
    sortColumn,
    sortOrder
  } = useSorting(tableColumnsRef, tableDataRef, 'intensity', 'desc')

  const {
    fixedHeader,
    cellWidths,
    tableComponent,
    tableHead,
    updateAndSync,
  } = useFixedHeader(window, true, 100, 0)
</script>

<style scoped>
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