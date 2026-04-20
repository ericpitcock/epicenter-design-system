---
description: Conventions for the epicenter-styles package (tokens, SCSS, theming)
applyTo: packages/epicenter-styles/**
---

# Epicenter Styles

## Build pipeline

`npm run build` (in `packages/epicenter-styles/`) runs `scripts/build.mjs`:
1. Reads YAML token files from `tokens/color/*.yaml`
2. Generates SCSS partials in `scss/color/` (these are **generated** — do not edit)
3. Compiles `index.scss` → `dist/epicenter-design-system.css` (compressed)
4. Copies mixins to `dist/mixins/`

After changing any YAML token file, run the build to regenerate CSS.

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
  dark: hsl(var(--gray-430))
  light: hsl(var(--gray-50))
```

The build converts these to CSS using `light-dark()`:

```css
:root { color-scheme: light dark; }
:root { --interface-bg: light-dark(hsl(var(--gray-50)), hsl(var(--gray-430))); }
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
