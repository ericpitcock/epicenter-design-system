// import { padded } from '@/helpers/decorators'
import EpGrayscale from './EpGrayscale'

export default {
  title: 'Style/Grayscale',
  component: EpGrayscale,
  decorators: [padded],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args) => ({
  components: { EpGrayscale },
  setup() {
    return { args }
  },
  template: `
  <ep-grayscale />
  `
})

export const Grayscale = Template.bind({})
