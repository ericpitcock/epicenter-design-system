import AppFrameSidebar from './AppFrameSidebar'

const container = () => {
  return {
    template: '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'App Frames/Sidebar',
  component: AppFrameSidebar,
  // decorators: [container],
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = (args, { argTypes }) => ({
  components: { AppFrameSidebar },
  props: Object.keys(argTypes),
  template: `
  <AppFrameSidebar />
  `
})

export const Sidebar = Template.bind({})
