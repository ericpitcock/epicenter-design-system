`EpMap` wraps Mapbox GL.

## Install mapbox-gl and import its stylesheet

`mapbox-gl` is an **optional peer dependency** — it is not installed for you, and the
component does not import its stylesheet. Both are your app's job:

```shell
npm install mapbox-gl
```

```js
// main.js — anywhere that runs once, before the map renders
import 'mapbox-gl/dist/mapbox-gl.css'
```

::: warning
Without the stylesheet the map will not lay out — the canvas collapses and the controls
are unstyled. This is not optional polish.
:::

The library used to import the stylesheet for you. It cannot any more: a bundler
resolving this package can handle the bare `mapbox-gl` specifier when you have not
installed it, but not a **subpath** of it. Vite rewrites `mapbox-gl/dist/mapbox-gl.css`
to a `__vite-optional-peer-dep:` specifier that its own import-analysis then refuses,
static or dynamic. Because the component sits in the package barrel's graph, that one
import broke the dev server of every app using the design system — including apps with
no map on any screen.

`_map.scss` is written for this arrangement: mapbox's stylesheet arrives unlayered, so
`.mapboxgl-map { position: relative }` outranks anything the design system declares in a
cascade layer. The block is sized rather than pinned with `inset` for that reason.

::: warning
In a Vite app you may also need this in `vite.config.js`:
:::

```js
optimizeDeps: {
  include: ['mapbox-gl'],
},
```

Vite does not pre-bundle `mapbox-gl` by default, which can cause import issues*.

*Headaches galore
