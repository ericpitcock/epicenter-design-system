import EpTabs from './EpTabs'

export default {
  title: 'Components/Tabs',
  component: EpTabs,
  argTypes: {
    
  }
}

const Template = (args) => ({
  components: { EpTabs },
  setup() {
    return { args }
  },
  template: '<ep-tabs v-bind="args" />'
})

export const Tabs = Template.bind({})
