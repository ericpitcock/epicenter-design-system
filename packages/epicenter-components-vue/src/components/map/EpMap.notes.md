::: warning
In order to use `EpMap` in a Vite app, you must add this to `vite.config.js`:
:::

```js
optimizeDeps: {
  include: ['mapbox-gl'],
},
```

This is because Vite does not pre-bundle `mapbox-gl` by default, which can cause import issues*.

*Headaches galore