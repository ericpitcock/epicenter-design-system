/* eslint-disable vue/one-component-per-file */
import { vueRouter } from 'storybook-vue3-router'
import routerViewWrapper from '../../helpers/routerViewWrapper.vue'
import { padded } from '../../helpers/decorators.js'
import EpBreadcrumb from '@/components/breadcrumb/EpBreadcrumb.vue'

const Home = {
  template: `
    <div>
      <h2>Home</h2>

      <div style="display: flex; gap: 1em">
        <router-link to="/">Home</router-link>
        <router-link to="/user/1">User 1</router-link>
        <router-link to="/user/2">User 2</router-link>
      </div>
    </div>
  `
}

const User = {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  template: `
    <div>
      <h2>User</h2>
      <p>User id is: {{ id }} </p>

      <div style="display: flex; gap: 1em">
        <router-link to="/">Home</router-link>
      </div>
    </div>
  `
}

export default {
  title: 'Components/Breadcrumb',
  component: routerViewWrapper,
  decorators: [padded],
}

export const Breadcrumb = args => ({
  components: {
    EpBreadcrumb,
    RouterViewWrapper: routerViewWrapper
  },
  setup() {
    return { args }
  },
  // template: '<ep-breadcrumb v-bind="args" />'
  template: `
    <router-view-wrapper>
      <ep-breadcrumb v-bind="args" />
      <div>
        <router-view />
      </div>
    </router-view-wrapper>
  `
})

Breadcrumb.parameters = {
  controls: { hideNoControlsWarning: true }
}

Breadcrumb.decorators = [
  vueRouter([
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User,
      props: true
    }
  ])
]
