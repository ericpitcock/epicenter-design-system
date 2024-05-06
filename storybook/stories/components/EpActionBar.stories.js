import { centeredSurface } from '../../helpers/decorators.js'
import EpActionBar from '@/components/action-bar/EpActionBar.vue'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs.js'

export default {
  title: 'Components/Action Bar',
  component: EpActionBar,
  decorators: [centeredSurface],
  argTypes: {
    items: {
      table: {
        disable: true
      }
    },
    showDropdownOnHover: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const ActionBar = args => ({
  components: {
    EpActionBar
  },
  setup() {
    return { args }
  },
  template: '<ep-action-bar v-bind="args" />'
})

ActionBar.args = { showDropdownOnHover: true, ...commonActionBarArgs }
