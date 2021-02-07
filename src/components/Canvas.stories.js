import Canvas from './Canvas'

const container = () => {
  return {
    template: '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Ccanvas',
  component: Canvas,
  decorators: [container],
  argTypes: {

  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = (args, { argTypes }) => ({
  components: { Canvas },
  props: Object.keys(argTypes),
  template: `
  <Canvas />
  `
})

export const Ccanvas = Template.bind({})

// OLD
// export default {
//   title: 'Components/Canvas',
//   component: Canvas,
//   decorators: [withKnobs, container]
// }

// export const Basic = () => ({
//   components: { Canvas },
//   template: '<Canvas />',
//   props: {
//   },
//   methods: {}
// })
