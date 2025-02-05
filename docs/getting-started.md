# Getting Started

## Install via NPM

```shell
npm install @ericpitcock/epicenter-vue-components
npm install @ericpitcock/epicenter-styles
```

## Import _all_ components globally

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import Epicenter from '@ericpitcock/epicenter-vue-components'

import '@ericpitcock/epicenter-styles'
// optionally import app variables and overrides
import './assets/app.scss'

const app = createApp(App)

app.use(Epicenter)
app.mount('#app')
```
This will make all components available globally — no need to import indivdually, but you can if you want to:

## Import _some_ components globally

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import {
  EpButton,
  EpContainer,
  EpDivider,
  EpMap,
  EpSelect,
  EpThreatCaseMap,
  EpThemeToggle,
  EpToggle,
  EpUpsetPlot,
} from '@ericpitcock/epicenter-vue-components'

const components = {
  EpButton,
  EpContainer,
  EpDivider,
  EpMap,
  EpSelect,
  EpThreatCaseMap,
  EpThemeToggle,
  EpToggle,
  EpUpsetPlot,
}

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component)
})

import '@ericpitcock/epicenter-styles'
// optionally import app variables and overrides
import './assets/app.scss'

const app = createApp(App)

app.mount('#app')
```

## Import components individually

```vue
<!-- App.vue -->
<template>
  ...
  <ep-button v-bind="buttonProps" />
  ...
</template>

<script setup>
  import { EpButton } from '@ericpitcock/epicenter-vue-components'

  const buttonProps = {
    label: 'Click me'
    size: 'large'
    iconLeft: { name: 'circle' }
  }
</script>
```
