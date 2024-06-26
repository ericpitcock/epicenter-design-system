import { paddedBg } from '../../../helpers/decorators.js'
import EpPrimaryColorVariants from './EpPrimaryColorVariants.vue'

export default {
  title: 'Style/Primary Color Variants',
  component: EpPrimaryColorVariants,
  decorators: [paddedBg],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

export const PrimaryColorVariants = (args) => ({
  components: { EpPrimaryColorVariants },
  setup() {
    return { args }
  },
  template: '<ep-primary-color-variants />'
})
