import EpControlBar from './EpControlBar'

export default {
  title: 'Components/Control Bar',
  component: EpControlBar,
  argTypes: {

  },
  parameters: {
    controls: { hideNoControlsWarning: true },
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
