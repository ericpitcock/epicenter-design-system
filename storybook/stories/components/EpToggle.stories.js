import { centered } from '../../helpers/decorators'
import EpToggle from '@/components/toggle/EpToggle.vue'

export default {
  title: 'Components/Toggle',
  component: EpToggle,
  decorators: [centered],
  argTypes: {
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
  }
}

export const Toggle = args => ({
  components: { EpToggle },
  setup() {
    return { args }
  },
  template: '<ep-toggle v-bind="args" />'
})

Toggle.args = {
  isActive: false,
  disabled: false,
}