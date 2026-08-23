import { EpToggle } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { centeredSurface } from '@sb/helpers/decorators.js'

export default {
  title: 'Components/Toggle',
  component: EpToggle,
  decorators: [withCssProps('toggle'), centeredSurface],
  argTypes: {
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: {
      name: 'Label',
      control: 'text'
    },
    size: {
      name: 'Size',
      options: ['small', 'default', 'large'],
      control: {
        type: 'select',
      }
    },
  
    ...cssPropArgTypes('toggle'),
  }
}

export const Toggle = args => ({
  components: { EpToggle },
  setup() {
    const toggle = () => {
      args.isActive = !args.isActive
    }
    return { args, toggle }
  },
  template: '<ep-toggle v-bind="args" @toggle="toggle" />'
})

Toggle.args = {
  isActive: false,
  disabled: false,
  label: 'Toggle',
  size: 'default'
}