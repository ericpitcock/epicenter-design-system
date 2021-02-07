import EpControlBar from './EpControlBar'

const container = () => {
  return {
    template: '<div style="height: 61px; margin: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Control Bar',
  component: EpControlBar,
  decorators: [container],
  argTypes: {

  }
}

const Template = (args, { argTypes }) => ({
  components: { EpControlBar },
  props: Object.keys(argTypes),
  template: `
  <EpControlBar />
  `
})

export const ControlBar = Template.bind({})
