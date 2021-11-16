import EpInsight from './EpInsight'

const container = () => {
  return {
    template: '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Insight/App',
  component: EpInsight,
  // decorators: [container],
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
