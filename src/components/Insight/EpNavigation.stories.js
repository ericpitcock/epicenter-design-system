import EpNavigation from './EpNavigation'

const container = () => {
  return {
    template: '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Insight/Navigation',
  component: EpNavigation,
  // decorators: [container],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpNavigation },
  props: Object.keys(argTypes),
  template: '<ep-navigation />'
})

export const Navigation = Template.bind({})