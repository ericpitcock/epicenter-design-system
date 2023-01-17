// storybook tooltip component story
import { centered } from '@/helpers/decorators'
import EpTooltip from './EpTooltip'

export default {
  title: 'Tooltip',
  component: EpTooltip,
  decorators: [centered],
  argTypes: {
    title: {
      name: 'Title',
      control: {
        type: 'text'
      },
      defaultValue: 'This is the tooltip'
    },
    placement: {
      name: 'Placement',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end'
      ],
      control: {
        type: 'select'
      },
      defaultValue: 'top'
    },
    trigger: {
      name: 'Trigger',
      options: ['hover', 'click', 'focus'],
      control: {
        type: 'select'
      },
      defaultValue: 'hover'
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    visibleArrow: {
      name: 'Visible Arrow',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    popperClass: {
      name: 'Popper Class',
      control: {
        type: 'text'
      },
      defaultValue: ''
    },
    openDelay: {
      name: 'Open Delay',
      control: {
        type: 'number'
      },
      defaultValue: 0
    },
    manualMode: {
      name: 'Manual Mode',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    popperOptions: {
      name: 'Popper Options',
      control: {
        type: 'object'
      },
      defaultValue: {}
    }
  }
}

const Template = (args) => ({
  components: { EpTooltip },
  setup() {
    return { args }
  },
  template: `
    <div style="margin: 100px 0 0 100px;">
      <ep-tooltip v-bind="args">
        <span>Hover me</span>
      </ep-tooltip>
    </div>
  `
})

export const Tooltip = Template.bind({})