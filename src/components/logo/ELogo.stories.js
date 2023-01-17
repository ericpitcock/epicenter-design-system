import { centered } from '@/helpers/decorators'
import E from './E.vue'

export default {
  title: 'Logo',
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
      defaultValue: 100
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
      defaultValue: 'var(--logo-white)'
    },
    faceColor: {
      name: 'Face Color',
      control: {
        type: 'color'
      },
      defaultValue: 'var(--logo-gold)'
    },
    highlightColor: {
      name: 'Highlight Color',
      control: {
        type: 'color'
      },
      defaultValue: 'var(--logo-yellow)'
    },
    shadowColor: {
      name: 'Shadow Color',
      control: {
        type: 'color'
      },
      defaultValue: 'var(--logo-gray)'
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
