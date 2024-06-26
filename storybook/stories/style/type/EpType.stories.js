import { paddedBg } from '../../../helpers/decorators.js'
import EpType from './EpType.vue'

export default {
  title: 'Style/Type',
  component: EpType,
  decorators: [paddedBg],
  argTypes: {

  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

export const Type = (args) => ({
  components: { EpType },
  setup() {
    return { args }
  },
  template: '<ep-type />'
})
