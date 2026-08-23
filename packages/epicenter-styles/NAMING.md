# Custom property naming

The contract every CSS custom property in the Epicenter Design System follows.

This document is the prose form. `scripts/property-model.mjs` is the machine-readable
form, and `scripts/validate-properties.mjs` enforces it — the build fails if a
property breaks the rules below. If the two ever disagree, the script wins and this
file is out of date.

## The one rule about dashes

**A double dash separates a family from a variant or a scale step. Everything else
uses a single dash.**

```
--text-color--loud        variant of --text-color
--font-size--small        step on the --font-size scale
--interface-surface--accent
--ep-button-hover-bg-color   component property: single dashes throughout
```

That is the whole convention. If you can read the `--`, you know you are looking at
a global token; component properties never contain one.

---

## Layer 1 — Primitives

`--<family>-<step>` — `--red-500`, `--gray-430`

Raw values with no meaning attached. Generated from `tokens/color/*.yaml`; do not
edit `scss/color/_color.scss` or `_grayscale.scss` by hand.

These hold **unwrapped HSL channel triplets**, so they must always be wrapped:
`hsl(var(--red-500))`, never `var(--red-500)`. The build fails if a themed token
references one without the wrapper.

> **Known wart:** the grayscale ramp runs 0–500 in steps of 10 while the colour
> ramps run 50–1000. So `--gray-500` is black but `--red-500` is a mid-tone. The two
> schemes are incompatible and renaming touches nearly every token reference, so it
> is left alone. Check the step scheme before reaching for a number.

## Layer 2 — Semantic theme tokens

`--<concept>[--<variant>]` — `--interface-surface--accent`, `--border-color--lighter`

Theme-aware, declared on `:root` as `light-dark()` pairs, generated from
`tokens/color/themes.yaml`. Adding a `{ light, dark }` pair to that file is all it
takes; the build detects the shape.

Pick by layer, not by colour: `bg` → `surface` → `foreground` → `overlay`, furthest
back to closest to the viewer.

## Layer 3 — Global scales

`--<scale>--<step>` — every step is suffixed, including the default.

| Scale | Steps |
|---|---|
| `--space--1` … `--space--10` | 0.4 → 6.4rem |
| `--font-size--*` | tiny, xsmall, small, default, body, large, jumbo |
| `--font-weight--*` | thin … black, default |
| `--text-line-height--*` | tight, normal, loose |
| `--border-radius--*` | small, default, large, full |
| `--border-width--*` | hairline, thick |
| `--control-height--*` | small, default, large, xlarge |
| `--control-padding-inline--*`, `--control-icon-width--*` | same four steps |
| `--duration--*` | fast, default, slow |
| `--ease--*` | out, in-out |
| `--shadow--*` | overlap, sticky, dropdown, tooltip, modal |
| `--z-index--*` | negative, default, overlap, sticky, fixed, dropdown, tooltip, modal |

`--shadow--*` and `--z-index--*` share their step names on purpose: a component
sitting at `--z-index--dropdown` casts `--shadow--dropdown`.

## Layer 4 — Component properties

```
--ep-<block>[-<part>][-<state>]-<property>
```

- **block** — the component's root class minus `ep-`. `.ep-input-styler` → `input-styler`.
- **part** — the BEM element, `__` flattened to `-`. `.ep-menu__item` → `menu-item`.
- **state** — from the closed set below, sitting immediately before the property.
- **property** — from the closed vocabulary, always last.

```
--ep-badge-bg-color                    block + property
--ep-menu-item-hover-bg-color          block + part + state + property
--ep-radio-checked-disabled-bg-color   compound state
```

**States:** `hover` `active` `focus` `selected` `checked` `indeterminate`
`disabled` `error` `loading` `open`

`active` means `:active` only. A thing that is chosen is `selected`, never `active`
or `inactive`. States may compound (`checked-disabled`) but must stay contiguous and
immediately precede the property.

**Properties:** the full list lives in `PROPERTY_GROUPS` in `scripts/property-model.mjs`.
The three that matter most, because they were previously written three ways each:

