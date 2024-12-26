import { surfaceOverflow } from '../../helpers/decorators.js'
import EpTable from '@/components/table/EpTable.vue'
import EpTableSortableHeader from '@/components/table/EpTableSortableHeader.vue'
import {
  // useExclude,
  // useColumnFilters,
  // useDataFilters,
  useSorting,
  // usePagination,
  // useSearch
} from '@/composables/index.js'
import { columns, fakeArray } from '../../data/tableData'
import { ref, onMounted } from 'vue'

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
    EpTableSortableHeader,
  },
  setup() {
    const tableColumnsRef = ref(columns)
    const tableDataRef = ref(fakeArray(100))

    // use sorting
    const {
      sortedData,
      sortBy,
      sortColumn,
      sortOrder
    } = useSorting(tableDataRef, 'severity', 'desc', tableColumnsRef)

    const styles = ref({
      '--ep-table-width': 'max-content',
      '--ep-table-head-width': 'max-content',
      '--ep-table-header-bg-color': 'var(--interface-bg)',
      '--ep-table-body-width': 'max-content',
      '--ep-table-container-overflow': 'auto',
      // '--ep-table-container-padding': '1rem 3rem 30rem 3rem',
      '--ep-table-fixed-top': '0',
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

    const debounce = (func, delay) => {
      let timer
      return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    }

    const tableComponent = ref(null)
    const tableContainer = ref(null)

    const handleScroll = () => {
      requestAnimationFrame(() => {
        // const table = tableComponent.value.$refs.tableContainer
        const tableY = tableContainer.value.getBoundingClientRect().top
        // console.log('tableY', tableY)

        if (!args.fixedHeader && tableY < 0) {
          args.fixedHeader = true
          tableContainer.value.style.paddingTop = '44.5px'
          // window.scrollBy(0, 44.5)
        }
        if (args.fixedHeader && tableY > 0) {
          args.fixedHeader = false
          tableContainer.value.style.paddingTop = '0'
        }
      })
    }

    const debouncedHandleScroll = debounce(handleScroll, 0) // Adjust the debounce delay as needed

    onMounted(() => {
      tableContainer.value = tableComponent.value.$refs.tableContainer
      window.addEventListener('scroll', debouncedHandleScroll)
    })

    return {
      args,
      styles,
      tableColumnsRef,
      sortedData,
      sortBy,
      sortColumn,
      sortOrder,
      tableComponent,
    }
  },
  template: `
      <div style="height: 100px; background-color: lightblue;">
      this is a fake header
      </div>
      <ep-table
        ref="tableComponent"
        :columns="tableColumnsRef"
        :data="sortedData"
        v-bind="args"
        :style="styles"
      >
        <template #header="{ column, cellWidths, columnIndex }">
          <ep-table-sortable-header
            :column="column"
            :sort-column="sortColumn"
            :sort-order="sortOrder"
            :column-index="columnIndex"
            :cell-widths="cellWidths"
            @sort="sortBy"
          />
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