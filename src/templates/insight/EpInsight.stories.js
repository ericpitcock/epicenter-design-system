import vueRouter from 'storybook-vue3-router'
import EpInsight from './EpInsight'
import EpLogin from './EpLogin'
import Dashboard from './views/Dashboard'
import Assets from './views/Assets'

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
  // import all components that are used in the routes
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
    path: '/login',
    name: 'login',
    component: EpLogin
  }
]

Sidebar.decorators = [
  vueRouter(customRoutes)
]
