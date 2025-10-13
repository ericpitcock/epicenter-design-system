import { computed } from 'vue'

import GradientBox from './GradientBox.vue'

export default {
  title: 'Components/Gradients',
  component: GradientBox,
  argTypes: {
    gradientType: {
      name: 'Gradient Type',
      options: [
        'Linear',
        'Radial',
        'Conic',
        'Repeating Linear',
        'Repeating Radial',
        'Repeating Conic'
      ],
      control: {
        type: 'radio'
      }
    }
  }
}

const gradients = {
  Linear: 'linear-gradient(to right, red, blue)',
  Radial: 'radial-gradient(circle, red, blue)',
  Conic: 'conic-gradient(red, yellow, green)',
  'Repeating Linear': 'repeating-linear-gradient(45deg, red 10px, blue 20px)',
  'Repeating Radial': 'repeating-radial-gradient(circle, red 10px, blue 20px)',
  'Repeating Conic': 'repeating-conic-gradient(red 10% 20%, yellow 20% 40%)'
}

export const Gradients = (args) => ({
  components: { GradientBox },
  setup() {
    const gradient = computed(() => gradients[args.gradientType] || gradients.Linear)
    return { args, gradient }
  },
  template: `<GradientBox :gradient="gradient">{{ args.gradientType }}</GradientBox>`
})

Gradients.args = {
  gradientType: 'Linear'
}