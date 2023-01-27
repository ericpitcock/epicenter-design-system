import EpInsight from './EpInsight'

export default {
  title: 'Templates/Sidebar',
  component: EpInsight,
  argTypes: {
    layoutOption: {
      name: 'Full Screen Content',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = args => ({
  components: { EpInsight },
  setup() {
    return { args }
  },
  template: '<ep-insight v-bind="args" />'
})

export const Sidebar = Template.bind({})
