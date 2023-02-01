import vueRouter from 'storybook-vue3-router'
import EpInsight from './EpInsight'
import EpLogin from './EpLogin'
import Dashboard from './views/Dashboard'
import Assets from './views/Assets'
import Investigations from './views/Investigations'
import ServiceInfo from './views/ServiceInfo'
import Reports from './views/Reports'
import Files from './views/Files'
import UserSettings from './views/UserSettings'

export default {
  title: 'Templates/Sidebar',
  component: EpInsight,
  argTypes: {
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

const customRoutes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/assets',
    name: 'assets',
    component: Assets
  },
  {
    path: '/investigations',
    name: 'investigations',
    component: Investigations
  },
  {
    path: '/service-info',
    name: 'service-info',
    component: ServiceInfo
  },
  {
    path: '/reports',
    name: 'reports',
    component: Reports
  },
  {
    path: '/files',
    name: 'files',
    component: Files
  },
  {
    path: '/settings',
    name: 'settings',
    component: UserSettings
  },
  {
    path: '/login',
    name: 'login',
    component: EpLogin
  }
]

Sidebar.decorators = [
  vueRouter(customRoutes)
]
