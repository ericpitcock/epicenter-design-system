import EpBrowserFrame from '@/components/browser-frame/EpBrowserFrame.vue'

import { paddedBg } from '../../helpers/decorators.js'

export default {
  title: 'Components/Browser Frame',
  component: EpBrowserFrame,
  decorators: [paddedBg],
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
    imageSrc: {
      name: 'Image Source',
      control: {
        type: 'text',
      }
    },
    imageAlt: {
      name: 'Image Alt Text',
      control: {
        type: 'text',
      }
    },
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
  url: 'https://color.ericpitcock.com',
  imageSrc: './color-desktop.png',
  imageAlt: 'Color Palette Generator',
}