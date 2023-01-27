import { padded } from '@/helpers/decorators'
import EpColorTest from './EpColorTest'

export default {
  title: 'Style/Color Test',
  component: EpColorTest,
  decorators: [padded],
  argTypes: {
    hue: {
      name: 'Hue',
      control: {
        type: 'range',
        min: 0,
        max: 360,
        step: 1
      }
    },
    saturation: {
      name: 'Saturation',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    },
    lightness: {
      name: 'Lightness',
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = args => ({
  components: { EpColorTest },
  setup() {
    return { args }
  },
  template: '<ep-color-test v-bind="args" />'
})

export const ColorTest = Template.bind({})

ColorTest.args = {
  hue: 220,
  saturation: 100,
  lightness: 60
}
