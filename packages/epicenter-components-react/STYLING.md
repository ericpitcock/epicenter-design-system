# Styling and the custom-property contract

The v2 work brought `epicenter-styles` and `epicenter-components-vue` onto a single,
enforced custom-property contract. React was deliberately left out of that pass — but
it **shares the same stylesheet**, so it already inherits every style change. This
document is the handoff: what React needs in order to actually reach the contract.

Read [NAMING.md](../epicenter-styles/NAMING.md) first. This file only covers the
React-specific gap.

---

## The blocker

> **59 of the 73 components never spread `...rest`, so they cannot accept a `style`
> prop at all.** For those, the custom-property contract is unreachable from React no
> matter how good the CSS gets.

`EpContainer` is the clearest case. Its entire props interface is:

```tsx
export interface EpContainerProps {
  children?: ReactNode;
  className?: string;
  footer?: ReactNode;
  header?: ReactNode;
}
```

while `_container.scss` exposes 24 properties — none of them settable.

This already causes a live bug. `EpSignIn.tsx` passes `containerProps` intending the
same four overrides that `EpSignIn.vue` applies inline:

```vue
<!-- Vue: works -->
<ep-container :style="{ '--ep-container-width': '400px', '--ep-container-height': '475px', … }">
```

```tsx
// React: silently drops all four — EpContainerProps has no `style`
containerProps?: React.ComponentProps<typeof EpContainer>;
```

The fix is mechanical, but it is 59 files, which is why it was scoped out rather than
rushed.

---

## 1. Two primitives to add first

Neither exists today — there is no `src/utils/` or `src/types/` directory at all.

```ts
// src/types/css.ts
export type EpCSSProperties = React.CSSProperties &
  Record<`--${string}`, string | number | undefined>
```

`React.CSSProperties` has no index signature, so every custom property today needs an
`as React.CSSProperties` cast. That cast is **unsound** — it silently accepts
`--ep-buton-bg-color`. There are about eight hand-rolled ones, and `EpChart` leaks the
problem into its public API by typing `chartColors?: React.CSSProperties`.

```ts
// src/utils/cx.ts
export const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(' ')
```

Class construction currently uses three mutually inconsistent idioms: the documented
array-filter pattern (14 files), `` `ep-badge${className ? ` ${className}` : ''}` ``,
`` `ep-header ${className}`.trim() ``, and an imperative `classes.push()` in
`EpToggleButton`.

---

## 2. The rest-spread checklist

Each of these needs `style?: EpCSSProperties` reachable and `...rest` spread onto the
**root** element:

`EpBadge` `EpBanner` `EpBreadcrumbs` `EpBrowserFrame` `EpCarousel` `EpChart`
`EpDonutChart` `EpCheckbox` `EpCodeView` `EpColorRandomizer` `Kmd` `EpContainer`
`EpDivider` `EpDropdown` `EpEmptyState` `EpFieldset` `EpFlex` `EpImage` `EpInlineEdit`
`EpInputStyler` `EpItemCount` `EpKeyValueTable` `EpLazyImage` `EpLoaderBars`
`EpLoaderBounce` `EpLoaderDots` `EpLoaderDualRing` `EpLoaderFade` `EpLoaderOrbit`
`EpLoaderPulse` `EpLoaderScale` `EpLoaderSpin` `EpLoaderSquares` `EpLoadingState`
`EpicenterLogo` `EpMap` `EpMenu` `EpMenuItem` `EpNotification` `EpNotifications`
`EpOverlay` `EpPagination` `EpRadio` `EpResizable` `EpStatusIndicator` `EpTabContent`
`EpBasicTable` `EpTable` `EpTableCell` `EpTableCheckboxFilters` `EpTableHead`
`EpTablePagination` `EpTableSearchInput` `EpTableSortableHeader` `EpTabs` `EpTextarea`
`EpToggleButton` `EpToggle` `EpTooltip`

Already spreading: `EpButton` `EpAsyncButton` `EpDatePicker` `EpFooter`
`EpDatePickerFilter` `EpEnrichmentDropdown` `EpHeader` `EpInput` `EpMultiSearch`
`EpRangeInputFilter` `EpSearchTypeahead` `EpSignIn` `EpSelect` `EpThemeToggle`

### Two traps

**`EpInput` spreads onto the inner `<input>`, not the wrapper.** A caller setting
`--ep-input-styler-width` hits the wrong element. `EpPagination.tsx` and
`EpTablePagination.tsx` both wrap it in an extra `<div>` purely to work around this:

```tsx
<div style={{ '--ep-input-styler-width': '7.5rem' } as React.CSSProperties}>
```

Fix the component, then delete both workarounds.

**Four props interfaces declare `[key: string]: unknown`** — `EpHeaderProps`,
`EpMultiSearchProps`, `EpSignInProps`, `EpRangeInputFilterProps`. That defeats prop
typing entirely. Replace with a proper `HTMLAttributes` extension rather than adding
`style` alongside it.

---

## 3. Styles that must come out of TSX

