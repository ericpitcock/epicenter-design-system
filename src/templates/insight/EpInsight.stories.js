import EpInsight from './EpInsight'

export default {
  title: 'Templates/Sidebar',
  component: EpInsight,
  argTypes: {
    layoutOption: {
      name: 'Layout option',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpInsight },
  props: Object.keys(argTypes),
  template: '<ep-insight v-bind="$props" />'
})

export const Sidebar = Template.bind({})
