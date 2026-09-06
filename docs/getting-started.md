# Getting Started

## Install via NPM

```shell
npm install @ericpitcock/epicenter-components-vue
npm install @ericpitcock/epicenter-styles
```

## Stylesheets

`@ericpitcock/epicenter-styles` is the only stylesheet the design system asks you to
import. The component packages ship **no CSS of their own** — Vue SFCs carry no `<style>`
block on purpose, so that consumers can override any rule without `:deep()`.

```js
import '@ericpitcock/epicenter-styles'
```

Some components wrap a third-party library, and those libraries each have their own
stylesheet. The rule is not uniform, so here it is in full:

| Component | Library | What you import |
|---|---|---|
| `EpMap` | `mapbox-gl` | **`import 'mapbox-gl/dist/mapbox-gl.css'`** — required |
| `EpDatePicker` | `flatpickr` | **Nothing.** Do not import flatpickr's CSS |
| `EpChart` | `highcharts` | Nothing — Highcharts styles its own SVG |
| `EpDonutChart` | `d3` | Nothing — d3 ships no stylesheet |
| `EpCodeView` | `shiki` | Nothing — Shiki emits inline styles |

### Why `EpMap` is your job now

The component used to import mapbox's stylesheet itself. It cannot any more. These five
libraries are **optional peer dependencies**, and a bundler resolving this package can
handle the bare specifier of one you have not installed — Vite substitutes a stub that
throws only if the code actually runs — but it cannot resolve a **subpath** of one.
`mapbox-gl/dist/mapbox-gl.css` becomes a `__vite-optional-peer-dep:` specifier that
Vite's own import-analysis then refuses, whether the import is static or dynamic. Because
the component sits in the package barrel's graph, that single import broke the dev server
of every app using the design system, including apps with no map anywhere.

Without it the map does not lay out — the canvas collapses and the controls are unstyled.

### Why `EpDatePicker` is not

`epicenter-styles` ships a complete tokenized replacement for flatpickr's stylesheet, so
flatpickr's own CSS is redundant. Worse, it arrives unlayered and therefore outranks
every cascade layer: adding it reverts the calendar to flatpickr's default light theme.
A white calendar on a dark page means something in your app is importing it.

### Optional peers and install size

`d3`, `highcharts`, `mapbox-gl`, `shiki` and `flatpickr` are optional peers, so install
only the ones you use. Note that GitHub Packages drops `peerDependenciesMeta` from its
registry metadata, and npm reads peers from that metadata rather than from the package
itself — so npm installs all five regardless of the `optional` flag. Marking them
optional is still the correct contract; it just does not shrink an `npm install` against
this registry today.

## Import _all_ components globally

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import Epicenter from '@ericpitcock/epicenter-components-vue'

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
} from '@ericpitcock/epicenter-components-vue'

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
  import { EpButton } from '@ericpitcock/epicenter-components-vue'

  const buttonProps = {
    label: 'Click me'
    size: 'large'
    iconLeft: { name: 'circle' }
  }
</script>
```
