import EpColorNew from './EpColorNew'

export default {
  title: 'Style/Color New',
  component: EpColorNew,
  argTypes: {

  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpColorNew },
  props: Object.keys(argTypes),
  template: `
  <EpColorNew />
  `
})

export const ColorNew = Template.bind({})

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
