import EpTooltip from '@/components/tooltip/EpTooltip'
import { centered } from '../../helpers/decorators'

export default {
  title: 'Components/Tooltip',
  component: EpTooltip,
  decorators: [centered],
}

export const Tooltip = args => ({
  components: { EpTooltip },
  setup() {
    return { args }
  },
  template: `
    <ep-tooltip>
      <template #tooltip>
        <div>
          <p>Tooltip content</p>
        </div>
      </template>
      <button>Hover me</button>
    </ep-tooltip>
  `
})
