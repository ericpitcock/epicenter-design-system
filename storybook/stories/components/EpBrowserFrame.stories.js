import { padded } from '../../helpers/decorators'
import EpBrowserFrame from '@/components/browser-frame/EpBrowserFrame.vue'

export default {
  title: 'Components/Browser Frame',
  component: EpBrowserFrame,
  decorators: [padded],
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
  template: `
  <div style="max-width: 1200px;">
    <ep-browser-frame v-bind="args" />
  </div>
  `
})

BrowserFrame.args = {
  width: '100%',
}