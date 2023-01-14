import { centered } from '@/helpers/decorators'
import E from './E.vue'

export default {
  title: 'Logo',
  component: E,
  decorators: [centered],
  argTypes: {
    style: {
      name: 'Style',
      options: ['outline', 'full-color'],
      control: {
        type: 'select',
        labels: {
          outline: 'Outline',
          'full-color': 'Full Color'
        }
      },
      defaultValue: 'outline'
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
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20,
        max: 200,
        step: 1
      },
      defaultValue: 100
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
