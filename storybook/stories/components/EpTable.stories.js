import { surface } from '../../helpers/decorators.js'
import EpTableStory from './EpTableStory.vue'

export default {
  title: 'Components/Table',
  component: EpTableStory,
  decorators: [surface],
  argTypes: {
    columns: {
      table: { disable: true }
    },
    data: {
      table: { disable: true }
    },
    hiddenColumns: {
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
    fixedHeader: {
      table: { disable: true }
    },
    stickyHeader: {
      name: 'Sticky Header',
      control: {
        type: 'boolean'
      }
    },
    showActionsMenu: {
      name: 'Show Actions Menu',
      control: {
        type: 'boolean'
      }
    },
  }
}

export const Table = (args) => ({
  components: {
    EpTableStory
  },
  setup() {
    return {
      args
    }
  },
  template: `<ep-table-story v-bind="args" />`,
})

Table.args = {
  hiddenColumns: ['id'],
  compact: false,
  bordered: true,
  selectable: true,
  striped: true,
  stickyHeader: true,
  showActionsMenu: true,
}
