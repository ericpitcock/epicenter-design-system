# Theming

Everything themed in the design system derives from a small set of **seed** custom
properties. You set the seeds in a plain CSS file; the stylesheet derives every ramp,
surface, border and status color from them at runtime with CSS relative color syntax.
There is no SCSS to compile, no build step, and no JavaScript.

## Quick start

1. Copy the starter theme into your app:

   ```bash
   cp node_modules/@ericpitcock/epicenter-styles/dist/theme.css src/theme.css
   ```

2. Load it **after** the package stylesheet:

   ```js
   import '@ericpitcock/epicenter-styles'
   import './theme.css'
   ```

3. Edit the values. Delete every line you do not change — the starter lists the shipped
   defaults, so an untouched line is noise.

The smallest useful theme is one line:

```css
:root {
  --primary-color: oklch(0.55 0.22 145);
}
```

That recolors the whole primary ramp, the focus ring, text selection, checked
checkboxes and radios, selected table rows, menu hover, tabs and the primary button —
in both light and dark mode.

## Why it works without `!important`

The package stylesheet ships inside cascade layers (`epicenter.reset`, `.tokens`,
`.base`, `.components`, `.utilities`). CSS written **outside** a layer beats layered CSS
regardless of specificity. Your `theme.css` is unlayered, so a plain `:root { … }` block
in it wins over every default the package declares.

If you deliberately put your own CSS in layers, declare your theme layer after
`epicenter.utilities`, or leave `theme.css` unlayered.

## The seeds

| Seed | Default | What it drives |
|---|---|---|
| `--primary-color` | `oklch(0.6 0.2 257)` | `--primary-color--100` … `--1000`, focus outline, selection, checked controls, selected states, the primary button |
| `--primary-color--contrast` | `hsl(0 0% 100%)` | Text and icons on a primary fill. Set it dark for a light brand color |
| `--accent-hue-shift` | `15` | Degrees `--accent-color` is rotated from `--primary-color` |
| `--accent-color` | derived from the two above | The selected button state and two-tone gradients; `--accent-color--600`, `--700` |
| `--neutral-color` | `oklch(0.5 0 0)` | Every `--interface-*` surface, `--border-color*`, `--text-color*`, `--overlay-color`. Only its **chroma and hue** are used |
| `--status-danger-color` | `hsl(0 84% 60%)` | `--status-danger-bg-color`, `-border-color`, `-text-color`, `--text-color--danger` |
| `--status-warning-color` | `hsl(38 92% 50%)` | The warning trio and `--text-color--warning` |
| `--status-success-color` | `hsl(142 76% 36%)` | The success trio and `--text-color--success` |
| `--status-info-color` | `hsl(199 89% 48%)` | The info trio |
| `--link-color` | `light-dark(sky-600, sky-300)` | `--text-color--link` and the `.text--link` utility |
| `--font-family` | `sans-serif` | The document font and chart text |
| `--font-family--mono` | Fira Code, Menlo, … | `EpCodeView` and anything monospace |
| `--border-radius--small` / `--default` / `--large` / `--full` | `0.2rem` / `0.3rem` / `0.6rem` / `999rem` | Every component corner |
| `--chart-sequence-00` … `-13` | fourteen `light-dark()` pairs | Chart series colors, in order |

`dist/theme.css` carries the same list with a comment on each group.

### Color formats

Write a color seed in any format — hex, `hsl()`, `oklch()`, a named color. The
derivations use `oklch(from var(--seed) …)`, which converts the origin first:

```css
:root {
  --primary-color: #7c3aed;
  --status-danger-color: crimson;
}
```

OKLCH is the most predictable for a brand color, because the derived steps move
lightness in that space: `oklch(<lightness 0–1> <chroma 0–0.4> <hue 0–360>)`.

### Light and dark

Light and dark are **not** separate themes. Every derived token is a `light-dark()`
pair, so a single set of seeds covers both modes. Mode is still chosen the same way as
before: `color-scheme` follows the OS by default, and the `light-theme` / `dark-theme`
classes on `<html>` pin it (`useTheme()` in the Vue and React packages manages this).

