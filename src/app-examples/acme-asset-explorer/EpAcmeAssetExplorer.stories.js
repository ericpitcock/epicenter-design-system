import vueRouter from 'storybook-vue3-router'
import EpAcmeAssetExplorer from './EpAcmeAssetExplorer'
import EpAcmeAssetExplorerLogin from './EpAcmeAssetExplorerLogin'
import Dashboard from './views/Dashboard'
import Assets from './views/Assets'
import Vulnerabilities from './views/Vulnerabilities'
import ServiceInfo from './views/ServiceInfo'
import Reports from './views/Reports'
import Files from './views/Files'
import UserSettings from './views/UserSettings'

export default {
  title: 'App Examples/Acme Asset Explorer',
  component: EpAcmeAssetExplorer,
  argTypes: {
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

const Template = args => ({
  components: { EpAcmeAssetExplorer },
  setup() {
    return { args }
  },
  template: '<ep-acme-asset-explorer v-bind="args" />'
})

export const AcmeAssetExplorer = Template.bind({})

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
    path: '/vulnerabilities',
    name: 'vulnerabilities',
    component: Vulnerabilities
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
    component: EpAcmeAssetExplorerLogin
  }
]

AcmeAssetExplorer.decorators = [
  vueRouter(customRoutes)
]
