// import { padded } from '@/helpers/decorators'
import EpColor from './EpColor'

export default {
  title: 'Style/Color',
  component: EpColor,
  // decorators: [padded],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args) => ({
  components: { EpColor },
  setup() {
    return { args }
  },
  template: `
  <EpColor />
  `
})

export const Color = Template.bind({})

//OLD
// export default {
//   title: 'Style/EpColor',
//   component: EpColor,
//   decorators: [withKnobs]
// }

// export const Palette = () => ({
//   components: { EpColor },
//   template: '<EpColor />',
//   props: { },
//   methods: { }
// })
