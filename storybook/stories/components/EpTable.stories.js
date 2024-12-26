import EpBadge from '@/components/badge/EpBadge.vue'
import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpInput from '@/components/input/EpInput.vue'
import EpTable from '@/components/table/EpTable.vue'
import EpTableSearchInput from '@/components/table/EpTableSearchInput.vue'
import EpTablePagination from '@/components/table/EpTablePagination.vue'
import EpTableSortableHeader from '@/components/table/EpTableSortableHeader.vue'
import EpTableCheckboxFilters from '@/components/table/EpTableCheckboxFilters.vue'
import EpMultiSearch from '@/components/search/EpMultiSearch.vue'
import {
  useExclude,
  useColumnFilters,
  useDataFilters,
  useSorting,
  usePagination,
  useSearch
} from '@/composables/index.js'
import { paddedSurface } from '../../helpers/decorators.js'
import { columns, fakeArray } from '../../data/tableData'
import { computed, ref } from 'vue'

export default {
  title: 'Components/Table',
  component: EpTable,
  decorators: [paddedSurface],
  argTypes: {
    columns: {
      table: { disable: true }
    },
    data: {
      table: { disable: true }
    },
    exclude: {
      table: { disable: true }
    },
    compact: {
      name: 'Compact',
      control: {
        type: 'boolean'
      }
    },
    bordered: {
      name: 'Bordered',
      control: {
        type: 'boolean'
      },
    },
    selectable: {
      name: 'Selectable',
      control: {
        type: 'boolean'
      },
    },
    striped: {
      name: 'Striped',
      control: {
        type: 'boolean'
      },
    },
    width: {
      name: 'Width',
      control: {
        type: 'text'
      }
    },
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      }
    },
    calculateHeight: {
      name: 'Calculate Height',
      control: {
        type: 'boolean'
      }
    },
    calculateHeightOffset: {
      name: 'Calculate Height Offset',
      control: {
        type: 'number'
      }
    },
    // styles: {
    //   table: { disable: true }
    // }
  }
}

