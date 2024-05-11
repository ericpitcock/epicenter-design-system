import EpTooltip from '@/components/tooltip/EpTooltip.vue'
import { centeredBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Tooltip',
  component: EpTooltip,
  decorators: [centeredBg],
  argTypes: {
    delay: {
      name: 'Delay',
      control: {
        type: 'number'
      }
    },
  }
}

export const Tooltip = args => ({
  components: { EpTooltip },
  setup() {
    return { args }
  },
  template: `
    <ep-tooltip v-bind="args">
      <template #tooltip>
        <div>
          <p>Tooltip content</p>
        </div>
      </template>
      <button>Hover me</button>
    </ep-tooltip>
  `
})

Tooltip.args = {
  delay: 0
}
