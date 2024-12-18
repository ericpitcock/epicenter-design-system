```javascript
// Epicenter Design System

{ Vue, React } = componentsForApps
```

## What is Epicenter Design System?

Epicenter Design System is a collection of Vue 3 (and soon, React) components and styles for web apps.

This design system is being created for use in [Eric’s](https://www.ericpitcock.com) personal projects and serves as a training ground to stay current on best practices for creating inclusive and user-friendly experiences for all. Check out the Storybook at [epicenter.design](https://epicenter.design/?path=/story/intro--intro).

> Note: This is a work in progress and should be considered unstable. Don’t go tossing this in your mission-critical applications.

## How do I use it?

### Install

```
npm install @ericpitcock/epicenter-vue-components
npm install @ericpitcock/epicenter-styles
```

### Vue 3

```javascript
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

```html
<!-- App.vue -->
<template>
  ...
  <ep-button v-bind="buttonProps" />
  ...
</template>

<script setup>
import { EpButton } from '@ericpitcock/epicenter-vue-components'

const buttonProps = {
  label: 'Click me',
  size: 'large',
  iconLeft: { name: 'circle' }
}
</script>
```
