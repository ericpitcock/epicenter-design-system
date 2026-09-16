---
description: Conventions for the epicenter-styles package (tokens, SCSS, theming)
applyTo: packages/epicenter-styles/**
---

# Epicenter Styles

## Build pipeline

`npm run build` (in `packages/epicenter-styles/`) runs `scripts/build.mjs`:
1. Reads the theme seeds from `tokens/theme.yaml` → `scss/theme/_seeds.scss` (**generated** — do not edit), the `@property` preamble, and the consumer starter `dist/theme.css`
2. Reads YAML token files from `tokens/color/*.yaml`
3. Generates SCSS partials in `scss/color/` (**generated** — do not edit)
4. Compiles each layer group → `dist/epicenter-design-system.css` (compressed, wrapped in cascade layers)
5. Validates the custom-property contract → `dist/custom-properties.json`
6. Copies `_mixins.scss` to `dist/mixins/`

After changing any YAML file, run the build to regenerate CSS.

## Theme seeds

`tokens/theme.yaml` declares the inputs everything themed derives from: `--primary-color`
(+ `--primary-color--contrast`, `--accent-hue-shift`, `--accent-color`), `--neutral-color`,
`--status-danger/warning/success/info-color`, `--link-color`, `--font-family`,
`--font-family--mono`, `--border-radius--*`. Consumers set them in plain CSS loaded after
the package; `dist/theme.css` is the starter. Color seeds are registered with `@property`.

Derived ramps use relative color syntax and live in the tokens layer:
`scss/theme/_primary.scss` holds `--primary-color--100 … --1000` as
`oklch(from var(--primary-color) calc(l ± …) c h)`. A relative-color origin must be a
seed; the build fails on anything else. There is no SCSS mixin for theming any more.

## Token format

Tokens are HSL triplets (no `hsl()` wrapper) in YAML:

```yaml
# tokens/color/color.yaml
red-50: 0 86% 97%
red-100: 0 93% 94%
red-500: 0 84% 60%
```

Referenced as `hsl(var(--red-500))` in SCSS/CSS.

Grayscale uses the same format with `gray-0` (white) through `gray-500` (black) in steps of 10.

## Theming

`tokens/color/themes.yaml` defines light/dark pairs:

```yaml
interface-bg:
  dark: neutral(430)
  light: neutral(50)
status-danger-text-color:
  dark: oklch(from var(--status-danger-color) calc(l + 0.08) calc(c * 0.85) h)
  light: oklch(from var(--status-danger-color) calc(l - 0.08) c h)
```

`neutral(N)` is the lightness of gray step `gray-N` applied to the chroma and hue of
`--neutral-color` (computed at build time — the sRGB→OKLCH curve is not linear). The
build converts pairs to `light-dark()`:

```css
:root { color-scheme: light dark; }
:root { --interface-bg: light-dark(oklch(from var(--neutral-color) 0.9234 c h), oklch(from var(--neutral-color) 0.2591 c h)); }
```

Theme is activated via `html.light-theme` or `html.dark-theme` classes.

## Interface custom properties

Semantic layers for surfaces — see [interface-custom-properties-guide.md](../../interface-custom-properties-guide.md):
- `--interface-bg` — page background
- `--interface-surface` — cards, panels
- `--interface-foreground` — inputs, interactive elements
- `--interface-overlay` — modals, tooltips

## Component SCSS conventions

Files in `scss/components/` are named `_component-name.scss` (without `ep-` prefix). Register new files in `_index.scss` with `@use 'component-name'`.

```scss
.ep-component-name {
  // Scoped custom properties referencing theme tokens
  --ep-component-name-bg: var(--interface-surface);
  --ep-component-name-border-color: var(--border-color);

  background: var(--ep-component-name-bg);
  border: 1px solid var(--ep-component-name-border-color);

  &--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &__label {
    color: var(--text-color);
  }
}
```

Key rules:
- Component custom properties prefixed with `--ep-component-name-*`
- Reference theme tokens (`--interface-*`, `--border-color`, `--text-color`) — not raw color values
- Modified BEM: `.ep-button`, `.ep-button--large`, `.ep-button__icon`
- `rem` for spacing and typography
- No Tailwind
