import EpColor from './EpColor'

const container = () => {
  return {
    template: '<div style="padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Style/Color',
  component: EpColor,
  decorators: [container],
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
