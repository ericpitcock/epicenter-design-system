import { paddedBg } from '../../../helpers/decorators.js'
import EpPrimaryColorVariants from './EpPrimaryColorVariants.vue'

export default {
  title: 'Style/Primary Color Variants',
  component: EpPrimaryColorVariants,
  decorators: [paddedBg],
  argTypes: {
    hue: {
      control: { type: 'range', min: 0, max: 360, step: 1 },
      description: 'Base hue value for the color variants',
      defaultValue: 257
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: false }
  }
}

export const PrimaryColorVariants = (args) => ({
  components: { EpPrimaryColorVariants },
  setup() {
    return { args }
  },
  template: '<ep-primary-color-variants :hue="args.hue" />'
})

PrimaryColorVariants.args = {
  hue: 257
}
