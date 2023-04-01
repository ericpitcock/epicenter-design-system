import { centered } from '../../helpers/decorators'
import EpButtonGroup from '@/components/button-group/EpButtonGroup.vue'

export default {
  title: 'Components/Button/Button Group',
  component: EpButtonGroup,
  decorators: [centered],
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      }
    },
    size: {
      name: 'Size',
      options: ['small', 'default', 'large', 'xlarge'],
      control: {
        type: 'radio',
        labels: {
          small: 'Small',
          default: 'Default',
          large: 'Large',
          xlarge: 'X-Large'
        }
      }
    },
    items: {
      table: {
        disable: true
      }
    },
    active: {
      table: {
        disable: true
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
  size: 'large',
}