import { EpBrowserFrame } from '@ericpitcock/epicenter-components-vue'
import { cssPropArgTypes, withCssProps } from '@sb/helpers/cssProperties.js'
import { paddedBg } from '@sb/helpers/decorators.js'

export default {
  title: 'Components/Browser Frame',
  component: EpBrowserFrame,
  decorators: [withCssProps('browser-frame'), paddedBg],
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
  
    ...cssPropArgTypes('browser-frame'),
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