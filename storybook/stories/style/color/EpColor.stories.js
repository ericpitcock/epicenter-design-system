import { padded } from '../../../helpers/decorators.js'
import EpColor from './EpColor.vue'

export default {
  title: 'Style/Color',
  component: EpColor,
  decorators: [padded],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

export const Color = (args) => ({
  components: { EpColor },
  setup() {
    return { args }
  },
  template: '<ep-color />'
})
