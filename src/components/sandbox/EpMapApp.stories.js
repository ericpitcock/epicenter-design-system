import EpMapApp from './EpMapApp'

const container = () => {
  return {
    template: '<div style="height: 100vh; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Sandbox/Map App',
  component: EpMapApp,
  decorators: [container],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpMapApp },
  props: Object.keys(argTypes),
  template: `
  <ep-map-app />
  `
})

export const MapApp = Template.bind({})
