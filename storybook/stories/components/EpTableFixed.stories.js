import EpTable from '@/components/table/EpTable.vue'
import { columns, fakeArray } from '../../data/tableData'
import { ref, onMounted } from 'vue'

export default {
  title: 'Components/Table Fixed',
  component: EpTable,
  // decorators: [centeredSurface],
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
  },
  setup() {
    const tableColumnsRef = ref(columns)
    const tableDataRef = ref(fakeArray(100))

    const styles = ref({
      '--ep-table-width': 'max-content',
      '--ep-table-head-width': 'max-content',
      '--ep-table-body-width': 'max-content',
      '--ep-table-container-overflow': 'auto',
    })

    const tableComponent = ref(null)

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

    const handleScroll = () => {
      requestAnimationFrame(() => {
        const table = tableComponent.value.$refs.tableContainer
        const tableY = table.getBoundingClientRect().top
        console.log('tableY', tableY)

        if (!args.fixedHeader && tableY < 0) {
          args.fixedHeader = true
          table.style.paddingTop = '44.5px'
          window.scrollBy(0, 44.5)
        }
        if (args.fixedHeader && tableY > 0) {
          args.fixedHeader = false
          table.style.paddingTop = '0'
          // window.scrollBy(0, -44.5)
        }
      })
    }

    const debouncedHandleScroll = debounce(handleScroll, 0) // Adjust the debounce delay as needed

    onMounted(() => {
      window.addEventListener('scroll', debouncedHandleScroll)
    })

    return {
      args,
      styles,
      tableColumnsRef,
      tableDataRef,
      tableComponent,
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh;">
      <div style="height: 100px; background-color: lightblue;">
      this is a fake header
      </div>
      <ep-table
        ref="tableComponent"
        :columns="tableColumnsRef"
        :data="tableDataRef"
        v-bind="args"
        :styles
      />
    </div>
  `
})

TableFixed.args = {
  compact: false,
  bordered: true,
  selectable: false,
  striped: true,
  stickyHeader: false,
  fixedHeader: false,
  // calculateHeight: true,
  // calculateHeightOffset: 0,
  // fixedHeaderOffset: 0,
}