A seed may itself be a `light-dark()` pair when you want different origins per mode:

```css
:root {
  --link-color: light-dark(#0369a1, #7dd3fc);
}
```

## Recipes

### Rebrand

```css
:root {
  --primary-color: oklch(0.62 0.19 25);
  --accent-hue-shift: -20;
}
```

### A light brand color

Bright yellows and cyans need dark text on top:

```css
:root {
  --primary-color: oklch(0.85 0.17 95);
  --primary-color--contrast: oklch(0.25 0.03 95);
}
```

### Tint the whole interface

Add chroma to the neutral seed. Lightness is ignored — the surface ladder is fixed —
so only the second and third numbers matter:

```css
:root {
  --neutral-color: oklch(0.5 0.015 60);   /* warm */
}
```

| Chroma | Result |
|---|---|
| `0` | Pure grays (default) |
| `0.005` – `0.02` | A subtle warmth or coolness |
| `0.02` – `0.04` | Clearly tinted |
| above `0.05` | The interface reads as colored |

### Your own status palette

```css
:root {
  --status-danger-color: #d92d20;
  --status-warning-color: #dc6803;
  --status-success-color: #079455;
  --status-info-color: #1570ef;
}
```

Banners, badges, form errors and `--text-color--danger/warning/success` follow.
Solid `success` / `danger` / `warning` **button** variants keep their own palette; set
`--ep-button-bg-color` on `.ep-button-var--success` and friends to change those.

### Fonts

The package ships no font files. Load your own `@font-face` rules and point the seeds
at them:

```css
:root {
  --font-family: 'InterVariable', sans-serif;
  --font-family--mono: 'Fira Code', monospace;
}
```

### Override one derived token

Any derived token is still an ordinary custom property. If a seed gets you close but
one value needs a nudge, set that token directly in `theme.css` — it wins for the same
cascade-layer reason:

```css
:root {
  --interface-overlay: light-dark(#ffffff, #1a1a1a);
  --primary-color--300: oklch(0.8 0.12 257);
}
```

### Scope a theme to part of a page

Custom properties inherit, so setting a seed on any element rethemes its subtree:

```css
.marketing-panel {
  --primary-color: oklch(0.7 0.16 330);
}
```

## Storybook

The **Brand** toolbar dropdown applies preset seed sets to every story, and
**Style → Theme Playground** has sliders for each seed, a swatch strip of the derived
ramp read back from the stylesheet, and a *Copy theme.css* button that gives you a
theme file holding only the seeds you changed.

## Safety net

Color seeds are registered with `@property`. If a value fails to parse — a typo like
`#gg0000` — the seed falls back to its default instead of invalidating every token
derived from it. The registrations sit outside the cascade layers, at the top of the
stylesheet.

## What is deliberately not a seed

`--space--*`, `--control-height--*`, `--font-size--*`, `--z-index--*`, `--shadow--*`
and `--duration--*` are density and motion scales, not brand. They are ordinary global
tokens and can be overridden the same way (an unlayered `:root` block), but they are not
in `theme.css`.

## Migrating from the SCSS mixin

If you called `generate-color-variants()`, delete the `@use` and the `@include` and set
the seed with the same three numbers:

```scss
// before
@use '@ericpitcock/epicenter-styles/mixins/_generate-color-variants.scss' as *;
:root { @include generate-color-variants(0.6, 0.2, 320deg); }

// after
:root { --primary-color: oklch(0.6 0.2 320); }
```

Then run the codemod to rename the ramp references:

```bash
node node_modules/@ericpitcock/epicenter-styles/scripts/codemod-v2.mjs src/
```

`--primary-color-base` becomes `--primary-color`, `--primary-color-600` becomes
`--primary-color--600`, and `--primary-color-up-15-*` becomes `--accent-color*`. The
other hue-shifted families are gone; the codemod lists any it finds. See
[MIGRATION-v2.md](MIGRATION-v2.md) for the full table.

## Reference

- [NAMING.md](NAMING.md) — the custom-property contract, including the seed layer
- `dist/custom-properties.json` — every global token; seeds carry `"seed": true`
- `tokens/theme.yaml` — the source the starter and the defaults are generated from
