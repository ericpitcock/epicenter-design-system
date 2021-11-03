import EpSandbox from './EpSandbox'

const container = () => {
  return {
    template: '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Sandbox',
  component: EpSandbox,
  decorators: [container],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpSandbox },
  props: Object.keys(argTypes),
  template: `
  <ep-sandbox />
  `
})

export const Sandbox = Template.bind({})
