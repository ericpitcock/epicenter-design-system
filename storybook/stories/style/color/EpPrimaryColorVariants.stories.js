import { padded } from '../../../helpers/decorators'
import EpPrimaryColorVariants from './EpPrimaryColorVariants'

export default {
  title: 'Style/Primary Color Variants',
  component: EpPrimaryColorVariants,
  decorators: [padded],
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
