import EpGrayscale from './EpGrayscale'

const container = () => {
  return {
    template: '<div style="padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Style/Grayscale',
  component: EpGrayscale,
  decorators: [container],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpGrayscale },
  props: Object.keys(argTypes),
  template: `
  <ep-grayscale />
  `
})

export const Grayscale = Template.bind({})

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
