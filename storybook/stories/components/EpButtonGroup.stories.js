import EpButtonGroup from '@/components/button-group/EpButtonGroup.vue'

import { centeredBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Button/Button Group',
  component: EpButtonGroup,
  decorators: [centeredBg],
  argTypes: {
    items: {
      table: { disable: true }
    },
    active: {
      table: { disable: true }
    },
    activeClass: {
      table: { disable: true }
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
    // events
    click: {
      table: { disable: true }
    }
  }
}

export const ButtonGroup = args => ({
  components: { EpButtonGroup },
  setup() {
    return { args }
  },
  template: '<ep-button-group v-bind="args" />'
})

ButtonGroup.args = {
  items: [
    {
      label: 'Taco'
    },
    {
      label: 'Burrito',
      disabled: true
    },
    {
      label: 'Enchilada'
    },
  ],
  active: 0,
  activeClass: 'ep-button-var--primary',
  size: 'large',
}