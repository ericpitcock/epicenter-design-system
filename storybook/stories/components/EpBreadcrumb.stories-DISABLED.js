/* eslint-disable vue/one-component-per-file */
// import { useRoute } from 'vue-router'
// import routerViewWrapper from '../../helpers/routerViewWrapper.vue'
import { paddedBg } from '../../helpers/decorators.js'
import EpBreadcrumb from '@/components/breadcrumb/EpBreadcrumb.vue'

const Home = {
  template: `
    <div>
      <div style="display: flex; flex-direction: column; gap: 1em">
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
      <div style="display: flex; flex-direction: column; gap: 1em">
        <router-link to="/">Home</router-link>
        <router-link to="/user/1">User 1</router-link>
        <router-link to="/user/2">User 2</router-link>
      </div>
    </div>
  `
}

const route = useRoute()

console.log('route', route)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      breadcrumb: 'Home'
    }
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
    props: true,
    // meta breadcrumbs using route params
    meta() {
      return {
        breadcrumb: `User ${route.params.id}`
      }
    }
  }
]

export default {
  title: 'Components/Breadcrumb',
  component: routerViewWrapper,
  decorators: [paddedBg],
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
      <div style="display: flex; gap: 10em">
        <div>
          <router-view />
        </div>
        <ep-breadcrumb v-bind="args" />
      </div>
    </router-view-wrapper>
  `
})

Breadcrumb.parameters = {
  controls: { hideNoControlsWarning: true }
}
