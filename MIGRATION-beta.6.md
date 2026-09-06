# Migrating to 2.0.0-beta.6

> beta.5 is broken — do not use it. A static `import 'mapbox-gl/dist/mapbox-gl.css'`
> inside `EpMap` compiled into a chunk that the barrel pulls in, so **every** consumer's
> dev server failed to start with `Failed to resolve import
> "__vite-optional-peer-dep:mapbox-gl/dist/mapbox-gl.css:..."`, including apps that never
> render a map. Fixed in beta.6 by section 7 below.

`@ericpitcock/epicenter-components-vue` and `@ericpitcock/epicenter-components-react` now
publish **compiled ESM with type declarations** instead of raw source. This is a breaking
packaging change; the component APIs are unchanged apart from the two React fixes noted
at the bottom.

## What changed

Before, the Vue package copied `src/` to `dist/` verbatim and pointed `main`/`module`/
`exports` at `dist/index.ts`. The React package had no build step at all and published
`src/`. Consumers were therefore compiling the library as if it were their own source,
under their own `tsconfig`.

Now both packages ship `.mjs` + `.d.ts`, with a real exports map and per-component
subpaths.

## 1. Remove any alias into the package

Aliases like this existed only because the package had no subpath exports:

```js
// vite.config.js — DELETE
'@epicenter': fileURLToPath(new URL('./node_modules/@ericpitcock/epicenter-components-vue/dist', import.meta.url)),
```

```jsonc
// jsconfig.json / tsconfig.json — DELETE
"@epicenter/*": ["./node_modules/@ericpitcock/epicenter-components-vue/dist/*"],
```

Rewrite the imports they served to real specifiers:

```diff
-import { useSorting } from '@epicenter/composables'
+import { useSorting } from '@ericpitcock/epicenter-components-vue/composables'
```

The alias pointed at the `dist` *directory*, which no longer resolves — `dist/index.ts` is
gone. Anything still using it will fail at build time, not silently.

## 2. Install the heavy libraries you actually use

`d3`, `highcharts`, `mapbox-gl`, `shiki` and `flatpickr` moved from `dependencies` to
**optional** `peerDependencies`.

> **Caveat on GitHub Packages.** The registry drops `peerDependenciesMeta` from its
> package metadata, and npm resolves peers from that metadata rather than from the
> tarball, so npm installs all five regardless of the `optional` flag. Marking them
> optional is still the correct contract — it just does not shrink an `npm install`
> against this registry today.
>
> Bundle size is a separate question and largely unchanged: four of the five were already
> behind a dynamic `import()` before this release, so they were already split out.
> `shiki` was the exception — `EpCodeView` imported it statically — and is now dynamic
> too.

Install the ones your app needs:

| If you use | Install |
|---|---|
| `EpChart` | `highcharts` |
| `EpDonutChart` | `d3` |
| `EpMap` | `mapbox-gl` |
| `EpCodeView` | `shiki` |
| `EpDatePicker` | `flatpickr` |

They are all loaded through dynamic `import()`, so a missing one fails only when that
component first renders — not at startup.

**Also check your own source.** If your app imports one of these directly it was probably
relying on the transitive dependency and never declared it. `www.ericpitcock.com` imported
`highcharts` in `EpComponentLiveShowcase.vue` without listing it; the build fails with
`Rollup failed to resolve import "highcharts"` until it is added.

## 3. New: subpath imports

The barrel used to be the only entry, so importing one component pulled all ~50 into your
type program. Per-component subpaths bypass it:

```js
import EpButton from '@ericpitcock/epicenter-components-vue/components/button/EpButton'
import { useSorting } from '@ericpitcock/epicenter-components-vue/composables'
import type { Size } from '@ericpitcock/epicenter-components-vue/types'
```

The barrel still works and is now `sideEffects: false`, so bundlers tree-shake it
properly. Subpaths mirror `src/`; React adds `./components/*` and `./hooks/*`.

## 4. Drop any type-check workaround

Filtering design-system errors out of `vue-tsc` output is no longer necessary. Plain
`vue-tsc --noEmit` passes against a consumer with `noUnusedLocals`, `noUnusedParameters`
and no `skipLibCheck` override, and `vue-tsc -b && vite build` can go back in `build`.

## 5. React only: two peers are now required

`react-router-dom` (used by `EpTabs` and `EpBreadcrumbs`) and `framer-motion` (used by
`Kmd`) moved to `peerDependencies`. They are **not** optional — those are static imports —
so add them if you use the package at all. This also removes the duplicate-copy problem
that the React Storybook build needed a `dedupe` entry for.

The icon packages (`@ericpitcock/epicenter-icons-vue` / `-react`) are now declared
dependencies. They were imported by 33 Vue and 9 React source files but listed nowhere, so
they only resolved by accident.

## 6. React only: two components render more than they used to

`EpHeader` takes `left`/`center`/`right` props and ignores `children`. `EpBrowserFrame`
and `EpNotifications` were passing Vue-style `<div slot="left">` children into it, which
React dropped on the floor — the browser-frame window buttons and the notifications
title/"Clear all" button never rendered. They now do. If you were compensating for their
absence in your own CSS, remove it.

## 7. Import the optional peers' stylesheets yourself

The library used to import `mapbox-gl/dist/mapbox-gl.css` and
`flatpickr/dist/flatpickr.min.css` on your behalf. It no longer can.

A bundler resolving this package can handle the *bare* specifier of an optional peer you
have not installed — Vite substitutes a stub that only throws if the code actually runs,
which is the right behaviour for rendering `EpMap` without `mapbox-gl`. It cannot do that
for a **subpath**: Vite rewrites `mapbox-gl/dist/mapbox-gl.css` to a
`__vite-optional-peer-dep:` specifier that its own import-analysis then refuses, static or
dynamic. Since these chunks sit in the barrel's graph, one such import broke every
consumer's dev server.

So if you render either component, add its stylesheet to your app — which is what
mapbox's and flatpickr's own docs tell you to do anyway:

```js
import 'mapbox-gl/dist/mapbox-gl.css'      // if you use EpMap
import 'flatpickr/dist/flatpickr.min.css'  // if you use EpDatePicker
```

`scripts/verify-dist.mjs` now fails the build if any published module imports a subpath of
an optional peer, so this cannot regress.
