import vueRouter from 'storybook-vue3-router'
import EpInsight from './EpInsight'
import EpLogin from './EpLogin'
// import Dashboard from './views/Dashboard'
import Assets from './views/Assets'
// import Investigations from './views/Investigations'
// import ServiceInfo from './views/ServiceInfo'
// import Reports from './views/Reports'
// import Files from './views/Files'
import UserSettings from './views/UserSettings'
import Temp from './views/Temp'

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
    component: Temp
  },
  {
    path: '/assets',
    name: 'assets',
    component: Assets
  },
  {
    path: '/investigations',
    name: 'investigations',
    component: Temp
  },
  {
    path: '/service-info',
    name: 'service-info',
    component: Temp
  },
  {
    path: '/reports',
    name: 'reports',
    component: Temp
  },
  {
    path: '/files',
    name: 'files',
    component: Temp
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
