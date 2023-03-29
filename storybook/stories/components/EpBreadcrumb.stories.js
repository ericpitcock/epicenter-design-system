import vueRouter from 'storybook-vue3-router'
import { padded } from '../../helpers/decorators'
import EpBreadcrumb from '@/components/breadcrumb/EpBreadcrumb.vue'

export default {
  title: 'Components/Breadcrumb',
  component: EpBreadcrumb,
  decorators: [padded],
  argTypes: {
    staticBreadcrumbs: { table: { disable: true } },
    type: { table: { disable: true } }
  }
}

export const Breadcrumb = args => ({
  components: {
    EpBreadcrumb
  },
  setup() {
    return { args }
  },
  template: '<ep-breadcrumb v-bind="args" />'
})

Breadcrumb.args = {
  staticBreadcrumbs: [
    {
      text: 'Home',
      href: '#'
    },
    {
      text: 'Library',
      href: '#'
    },
    {
      text: 'Data',
      href: '#'
    }
  ],
  type: 'static'
}

Breadcrumb.parameters = {
  controls: { hideNoControlsWarning: true }
}

Breadcrumb.decorators = [
  vueRouter()
]