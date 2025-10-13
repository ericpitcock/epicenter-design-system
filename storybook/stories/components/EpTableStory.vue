<!-- eslint-disable vue/no-template-shadow -->
<template>
  <ep-flex class="flex-row gap-30">
    <div
      class="sidebar"
      style="position: fixed;flex: 0 0 140px;"
    >
      <ep-flex class="flex-col gap-30">
        <ep-table-checkbox-filters
          :filters="filters"
          @update:filters="onFilterUpdate"
        />
        <ep-button
          class="ep-button-var--outline"
          label="Reset"
          @click="resetFilters"
        />
      </ep-flex>
    </div>
    <ep-flex class="flex-col main-content">
      <ep-flex
        class="flex-row gap-10"
        style="height: 50px;"
      >
        <ep-multi-search
          height="3.8rem"
          placeholder="Search"
          :icon="{ name: 'search', styles: { '--ep-icon-width': '24px' } }"
          @enter="onSearchUpdateLocal($event)"
          @delete="onSearchUpdateLocal($event)"
          @clear="onSearchUpdateLocal($event)"
          @query-close="onSearchUpdateLocal($event)"
        />
        <ep-dropdown v-bind="columnFiltersDropdownProps">
          <template #content>
            <ep-container class="column-filter-container">
              <ep-flex class="flex-col gap-10">
                <ep-checkbox
                  v-for="filter in columnFilters"
                  :key="filter.id"
                  v-bind="filter"
                  v-model="filter.checked"
                  @update:model-value="onFilterToggle($event, filter.id)"
                />
              </ep-flex>
            </ep-container>
          </template>
        </ep-dropdown>
      </ep-flex>
      <ep-empty-state v-if="!paginatedData.length">
        <p>No matching data</p>
        <template #subtext>
          <p>
            Try <span
              class="clickable-text"
              @click="resetFilters"
            >resetting</span> your filters
          </p>
        </template>
      </ep-empty-state>
      <template v-else>
        <ep-table
          ref="tableComponent"
          :columns="visibleColumns"
          :data="paginatedData"
          class="table"
          v-bind="$attrs"
          @row-click="onRowClick"
        >
          <template #thead="{ visibleColumns, cellWidths, showActionsMenu }">
            <ep-table-head
              :columns="visibleColumns"
              :cell-widths="cellWidths"
              :show-actions-menu="showActionsMenu"
            >
              <template #header="{ column }">
                <ep-table-sortable-header
                  :column="column"
                  :sort-column="sortColumn"
                  :sort-order="sortOrder"
                  @sort="onSortChange"
                />
              </template>
            </ep-table-head>
          </template>
          <template #cell-intensity="{ row }">
            <ep-badge :label="row.intensity" />
          </template>
          <template #actions-menu="{ row }">
            <ep-dropdown v-bind="tableActionsMenuProps(row.id)" />
          </template>
          <template
            #thead-fixed="{ visibleColumns, cellWidths, showActionsMenu }"
          >
            <ep-table-head
              :columns="visibleColumns"
              :cell-widths="cellWidths"
              :show-actions-menu="showActionsMenu"
            >
              <template #header="{ column }">
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
    </ep-flex>
  </ep-flex>
</template>

