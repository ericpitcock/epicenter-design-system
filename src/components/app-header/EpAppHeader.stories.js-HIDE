import EpAppHeader from './EpAppHeader'
import EpSidebarLayout from '@/templates/sidebar/EpSidebarLayout'

export default {
  title: 'Components/App Header',
  component: EpAppHeader,
  argTypes: {},
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = args => ({
  components: {
    EpAppHeader,
    EpSidebarLayout
  },
  setup() {
    return { args }
  },
  template: `
  <ep-sidebar-layout>
    <template #app-header>
    <ep-app-header>
      app header
    </ep-app-header>
    </template>
  </ep-sidebar-layout>
  `
})

export const AppHeader = Template.bind({})
