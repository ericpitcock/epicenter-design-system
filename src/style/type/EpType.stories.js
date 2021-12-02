// import { padded } from '@/helpers/decorators'
import EpType from './EpType'

export default {
  title: 'Style/Type',
  component: EpType,
  // decorators: [padded],
  argTypes: {

  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = (args) => ({
  components: { EpType },
  setup() {
    return { args }
  },
  template: '<ep-type />'
})

export const Type = Template.bind({})