<script setup>
  import { ref } from 'vue'

  import EpBadge from '@/components/badge/EpBadge.vue'
  import EpButton from '@/components/button/EpButton.vue'
  import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpDropdown from '@/components/dropdown/EpDropdown.vue'
  import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'
  import EpFlex from '@/components/flexbox/EpFlex.vue'
  import EpMultiSearch from '@/components/search/EpMultiSearch.vue'
  import EpTable from '@/components/table/EpTable.vue'
  import EpTableCheckboxFilters from '@/components/table/EpTableCheckboxFilters.vue'
  import EpTableHead from '@/components/table/EpTableHead.vue'
  import EpTablePagination from '@/components/table/EpTablePagination.vue'
  import EpTableSortableHeader from '@/components/table/EpTableSortableHeader.vue'
  import {
    useActionsMenu,
    useColumnFilters,
    useDataFilters,
    useExclude,
    usePagination,
    useSearch,
    useSorting,
  } from '@/composables/index.js'

  import { columns, fakeTableData } from '../../data/tableData'

  const tableData = ref(fakeTableData(340))
  const columnsRef = ref(columns)

  // use exclude
  const {
    includedColumns,
    includedData
  } = useExclude(columnsRef, tableData, [])

  // use sorting
  const {
    sortedData,
    onSortChange,
    sortColumn,
    sortOrder
  } = useSorting(columnsRef, includedData, 'intensity', 'desc')

  // use search
  const {
    searchedData,
    // searchTerms,
    onSearchUpdate
  } = useSearch(sortedData, includedColumns)

  const onSearchUpdateLocal = (event) => {
    onSearchUpdate(event)
    refreshFilters()
  }

  // use data filters
  const {
    filters,
    filteredData,
    onFilterUpdate,
    resetFilters,
    refreshFilters,
  } = useDataFilters(
    includedColumns,
    searchedData,
    ['intensity', 'type', 'total_elevation_gain'],
    ['Low', '0–100 ft', '100–300 ft'],
    {
      intensity: ['Extreme', 'High', 'Medium', 'Low'],
      total_elevation_gain: ['700+ ft', '300–700 ft', '100–300 ft', '0–100 ft'],
    },
    true,
    {
      total_elevation_gain: {
        '0–100 ft': v => v >= 0 && v < (100 / 3.28084),
        '100–300 ft': v => v >= (100 / 3.28084) && v < (300 / 3.28084),
        '300–700 ft': v => v >= (300 / 3.28084) && v < (700 / 3.28084),
        '700+ ft': v => v >= (700 / 3.28084),
      }
    }
  )

  // use column filters
  const {
    columnFilters,
    visibleColumns,
    visibleData,
    onFilterToggle
  } = useColumnFilters(includedColumns, filteredData, [])

  // use pagination
  const {
    currentPage,
    pageSize,
    totalPages,
    paginatedData,
    onPageNavigate,
    onPageSizeUpdate
  } = usePagination(visibleData, 1, 20)

  const onRowClick = (row) => {
    console.log('Row clicked:', row)
  }

  const columnFiltersDropdownProps = {
    alignRight: true,
    buttonProps: {
      size: 'large',
      label: '',
      ariaLabel: 'Column Filters',
      iconLeft: { name: 'f-columns' },
      iconRight: undefined,
      title: 'Column Filters',
      class: 'ep-button-var--outline',
    }
  }

  const { generateActionMenuProps } = useActionsMenu()

  const menuItems = [
    (id) => ({
      id,
      label: 'Edit',
      iconLeft: { name: 'f-file' },
      onClick: () => {
        alert(`Edit ${id}`)
      }
    }),
    (id) => ({
      id,
      label: 'Delete',
      iconLeft: { name: 'f-trash' },
      onClick: () => {
        alert(`Delete ${id}`)

        const index = tableData.value.findIndex(item => item.id === id)
        if (index !== -1) {
          tableData.value.splice(index, 1)
          refreshFilters()
        }
      }
    }),
  ]

  const tableActionsMenuProps = (context) =>
    generateActionMenuProps({
      context,
      menuItems,
      alignRight: true,
    })
</script>

<style scoped>
  .table {
    --ep-table-min-width: 100%;
    --ep-table-container-height: unset;
    --ep-table-container-overflow: unset;
  }

  .column-filter-container {
    --ep-container-min-width: max-content;
    --ep-container-bg-color: var(--interface-overlay);
    --ep-container-border-radius: var(--border-radius);
    --ep-container-border-color: var(--border-color--lighter);
    --ep-container-padding: 2rem;
  }

  .main-content {
    flex: 1;
    padding-left: 180px;
  }
</style>