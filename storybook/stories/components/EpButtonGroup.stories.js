import { centered } from '../../helpers/decorators'
import EpButtonGroup from '@/components/button-group/EpButtonGroup.vue'

export default {
  title: 'Components/Button/Button Group',
  component: EpButtonGroup,
  decorators: [centered],
  argTypes: {
    items: {
      control: {
        type: 'array',
      }
    },
    selected: {
      control: {
        type: 'number',
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      }
    },
  }
}

export const ButtonGroup = args => ({
  components: { EpButtonGroup },
  setup() {
    return { args };
  },
  template: '<ep-button-group v-bind="args" />'
})

ButtonGroup.args = {
  items: [
    { label: 'Button 1' },
    { label: 'Button 2' },
    { label: 'Button 3' }
  ],
  selected: 0,
  disabled: false,
  size: 'default',
}