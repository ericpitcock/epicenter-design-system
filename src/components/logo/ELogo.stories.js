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
      },
      defaultValue: 200
    },
    strokeWidth: {
      name: 'Stroke width',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1
      },
      defaultValue: 3
    },
    strokeColor: {
      name: 'Stroke Color',
      control: {
        type: 'color'
      },
      defaultValue: '#fff'
    },
    faceColor: {
      name: 'Face Color',
      control: {
        type: 'color'
      },
      defaultValue: '#f99d1c'
    },
    highlightColor: {
      name: 'Highlight Color',
      control: {
        type: 'color'
      },
      defaultValue: '#fdb913'
    },
    shadowColor: {
      name: 'Shadow Color',
      control: {
        type: 'color'
      },
      defaultValue: '#414141'
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
