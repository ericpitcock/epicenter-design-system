import EpInsight from './EpInsight'

const container = () => {
  return {
    template: '<div style="display: block; width: 100vw; height: 100vh;"><story/></div>'
  }
}

export default {
  title: 'Insight/App',
  component: EpInsight,
  decorators: [container],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args) => ({
  components: { EpInsight },
  setup() {
    return { args }
  },
  template: '<ep-insight />'
})

export const App = Template.bind({})
