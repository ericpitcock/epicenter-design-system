import { centeredSurface } from '../../helpers/decorators.js'
import EpToggle from '@/components/toggle/EpToggle.vue'

export default {
  title: 'Components/Toggle',
  component: EpToggle,
  decorators: [centeredSurface],
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