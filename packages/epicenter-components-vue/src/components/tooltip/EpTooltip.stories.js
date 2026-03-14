import { centeredBg } from '@sb/helpers/decorators.js'

import EpTooltip from '@/components/tooltip/EpTooltip.vue'

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
    position: {
      name: 'Position',
      control: {
        type: 'select',
      },
      options: [
        'top left',
        'top center',
        'top right',
        'right top',
        'right center',
        'right bottom',
        'bottom left',
        'bottom center',
        'bottom right',
        'left top',
        'left center',
        'left bottom',
      ]
    },
    dismissOnClick: {
      name: 'Dismiss on Click',
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      }
    },
    offsetX: {
      name: 'Offset X',
      control: {
        type: 'text'
      }
    },
    offsetY: {
      name: 'Offset Y',
      control: {
        type: 'text'
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
    <ep-tooltip
      v-bind="args"
      :style="{
        '--ep-tooltip-offset-x': args.offsetX,
        '--ep-tooltip-offset-y': args.offsetY,
      }"
    >
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
  delay: 0,
  position: 'top center',
  dismissOnClick: false,
  disabled: false,
  offsetX: '0px',
  offsetY: '0px',
}
