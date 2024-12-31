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
import { columns, fakeArray } from '../../data/tableData'
import { onMounted, onBeforeUnmount, ref } from 'vue'

export default {
  title: 'Components/Table Fixed',
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

export const TableFixed = (args) => ({
  components: {
    EpTable,
    EpTableHead,
    EpTableSortableHeader,
    EpFlex,
    EpCheckbox,
  },
  setup() {
    const tableColumnsRef = ref(columns)
    const tableDataRef = ref(fakeArray(100))

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

    // const fixedHeaderVisible = ref(false)
    const cellWidths = ref([])

    const tableHead = ref(null)

    const onScroll = () => {
      // console.log('scrolling')
      // console log scrol top of window
      // console.log(window.scrollY)
      // when scroll top is greater than 100, fixedHeaderVisible is true
      args.fixedHeader = window.scrollY > 100

      if (!args.fixedHeader) return
      // sync cell width with fixed header
      const tableHeadCells = tableHead.value.$refs.tableHeadd.querySelectorAll('th')
      // const tableBodyCells = tableBody.value.querySelectorAll('tr:first-child td')

      // console.log('tableHeadCells', tableHeadCells)

      const newCellWidths = []

      const computeCellWidths = (cell) => {
        const width = cell.getBoundingClientRect().width

        return width
      }

      tableHeadCells.forEach((cell, index) => {
        // if (computeCellWidths(cell) > parseFloat(newCellWidths[index].width)) {
        newCellWidths[index] = { width: `${computeCellWidths(cell)}px` }
        // }
      })

      // console.log('newCellWidths', newCellWidths)

      cellWidths.value = newCellWidths
    }

    onMounted(() => {
      window.addEventListener('scroll', onScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll)
    })



    // onMounted(() => {
    //   window.addEventListener('scroll', () => {
    //     const table = tableComponent.value.$refs.tableContainer
    //     const tableY = table.getBoundingClientRect().top

    //     // const tableHead = tableComponent.value.$refs.tableHead

    //     console.log('tableY', tableY)

    //     if (!args.fixedHeader && tableY < 0) {
    //       args.fixedHeader = true
    //       table.style.paddingTop = '44.5px'
    //       window.scrollBy(0, 44.5)
    //     }
    //     if (args.fixedHeader && tableY >= 0) {
    //       args.fixedHeader = false
    //       table.style.paddingTop = '0'
    //     }
    //   })
    // })

    // const debounce = (func, delay) => {
    //   let timer
    //   return function(...args) {
    //     clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     }, delay)
    //   }
    // }

    // const tableComponent = ref(null)
    // const tableContainer = ref(null)

    // const handleScroll = () => {
    //   requestAnimationFrame(() => {
    //     // const table = tableComponent.value.$refs.tableContainer
    //     const tableY = tableContainer.value.getBoundingClientRect().top
    //     // console.log('tableY', tableY)

    //     if (!args.fixedHeader && tableY < 0) {
    //       args.fixedHeader = true
    //       tableContainer.value.style.paddingTop = '44.5px'
    //       // window.scrollBy(0, 44.5)
    //     }
    //     if (args.fixedHeader && tableY > 0) {
    //       args.fixedHeader = false
    //       tableContainer.value.style.paddingTop = '0'
    //     }
    //   })
    // }

    // const debouncedHandleScroll = debounce(handleScroll, 0) // Adjust the debounce delay as needed

    // onMounted(() => {
    //   tableContainer.value = tableComponent.value.$refs.tableContainer
    //   window.addEventListener('scroll', debouncedHandleScroll)
    // })

    const onFilterToggleLocal = (event, id) => {
      onFilterToggle(event, id)
      onScroll()
      console.log('onFilterToggleLocal')
    }

    return {
      args,
      styles,
      tableColumnsRef,
      sortedData,
      onSortChange,
      sortColumn,
      sortOrder,
      // tableComponent,
      columnFilters,
      visibleColumns,
      visibleData,
      onFilterToggle,
      cellWidths,
      tableHead,
      onFilterToggleLocal,
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

TableFixed.args = {
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