| Concept | Use | Not |
|---|---|---|
| background | `-bg-color` | `-bg` |
| text colour | `-text-color` | `-text`, bare `-color` |
| border colour | `-border-color` | `-border` |

---

## Three structural rules

### 1. One declaration block

Every `--ep-<block>-*` property is declared **once**, in the component's outermost
root class. Modifier classes may only reassign names that already exist there.

```scss
.ep-button {
  --ep-button-height: var(--control-height--default);
  height: var(--ep-button-height);
}

.ep-button--large {
  --ep-button-height: var(--control-height--large);  // reassign, don't introduce
}
```

This is what stops a property existing only when some modifier happens to be
applied, and it means the root block is a complete list of what the component
exposes.

When the root class does not match the filename, say so at the top of the file:

```scss
// @block table
// @root .ep-table-container
```

### 2. No raw literals in rules

Every value in `scss/components/` is a `var(--ep-*)`, a `var(--global-token)`, or a
keyword. If a value needs a number, it becomes a property.

A property's **default** may be a literal when no global token carries that value —
the button's density ladder (0.3 / 0.6 / 1.0 / 1.4rem) is a real example. The
property is the control point, so nothing is lost. The validator reports these
separately as advisory.

Numbers inside a `calc()` that also references a property are coefficients, not
literals: `calc(var(--ep-checkbox-size) * 2 / 7)` scales with the property.

### 3. Namespace equals class name

`.ep-code-view` declares `--ep-code-view-*`, never `--ep-code-block-*`.

---

## Configuring another component

A component may reconfigure a component it renders, by reassigning that component's
properties — never by overriding its rules with longhand:

```scss
.ep-menu__item .ep-button--menu-item {
  --ep-button-bg-color: var(--ep-menu-item-bg-color);
  --ep-button-hover-bg-color: var(--ep-menu-item-hover-bg-color);
}
```

Longhand (`background: transparent`) would take the button's own hover and selected
rules out of the loop and force consumers to out-specify this selector. The
validator checks that the target property actually exists on the other component.

---

## Cascade layers

The published stylesheet is wrapped in layers:

```
epicenter.reset, epicenter.tokens, epicenter.base, epicenter.components, epicenter.utilities
```

Consumer CSS written **outside** a layer beats layered CSS regardless of
specificity. Overriding a component is a plain selector — no `!important`, no
out-specifying:

```css
.checkout .ep-button { --ep-button-bg-color: rebeccapurple; }
```

**Target the component's own element.** Because every component declares its defaults
on its root class, a declaration on the element beats one inherited from an ancestor:

```css
.checkout { --ep-button-bg-color: rebeccapurple; }        /* ✗ loses to .ep-button */
.checkout .ep-button { --ep-button-bg-color: rebeccapurple; }  /* ✓ */
```

The exception is a property a component declares but does not consume itself — the
`--ep-icon-*` family, for instance, which parent components set on `.ep-icon`
descendants. Those follow normal inheritance.

Sass forbids `@use` inside `@layer`, so the layers are applied by
`scripts/build.mjs`, not by `index.scss`. See `LAYERS` there.

---

## Vue and React

Component styles live in `packages/epicenter-styles/scss/components/` and are shared
by both framework packages. A Vue SFC should have **no `<style>` block at all** —
scoped CSS compiles to `[data-v-hash]` selectors that a consumer cannot override
without `:deep()`, which is the exact problem this contract exists to remove.

Props become custom properties **only when the value cannot be enumerated** — an
arbitrary colour from data, a computed dimension. Anything with a fixed set of
values (`size`, `kind`, `direction`) is a BEM modifier class.

```js
// EpAppImage: zoom and pan are continuous, so they bind as properties.
const rootStyle = computed(() => ({
  '--ep-app-image-scale': String(clampedZoom.value),
  '--ep-app-image-translate-x': translateX.value,
}))
```

---

## Checking your work

```bash
cd packages/epicenter-styles
npm run build      # compiles, then validates; fails on a contract violation
npm run validate   # validate only, with a full report
npm run lint       # stylelint: colour and px warnings in the component layer
```

`npm run validate` also writes `dist/custom-properties.json`, the machine-readable
property API used to generate the docs tables.
