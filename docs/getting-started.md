# Getting Started

## Install via NPM

```shell
npm install @ericpitcock/epicenter-vue-components
npm install @ericpitcock/epicenter-styles
```

## Import components globally

```js
// main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

import Epicenter from '@ericpitcock/epicenter-vue-components/index.js'

app.use(Epicenter)
app.use(store)
app.use(router)
app.mount('#app')

import '@ericpitcock/epicenter-styles/dist/epicenter-design-system.css'
```

This will make all components available globally — no need to import indivdually, but you can if you want to:

```vue
<!-- App.vue -->
<template>
  ...
  <ep-button v-bind="buttonProps" />
  ...
</template>

<script setup>
  import { computed } from 'vue'
  import { EpButton } from '@ericpitcock/epicenter-vue-components'

  const buttonProps = computed(() =>{
    return {
      label: 'Click me'
      size: 'large'
      iconLeft: { name: 'circle' }
    }
  })
</script>
```
