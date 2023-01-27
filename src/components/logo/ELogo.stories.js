import { centered } from '@/helpers/decorators'
import E from './E.vue'

export default {
  title: 'Components/Logo',
  component: E,
  decorators: [centered],
  argTypes: {
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20,
        max: 200,
        step: 1
      }
    },
    strokeWidth: {
      name: 'Stroke width',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1
      }
    },
    strokeColor: {
      name: 'Stroke Color',
      control: {
        type: 'color'
      }
    },
    faceColor: {
      name: 'Face Color',
      control: {
        type: 'color'
      }
    },
    highlightColor: {
      name: 'Highlight Color',
      control: {
        type: 'color'
      }
    },
    shadowColor: {
      name: 'Shadow Color',
      control: {
        type: 'color'
      }
    }
  }
}

const Template = args => ({
  components: { E },
  setup() {
    return { args }
  },
  template: `
  <div class="bounding-box" :style="{ width: args.size + 'px' }">
    <e v-bind="args" />
  </div>
  `
})

export const Logo = Template.bind({})

Logo.args = {
  size: 200,
  strokeWidth: 3,
  strokeColor: '#fff',
  faceColor: '#f99d1c',
  highlightColor: '#fdb913',
  shadowColor: '#414141'
}
