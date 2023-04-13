import { centered } from '../../helpers/decorators'
import EpBrowserFrame from '@/components/browser-frame/EpBrowserFrame.vue'

export default {
  title: 'Components/Browser Frame',
  component: EpBrowserFrame,
  decorators: [centered],
  argTypes: {
    bigness: {
      name: 'bigness',
      control: {
        type: 'range',
        min: 100,
        max: 1500,
        step: 10
      }
    },
    // imageUrl: {
    //   name: 'Image URL',
    //   control: {
    //     type: 'text',
    //   }
    // },
  },
}

export const BrowserFrame = args => ({
  components: { EpBrowserFrame },
  setup() {
    return { args }
  },
  template: '<ep-browser-frame v-bind="args" />',
})

BrowserFrame.args = {
  bigness: 1200,
}