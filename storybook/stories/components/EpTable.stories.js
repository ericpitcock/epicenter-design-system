import EpBadge from '@/components/badge/EpBadge.vue'
import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import EpContainer from '@/components/container/EpContainer.vue'
import EpDropdown from '@/components/dropdown/EpDropdown.vue'
import EpEmptyState from '@/components/empty-state/EpEmptyState.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpInput from '@/components/input/EpInput.vue'
import EpTable from '@/components/table/EpTable.vue'
import EpTableHead from '@/components/table/EpTableHead.vue'
import EpTableSearchInput from '@/components/table/EpTableSearchInput.vue'
import EpTablePagination from '@/components/table/EpTablePagination.vue'
import EpTableSortableHeader from '@/components/table/EpTableSortableHeader.vue'
import EpTableCheckboxFilters from '@/components/table/EpTableCheckboxFilters.vue'
import EpMultiSearch from '@/components/search/EpMultiSearch.vue'
import {
  // useCalculatedHeight,
  useColumnFilters,
  useDataFilters,
  useExclude,
  usePagination,
  useSearch,
  useSorting,
} from '@/composables/index.js'
import { paddedSurface } from '../../helpers/decorators.js'
import { columns, fakeArray } from '../../data/tableData'
import {
  computed,
  // onMounted,
  ref,
  // useTemplateRef
} from 'vue'

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
    EpTableHead,
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

    // use sorting
    const {
      sortedData,
      onSortChange,
      sortColumn,
      sortOrder
    } = useSorting(columnsRef, includedData, 'severity', 'desc')

    const {
      filters,
      filteredData,
      onFilterUpdate,
      resetFilters
    } = useDataFilters(
      includedColumns,
      sortedData,
      ['severity', 'type', 'total_elevation_gain'],
      ['Low'],
      { severity: ['Critical', 'High', 'Medium', 'Low'] },
      true,
      {
        total_elevation_gain: {
          low: value => value === 0 || (value > 0 && value < 100),
          medium: value => value >= 300 && value < 600,
          high: value => value >= 600 && value < 700,
          'Hella Steep': value => value >= 700,
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

    // use search
    const {
      searchedData,
      searchTerms,
      onSearchUpdate
    } = useSearch(visibleData)

    // use pagination
    const {
      currentPage,
      pageSize,
      totalPages,
      paginatedData,
      onPageNavigate,
      onPageSizeUpdate
    } = usePagination(searchedData, 1, 20)

    // const tableComponent = useTemplateRef('table')
    // const tableContainer = ref(null)

    // onMounted(() => {
    //   tableContainer.value = tableComponent.value.$refs.tableContainer
    // })

    // const { dynamicHeight } = useCalculatedHeight(tableContainer, 60)

    // console.log(dynamicHeight.value)

    const styles = computed(() => {
      return {
        '--ep-table-width': args.width,
        '--ep-table-min-width': '100%',
        // '--ep-table-container-height': `${dynamicHeight.value}px`,
        '--ep-table-container-height': 'calc(100vh - 140px)',
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
      menuClass: 'ep-menu-default',
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
      // sorting
      onSortChange,
      sortColumn,
      sortOrder,
      // pagination
      currentPage,
      totalPages,
      onPageNavigate,
      paginatedData,
      pageSize,
      onPageSizeUpdate,
      // search
      searchTerms,
      onSearchUpdate,
      styles,
      onRowClick,
      visibleColumns,
      columnFilters,
      onFilterToggle,
      filters,
      resetFilters,
      columnFiltersDropdownProps,
      containerStyles,
      onFilterUpdate,
      actionMenuProps,
    }
  },
  template: `
  <ep-flex class="flex-row gap-30">
    <div class="sidebar" style="flex: 0 0 140px;">
      <ep-table-checkbox-filters
        :filters="filters"
        @update:filters="onFilterUpdate"
      />
      <p @click="resetFilters">Reset Filters</p>
    </div>
    <ep-flex class="flex-col" style="flex: 1; overflow: auto;">
      <ep-flex class="flex-row gap-10" style="height: auto">
        <ep-multi-search
          height="3.8rem"
          placeholder="Search"
          :icon="{ name: 'search', styles: { '--ep-icon-width': '24px' } }"
          @enter="onSearchUpdate($event)"
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
                  @update:modelValue="onFilterToggle($event, filter.id)"
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
          ref="table"
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
  fixedHeader: false,
  showActionsMenu: true,
}
