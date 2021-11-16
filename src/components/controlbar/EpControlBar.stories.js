import EpControlBar from './EpControlBar'

export default {
  title: 'Components/Control Bar',
  component: EpControlBar,
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args) => ({
  components: { EpControlBar },
  setup() {
    return { args }
  },
  template: '<ep-control-bar />'
})

export const ControlBar = Template.bind({})
