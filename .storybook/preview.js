// vuex
// check this out for router https://stackoverflow.com/questions/65875856/how-to-register-global-vue-components-in-storybook
// import Vue from 'vue'
// import { createApp } from 'vue'
import { defineComponent } from 'vue'
import { app } from '@storybook/vue3'
import Vuex from 'vuex'
import store from '../src/store'
// import router from "../src/router";
import { createMemoryHistory, createRouter } from 'vue-router'
// import VueRouter from 'vue-router'

// import { createApp } from 'vue'
app.use(createRouter({
	routes: [],
	history: createMemoryHistory()
}))

// createApp().use(store).use(createRouter()).mount("#app");

// app.use(Vuex)
app.use(store)

const RouterLink = defineComponent({
  name: 'router-link',
  props: {
    to: String,
  },
  template: `
    <a :href="to" v-bind="$attrs"><slot /></a>
  `,
})

app.component('router-link', RouterLink);

// Vue.use(VueRouter)
// app.component('router-link', app.component('RouterLink'))

// global styles
import '!style-loader!css-loader!sass-loader!../src/assets/scss/global.scss'
import '!style-loader!css-loader!sass-loader!../src/assets/scss/storybook.scss'

// export const parameters = {
//   layout: 'fullscreen'
// }

// global decorators
export const decorators = [(story) => ({
  components: { story },
  template: '<story />',
  router: createRouter({
    routes: [],
    history: createMemoryHistory()
  })
})]