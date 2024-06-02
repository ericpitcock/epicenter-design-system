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

    onMounted(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
          args.fixedHeader = true
        }
        if (args.fixedHeader) {
          // set value to height of thead
          if (window.scrollY <= 44.5) {
            args.fixedHeader = false
          }
        }
      })
    })

    return {
      args,
      styles,
      tableColumnsRef,
      tableDataRef,
    }
  },
  template: `
    <div style="width: 100vw; height: 100vh;">
      <div style="height: 100px; background-color: lightblue;">
      this is a fake header
      </div>
      <ep-table
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