# `EpAppImage`

A single production-grade image component: perfect boring cases (lazy loading,
decode-gated fade-in, enforced alt text, aspect-ratio-reserved layout) plus a
small set of positioning primitives (`mode`, `anchor`, `inset`, offsets, and a
programmatic `zoom` model). No placeholders, no pointer handling, no runtime
dependencies beyond Vue.

## `fit` mode (default)

The image fills the container box. `anchor` → `object-position`, `fit` →
`object-fit`. This is the cheap path — no layout math, no absolute positioning.

```vue
<EpAppImage
  src="/hero.jpg"
  srcset="/hero-800.jpg 800w, /hero-1600.jpg 1600w"
  aspect-ratio="16/9"
  anchor="bottom right"
  fit="cover"
  alt="Sunset over the harbour"
/>
```

## `free` mode

The image renders at its own size (intrinsic, or `width`/`height`), absolutely
positioned inside the clipped container. `anchor` desugars to inset sides;
an explicit `inset` overrides `anchor` per side and accepts any CSS length,
including negatives and percentages.

```vue
<EpAppImage
  src="/map.png"
  aspect-ratio="3/2"
  mode="free"
  :inset="{ bottom: '-10%', right: '20px' }"
  :offset-x="8"
  alt="Detail crop of the harbour map"
/>
```

`offsetX`/`offsetY` apply as a `translate` in **both** modes, so anchoring and
fine-tuning compose instead of fighting over one property.

Note on lazy loading in `free` mode: before the image loads it has a zero-area
box, which native `loading="lazy"` never intersects — so without `width` and
`height` the component falls back to eager loading (with a dev warning). Pass
both to keep lazy loading.

## Zoom

Programmatic only, via the model — no wheel/pinch/drag handling:

```vue
<EpAppImage v-model:zoom="zoom" src="/photo.jpg" aspect-ratio="1" :max-zoom="4" alt="…" />
```

`anchor` supplies the default `transform-origin` (a bottom-right-anchored image
zooms outward from the bottom right); `origin` overrides it. The rendered scale
is clamped to `[minZoom, maxZoom]` on read — your bound ref is never mutated.

## Slots, state, and errors

- `#overlay` — rendered inside the clipped box, above the image, with
  `pointer-events: none` on its wrapper (re-enable per child as needed).
- `#error` — rendered in place of the image when the load fails.
- `data-state="loading | loaded | error"` on the root is the styling/testing hook.
- Exposed: `reload()` re-attempts the load; `state` mirrors `data-state`.
- Emits: `load` (after the image is fully decoded), `error`.

Alt text is enforced by the types: pass `alt`, or `decorative` (renders
`alt=""`). A missing-both usage is a compile error.

## Custom properties

All visual state flows through custom properties on the root — override them
from outside (`.card .ep-app-image { --image-radius: 0; }`) instead of asking for
props. Properties marked *always set* are written by the component's computed
style, so treat the prop as their API; the rest are free to override in CSS.

| Property | Default | Drives |
| --- | --- | --- |
| `--image-radius` | `var(--radius-md, 0.5rem)` | container `border-radius` |
| `--image-corner-shape` | `round` | `corner-shape` (`squircle`, `bevel`, …) — Chromium progressive enhancement, degrades to normal rounded corners |
| `--image-fade` | `200ms` (prop `fadeDuration`, always set) | fade-in duration; forced to `0ms` under `prefers-reduced-motion` |
| `--image-aspect-ratio` | from required `aspectRatio` prop (always set) | container `aspect-ratio` |
| `--image-scale` | clamped `zoom` (always set) | `<img>` `scale` |
| `--image-x` / `--image-y` | `offsetX`/`offsetY` (+ `-50%` centering in `free` mode; always set) | `<img>` `translate` |
| `--image-origin` | `anchor`, overridden by `origin` (always set) | `transform-origin` |
| `--image-object-position` | `anchor` (`fit` mode) | `object-position` |
| `--image-object-fit` | `fit` prop (`fit` mode) | `object-fit` |
| `--image-inset` | desugared `anchor`/`inset` (`free` mode) | `<img>` `inset` |

## Implementation notes (do not "simplify" these away)

- Written for `<script setup vapor>`; the `vapor` attribute is omitted while
  this repo is on Vue 3.5 (Vapor lands in 3.6). When upgrading, restore the
  attribute — the `.attr` modifier on `:alt` is already Vapor-safe (the Vapor
  runtime drops a plain empty-string `:alt` binding entirely).

- `overflow: clip` + `isolation: isolate` on the container is the clipping
  strategy. `clip` (not `hidden`) avoids creating a scroll container, so stray
  focus/`scrollIntoView` can't displace the image and `position: sticky` still
  works in descendants. `isolation: isolate` forces a stacking context, which
  fixes WebKit's rounded-clip failure on transformed children (zoom). Do not
  swap it for `translateZ(0)`, `will-change`, or `clip-path` — see the comments
  in `EpAppImage.vue`.
- No `<picture>`: art-directed sources carry differing aspect ratios, which
  contradicts the required single `aspectRatio`. If ever needed, `<picture>`
  wraps the existing `<img>` as a direct child — a non-breaking v2 addition.
- No placeholders, no `IntersectionObserver`, no gesture handling, no
  `figure`/`figcaption`, no variant/shadow/rounded props — deliberate; most are
  two lines of consumer CSS against the custom properties above.
