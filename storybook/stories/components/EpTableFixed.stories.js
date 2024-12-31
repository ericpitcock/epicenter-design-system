import { surfaceOverflow } from '../../helpers/decorators.js'
import EpTable from '@/components/table/EpTable.vue'
import EpTableHead from '@/components/table/EpTableHead.vue'
import EpTableSortableHeader from '@/components/table/EpTableSortableHeader.vue'
import EpFlex from '@/components/flexbox/EpFlex.vue'
import EpCheckbox from '@/components/checkbox/EpCheckbox.vue'
import {
  // useExclude,
  useColumnFilters,
  // useDataFilters,
  useSorting,
  // usePagination,
  // useSearch
} from '@/composables/index.js'
import { useDebounceFn } from '@vueuse/core'
import { columns, fakeArray } from '../../data/tableData'
import { nextTick, onMounted, onBeforeUnmount, ref } from 'vue'

export default {
  title: 'Components/Table/Fixed',
  component: EpTable,
  decorators: [surfaceOverflow],
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
    styles: {
      table: { disable: true }
    }
  }
}

export const Fixed = (args) => ({
  components: {
    EpTable,
    EpTableHead,
    EpTableSortableHeader,
    EpFlex,
    EpCheckbox,
  },
  setup() {
    const tableColumnsRef = ref(columns)
    const tableDataRef = ref(fakeArray(20))

    // use sorting
    const {
      sortedData,
      onSortChange,
      sortColumn,
      sortOrder
    } = useSorting(tableColumnsRef, tableDataRef, 'severity', 'desc')

    const {
      columnFilters,
      visibleColumns,
      visibleData,
      onFilterToggle
    } = useColumnFilters(tableColumnsRef, sortedData, [])

    const styles = ref({
      '--ep-table-width': '100%',
      '--ep-table-head-width': 'max-content',
      '--ep-table-header-bg-color': 'var(--interface-bg)',
      '--ep-table-body-width': 'max-content',
      '--ep-table-container-overflow': 'auto',
      // '--ep-table-container-padding': '1rem 3rem 30rem 3rem',
      '--ep-table-fixed-top': '0',
    })

    const cellWidths = ref([])
    const tableHead = ref(null)

    const updateCellWidths = () => {
      args.fixedHeader = window.scrollY > 100
      if (!args.fixedHeader) return

      const tableHeadCells = tableHead.value?.$refs.tableHeadd.querySelectorAll('th')
      if (!tableHeadCells) return

      cellWidths.value = Array.from(tableHeadCells).map((cell) => ({
        width: `${cell.getBoundingClientRect().width}px`,
      }))
    }

    const tableComponent = ref(null)
    const tableContainer = ref(null)
    const tableFixed = ref(null)
    const tableBody = ref(null)

    const syncTablePosition = () => {
      // leftPosition is tableContainer.value.scrollLeft
      tableFixed.value.style.transform = `translateX(-${tableContainer.value.scrollLeft}px)`
      tableFixed.value.style.width = `${tableBody.value.clientWidth}px`
    }

    const updateAndSync = useDebounceFn(() => {
      updateCellWidths()
      syncTablePosition()
    }, 100, { maxWait: 100 })

    onMounted(() => {
      tableContainer.value = tableComponent.value.$refs.tableContainer
      tableFixed.value = tableComponent.value.$refs.tableFixed
      tableBody.value = tableComponent.value.$refs.tableBody
      window.addEventListener('scroll', updateAndSync)
      window.addEventListener('resize', updateAndSync)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', updateAndSync)
      window.removeEventListener('resize', updateAndSync)
    })

    const onFilterToggleLocal = (event, id) => {
      onFilterToggle(event, id)
      nextTick(() => {
        updateCellWidths()
        syncTablePosition()
      })
    }

    return {
      args,
      styles,
      tableColumnsRef,
      sortedData,
      onSortChange,
      sortColumn,
      sortOrder,
      tableComponent,
      columnFilters,
      visibleColumns,
      visibleData,
      onFilterToggle,
      cellWidths,
      tableHead,
      onFilterToggleLocal,
      syncTablePosition,
    }
  },
  template: `
      <div style="height: 100px; background-color: lightblue;">
      this is a fake header
      </div>
      <ep-flex class="flex-col gap-10" style="position: fixed; top: 140px; right: 0; z-index: 1;">
        <ep-checkbox
          v-for="filter in columnFilters"
          :key="filter.id"
          v-bind="filter"
          v-model="filter.checked"
          @update:modelValue="onFilterToggleLocal($event, filter.id)"
        />
      </ep-flex>
      <ep-table
        ref="tableComponent"
        :columns="visibleColumns"
        :data="visibleData"
        v-bind="args"
        :style="styles"
        @container-scroll="syncTablePosition"
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
  `
})

Fixed.args = {
  compact: false,
  bordered: true,
  selectable: false,
  striped: true,
  stickyHeader: false,
  fixedHeader: false,
  hiddenColumns: ['id'],
  // calculateHeight: true,
  // calculateHeightOffset: 0,
  // fixedHeaderOffset: 0,
}