The rule is `no per-component CSS — styles come from epicenter-styles`. These violate
it, and three of them will now **double-apply** against stylesheets that v2 added:

| Site | What, and why it matters now |
|---|---|
| `command-palette/Kmd.css` | 150 lines of dark-only CSS in `src/`, imported by `Kmd.tsx`. Hardcoded `rgb(24,24,27)` throughout, four empty rules, no BEM. Nothing themes it. |
| `browser-frame/EpBrowserFrame.tsx` | A full stylesheet in a runtime `<style>` tag — the `#ff5f57`/`#febc2e`/`#28c840` traffic lights and an `--ep-header-*` block. **v2 added `_browser-frame.scss` with the same rules**, so this now duplicates it. Delete the injected block; the properties are `--ep-browser-frame-button-{close,minimize,maximize}-bg-color`. |
| `async-button/EpAsyncButton.tsx` | Injects `@keyframes ep-spin` on every render. Belongs in `epicenter-styles`. |
| `logo/EpicenterLogo.tsx` | SVG `<defs><style>` with `#fff16c` and the same `hightlight` typo Vue had. v2 added `_logo.scss` using `--ep-logo-*` on a `.ep-logo` root class — but **React's SVG uses different inner class names** (`logo-path logo-shadow` vs Vue's `shadow`), so this one needs its markup aligned, not just its styles moved. |
| `image/EpImage.tsx`, `lazy-image/EpLazyImage.tsx` | `placeholderColor = '#f5f5f5'` and fully inline visual definitions (`transition: 'opacity 0.3s ease-in-out'`, `objectFit`, `backgroundSize`). v2 added `_image.scss` covering `.ep-image` for both. |
| `multi-search/EpMultiSearch.tsx` | Emits plain inline CSS from props — a 1:1 port of a Vue bug that v2 fixed. **Vue now emits `--ep-multi-search-*` custom properties instead, and the `borderColor`/`borderStyle`/`borderWidth` props were deleted as unused.** Until React follows, the two frameworks have diverged. |

---

## 4. When a prop becomes a property

Same rule as Vue: **only when the value cannot be enumerated.** An arbitrary colour
from data or a computed dimension becomes a custom property; anything with a fixed
set of values stays a BEM modifier class.

React's specific tell is `style={{ display: x ? undefined : 'none' }}`, which appears
in `EpDropdown`, `EpMenuItem`, `EpTable`, and `EpDonutChart`. All four should be
modifier classes.

---

## 5. Story template for the property API

`EpButton.stories.tsx` already invented the right pattern — `argTypes` keyed to the
property name, grouped by state:

```tsx
backgroundColor: {
  name: '--ep-button-bg-color',
  control: { type: 'color' },
  table: { category: 'Base Styles' },
},
```

Only that one story does it; 44 others do not.
`.github/prompts/react-component.prompt.md` should codify it — that file currently
says **nothing at all** about CSS custom properties, which is the single biggest
documentation gap on the React side.

Per-component property tables are generated into `docs/components/` from
`dist/custom-properties.json`, which you can read directly to drive the `argTypes`.

---

## 6. Do this one now, independently

**`@ericpitcock/epicenter-styles` is not a dependency, peerDependency, or
optionalDependency of this package.** Nothing declares or imports the stylesheet — the
coupling exists only in `.storybook-react/preview.jsx`. Consumers get unstyled
components with no signal about why.

```jsonc
"peerDependencies": {
  "@ericpitcock/epicenter-styles": "^2.0.0",
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0"
}
```

`@ericpitcock/epicenter-icons-react` has the same problem — it is imported by `Kmd.tsx`
and by stories, but resolved only through a `tsconfig.json` path alias.

---

## 7. Parity gaps

Worth settling while the contract is fresh:

- **Vue only:** `EpAppImage` (and its `useImageLoad` composable), `EpContextualLookup`
- **React only:** `EpAsyncButton`, `Kmd`, `EpEnrichmentDropdown`, `EpToggleButton`
- **Story without a component:** `EpButtonGroup.stories.tsx`
- `Kmd` breaks the `Ep` prefix convention shared by every other component.
- Missing composables vs Vue: `useActionsMenu`, `useCalculatedHeight`, `useImageLoad`.
- `useTheme` diverges: React's throws without a `ThemeProvider`, has **no SSR guard**
  (`getInitialTheme` calls `localStorage` unguarded), and persists on mount — which
  permanently defeats its own OS-preference listener, since
  `if (!localStorage.getItem(STORAGE_KEY))` can never be true after first paint.

---

## Verifying

React has no build step, so the check is Storybook:

```bash
npm run storybook:react
```

`.storybook-react/preview.jsx` imports `dist/epicenter-design-system.css` directly, so
it picks up styles rebuilds without extra wiring. A component is compliant when a
consumer can set any documented property via `style`, or via a selector matching the
component's own element. Note that an *ancestor* selector is not enough: components
declare their defaults on their root class, which beats an inherited value. That is
exactly why the `style` prop matters, and why the rest-spread checklist above is the
blocker rather than a nicety.