export const Table = (args) => ({
  components: {
    EpBadge,
    EpCheckbox,
    EpContainer,
    EpDropdown,
    EpEmptyState,
    EpFlex,
    EpInput,
    EpTable,
    EpTableSearchInput,
    EpTablePagination,
    EpTableSortableHeader,
    EpTableCheckboxFilters,
    EpMultiSearch,
  },
  setup() {
    const tableData = ref(fakeArray(340))
    const columnsRef = ref(columns)

    // use exclude
    const {
      includedColumns,
      includedData
    } = useExclude(columnsRef, tableData, [])

    // const columnSorters = {
    //   severity: (a, b) => {
    //     const sortMap = { Critical: 4, High: 3, Medium: 2, Low: 1 }
    //     const aValue = sortMap[a.severity] || 0
    //     const bValue = sortMap[b.severity] || 0
    //     return aValue - bValue
    //   },
    // }

    // use sorting
    const {
      sortedData,
      sortBy,
      sortColumn,
      sortOrder
    } = useSorting(includedData, 'severity', 'desc', columnsRef)

    const {
      filters,
      filteredData,
      onFilterChange,
      resetFilters
    } = useDataFilters(
      includedColumns,
      sortedData,
      ['severity', 'type'],
      ['Low'],
      { severity: ['Critical', 'High', 'Medium', 'Low'] }
    )

    // use column filters
    const {
      columnFilters,
      visibleColumns,
      visibleData,
      handleFilter
    } = useColumnFilters(includedColumns, [], filteredData)

    // use search
    const {
      searchedData,
      searchTerms,
      updateSearchTerms
    } = useSearch(visibleData)

    // use pagination
    const {
      currentPage,
      pageSize,
      totalPages,
      paginatedData,
      onPageChange,
      onPageSizeChange
    } = usePagination(searchedData, 1, 20)

    const styles = computed(() => {
      return {
        '--ep-table-width': args.width,
        '--ep-table-min-width': '100%',
      }
    })

    const onRowClick = (row) => {
      console.log('Row clicked:', row)
    }

    const columnFiltersDropdownProps = {
      alignRight: true,
      buttonProps: {
        label: '',
        iconLeft: { name: 'f-columns' },
        iconRight: undefined,
        title: 'Column Filters'
      }
    }

    const containerStyles = {
      '--ep-container-min-width': 'max-content',
      '--ep-container-bg-color': 'var(--interface-overlay)',
      '--ep-container-border-radius': 'var(--border-radius)',
      '--ep-container-border-color': 'var(--border-color--lighter)',
      '--ep-container-padding': '2rem',
    }

    const badgeClassMap = {
      Critical: 'danger',
      High: 'warning',
      Medium: 'info',
      Low: 'success',
    }

    const actionMenuProps = (id) => ({
      size: 'small',
      menuItems: [
        {
          label: 'Edit',
          iconLeft: { name: 'f-file' },
          onClick: () => {
            alert(`Edit ${id}`)
          }
        },
        {
          label: 'Delete',
          iconLeft: { name: 'f-trash' },
          onClick: () => {
            alert(`Delete ${id}`)
          }
        }
      ],
      menuClass: 'test-class',
      buttonProps: {
        label: '',
        iconLeft: {
          name: 'dots-vertical',
          styles: { '--ep-icon-stroke-width': 3 }
        },
        iconRight: null,
        class: ['ep-button-variant-subtle-ghost'],
        size: 'small',
      },
      alignRight: true,
    })

    return {
      args,
      // columns,
      includedColumns,
      // sorting
      sortBy,
      sortColumn,
      sortOrder,
      // pagination
      currentPage,
      totalPages,
      onPageChange,
      paginatedData,
      pageSize,
      onPageSizeChange,
      // search
      searchTerms,
      updateSearchTerms,
      styles,
      onRowClick,
      visibleColumns,
      columnFilters,
      handleFilter,
      filters,
      resetFilters,
      columnFiltersDropdownProps,
      containerStyles,
      onFilterChange,
      actionMenuProps,
      badgeClassMap,
    }
  },
  template: `
  <ep-flex class="flex-row gap-30">
    <div class="sidebar" style="flex: 0 0 140px;">
      <ep-table-checkbox-filters
        :filters="filters"
        @update:filters="onFilterChange"
      />
      <p @click="resetFilters">Reset Filters</p>
    </div>
    <ep-flex class="flex-col" style="flex: 1; overflow: auto;">
      <ep-flex class="flex-row gap-10" style="height: auto">
        <ep-multi-search
          height="3.8rem"
          placeholder="Search"
          :icon="{ name: 'search', styles: { '--ep-icon-width': '24px' } }"
          @enter="updateSearchTerms($event)"
        />
        <ep-dropdown v-bind="columnFiltersDropdownProps">
          <template #content>
            <ep-container :style="containerStyles">
              <ep-flex class="flex-col gap-10">
                <ep-checkbox
                  v-for="filter in columnFilters"
                  :key="filter.id"
                  v-bind="filter"
                  v-model="filter.checked"
                  @update:modelValue="handleFilter($event, filter.id)"
                />
              </ep-flex>
            </ep-container>
          </template>
        </ep-dropdown>
      </ep-flex>
      <ep-empty-state v-if="!paginatedData.length">
        <p>No matching data</p>
          <template #subtext>
            <p>Try <span class="clickable-text" @click="resetFilters">reseting</span> your filters</p>
          </template>
      </ep-empty-state>
      <template v-else>
        <ep-table
          :columns="visibleColumns"
          :data="paginatedData"
          :style="styles"
          v-bind="args"
          @row-click="onRowClick"
        >
          <template #header="{ column, cellWidths }">
            <ep-table-sortable-header
              :column="column"
              :sort-column="sortColumn"
              :sort-order="sortOrder"
              @sort="sortBy"
            />
          </template>
          <template #cell-severity="{ row }">
            <ep-badge :label="row.severity" />
          </template>
          <template #actions-menu="{ row }">
            <ep-dropdown v-bind="actionMenuProps(row.id)" />
          </template>
        </ep-table>
        <ep-table-pagination
          :current-page="currentPage"
          :total-pages="totalPages"
          :show-pages="true"
          :results-per-page="pageSize"
          @page-change="onPageChange"
          @update:results-per-page="onPageSizeChange"
        />
      </template>
    </ep-flex>
  </ep-flex>
  `
})

Table.args = {
  hiddenColumns: ['id'],
  compact: false,
  bordered: true,
  selectable: true,
  striped: true,
  stickyHeader: true,
  calculateHeight: true,
  calculateHeightOffset: 81,
  showActionsMenu: true,
}
