import { padded } from '../../../helpers/decorators'
import EpColor from './EpColor'

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
