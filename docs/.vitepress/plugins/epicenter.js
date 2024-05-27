// docs/.vitepress/plugins/epicenter.js
import { createApp } from 'vue'
import Epicenter from '../../../packages/epicenter-vue-components/index.js'
import '../../../packages/epicenter-styles/dist/epicenter-design-system.css'

export default {
  install(app) {
    app.use(Epicenter)
  }
}
