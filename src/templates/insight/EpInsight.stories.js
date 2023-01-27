import vueRouter from 'storybook-vue3-router'
import EpInsight from './EpInsight'
import Dashboard from './Dashboard'

export default {
  title: 'Templates/Sidebar',
  component: EpInsight,
  argTypes: {
    layoutOption: {
      name: 'Full Screen Content',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    }
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
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutComponent
  // }
]

Sidebar.decorators = [
  vueRouter(customRoutes)
]
