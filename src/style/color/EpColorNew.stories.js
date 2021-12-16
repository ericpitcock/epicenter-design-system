import { padded } from '@/helpers/decorators'
import EpColorNew from './EpColorNew'

export default {
  title: 'Style/ColorNew',
  component: EpColorNew,
  decorators: [padded],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args) => ({
  components: { EpColorNew },
  setup() {
    return { args }
  },
  template: '<ep-color-new />'
})

export const ColorNew = Template.bind({})
