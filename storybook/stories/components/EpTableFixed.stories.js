import EpTable from '@/components/table/EpTable.vue'

import { surfaceOverflow } from '../../helpers/decorators.js'
import EpTableFixedStory from './EpTableFixedStory.vue'

export default {
  title: 'Components/Table/Fixed Header',
  component: EpTable,
  decorators: [surfaceOverflow],
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
      table: { disable: true }
    },
    bordered: {
      table: { disable: true }
    },
    selectable: {
      table: { disable: true }
    },
    striped: {
      table: { disable: true }
    },
    stickyHeader: {
      table: { disable: true }
    },
    fixedHeader: {
      table: { disable: true }
    },
    showActionsMenu: {
      table: { disable: true }
    },
  }
}

export const FixedHeader = (args) => ({
  components: {
    EpTableFixedStory,
  },
  setup() {
    return {
      args,
    }
  },
  template: `<ep-table-fixed-story v-bind="args" />`
})

FixedHeader.args = {
  compact: false,
  bordered: true,
  selectable: false,
  striped: true,
  stickyHeader: false,
  fixedHeader: false,
  hiddenColumns: ['id'],
  showActionsMenu: false,
}