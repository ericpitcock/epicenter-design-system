import { EpStatusIndicator, EpTooltip } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { centeredSurface } from '@sb/helpers/decorators.js'
import { computed } from 'vue'

export default {
  title: 'Components/Status Indicator',
  component: EpStatusIndicator,
  decorators: [withCssProps('status-indicator'), centeredSurface],
  argTypes: {
    dotColor: {
      name: 'Dot Color',
      control: {
        type: 'color'
      }
    },
    pulse: {
      name: 'Pulse',
      control: {
        type: 'boolean'
      }
    },
  
    ...cssPropArgTypes('status-indicator'),
  }
}

export const StatusIndicator = args => ({
  components: { EpStatusIndicator, EpTooltip },
  setup() {
    const styles = computed(() => ({
      '--ep-status-indicator-dot-bg-color': args.dotColor,
      '--ep-status-indicator-dot-border-color': args.dotColor,
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
  dotColor: '#509b0d',
  pulse: false,
}