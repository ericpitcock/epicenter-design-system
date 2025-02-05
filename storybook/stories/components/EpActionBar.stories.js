import { centeredSurface } from '../../helpers/decorators.js'
import EpActionBar from '@/components/action-bar/EpActionBar.vue'
import commonActionBarArgs from '../../helpers/commonActionBarArgs.js'

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
  }
}

export const ActionBar = args => ({
  components: {
    EpActionBar
  },
  setup() {
    const onClick = (item) => {
      if (item.action) item.action(item)
    }
    return { args, onClick }
  },
  template: '<ep-action-bar v-bind="args" @click="onClick" />'
})

ActionBar.args = {
  ...commonActionBarArgs
}
