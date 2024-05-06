import { centered } from '../../helpers/decorators.js'
import EpStatusIndicator from '@/components/status-indicator/EpStatusIndicator.vue'
import EpTooltip from '@/components/tooltip/EpTooltip.vue'

export default {
  title: 'Components/Status Indicator',
  component: EpStatusIndicator,
  decorators: [centered],
  argTypes: {
    styles: {
      name: 'Styles',
      control: {
        type: 'object'
      }
    },
  }
}

export const StatusIndicator = args => ({
  components: { EpStatusIndicator, EpTooltip },
  setup() {
    return { args }
  },
  template: `
    <ep-tooltip>
      <template #tooltip>
        <div>
          <p>Last active 2 hours ago</p>
        </div>
      </template>
      <ep-status-indicator v-bind="args">
        Carlos Picah
      </ep-status-indicator>
    </ep-tooltip>
  `
})

StatusIndicator.args = {
  styles: {
    '--ep-status-indicator-dot-bg': 'purple',
    '--ep-status-indicator-dot-border': 'purple',
  }
}