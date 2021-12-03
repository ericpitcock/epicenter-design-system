import EpSidebar from './EpSidebar'

const container = () => {
  return {
    template: '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Sidebar',
  component: EpSidebar,
  // decorators: [container],
  argTypes: {
    minimized: {
      name: 'Minimized',
      control: 'boolean',
      defaultValue: false
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args) => ({
  components: { EpSidebar },
  setup() {
    return { args }
  },
  template: '<ep-sidebar v-bind="args" />'
})

export const Sidebar = Template.bind({})
