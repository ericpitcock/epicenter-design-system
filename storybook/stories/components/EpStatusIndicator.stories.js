import { centeredSurface } from '../../helpers/decorators.js'
import EpStatusIndicator from '@/components/status-indicator/EpStatusIndicator.vue'
import EpTooltip from '@/components/tooltip/EpTooltip.vue'
import { computed } from 'vue'

export default {
  title: 'Components/Status Indicator',
  component: EpStatusIndicator,
  decorators: [centeredSurface],
  argTypes: {
    dotColor: {
      name: 'Dot Color',
      control: {
        type: 'color'
      }
    },
    styles: { table: { disable: true } }
  }
}

export const StatusIndicator = args => ({
  components: { EpStatusIndicator, EpTooltip },
  setup() {
    const styles = computed(() => ({
      '--ep-status-indicator-dot-bg': args.dotColor,
      '--ep-status-indicator-dot-border': args.dotColor,
    }))

    return { args, styles }
  },
  template: `
    <ep-tooltip>
      <template #tooltip>
        <div>
          <p>Last active 2 hours ago</p>
        </div>
      </template>
      <ep-status-indicator v-bind="args" :style="styles">
        Carlos Picah
      </ep-status-indicator>
    </ep-tooltip>
  `
})

StatusIndicator.args = {
  dotColor: '#509b0d'
}