import { centered } from '../../helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'

export default {
  title: 'Components/Action Bar',
  component: EpActionBar,
  decorators: [centered],
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
