import Playground from './Playground'

// const container = () => {
//   return {
//     template: '<div style="height: 100%; padding: 30px;"><story/></div>'
//   }
// }

export default {
  title: 'Sandbox',
  component: Playground,
  // decorators: [container],
  argTypes: {

  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = (args, { argTypes }) => ({
  components: { Playground },
  props: Object.keys(argTypes),
  template: `
  <Playground />
  `
})

export const Sandbox = Template.bind({})
