import { centered } from '../../helpers/decorators'
import EpBrowserFrame from '@/components/browser-frame/EpBrowserFrame.vue'

export default {
  title: 'Components/Browser Frame',
  component: EpBrowserFrame,
  decorators: [centered],
  argTypes: {
    width: {
      name: 'Width',
      control: {
        type: 'text',
      }
    },
    url: {
      name: 'URL',
      control: {
        type: 'text',
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
  width: '1200',
}