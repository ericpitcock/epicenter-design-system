import { padded } from '@/helpers/decorators'
import EpSidebar from './EpSidebar'

const navItems = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: ''
  },
  {
    name: 'Assets',
    icon: 'display',
    path: ''
  },
  {
    name: 'Investigations',
    icon: 'target',
    path: ''
  },
  {
    divider: true
  },
  {
    name: 'Risk Rating',
    icon: 'star',
    path: ''
  },
  {
    name: 'Service Info',
    icon: 'info',
    path: ''
  },
  {
    name: 'Reports',
    icon: 'report',
    path: ''
  },
  {
    name: 'Files',
    icon: 'file',
    path: ''
  },
  {
    name: 'Settings',
    icon: 'settings',
    path: ''
  }
]

export default {
  title: 'Sidebar',
  component: EpSidebar,
  decorators: [padded],
  argTypes: {
    navItems: {
      name: 'Nav Items',
      control: 'array',
      defaultValue: navItems
    },
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
