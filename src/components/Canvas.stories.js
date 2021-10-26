import Canvas from './Canvas'

// const container = () => {
//   return {
//     template: '<div style="height: 100%; padding: 30px;"><story/></div>'
//   }
// }

export default {
  title: 'Components/Playground',
  component: Canvas,
  // decorators: [container],
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

export const Playground = Template.bind({})
