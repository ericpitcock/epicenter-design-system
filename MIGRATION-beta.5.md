# Migrating to 2.0.0-beta.5

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
