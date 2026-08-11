export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'

export type ImageAnchor =
  | 'top left'
  | 'top'
  | 'top right'
  | 'left'
  | 'center'
  | 'right'
  | 'bottom left'
  | 'bottom'
  | 'bottom right'

/** Numbers are treated as px. */
export type CssLength = string | number

export interface ImageInset {
  top?: CssLength
  right?: CssLength
  bottom?: CssLength
  left?: CssLength
}

export type ImageState = 'loading' | 'loaded' | 'error'

interface BaseProps {
  // --- source ---
  src: string
  srcset?: string
  /** Emitted as an attribute only when `srcset` is present. */
  sizes?: string

  // --- geometry ---
  /** Required. The literal 'auto' is the deliberate, visible-in-code-review opt-out. */
  aspectRatio: CssLength | 'auto'
  width?: number
  height?: number

  // --- loading ---
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  decoding?: 'async' | 'sync' | 'auto'
  crossorigin?: 'anonymous' | 'use-credentials'
  referrerpolicy?: string

  // --- layout ---
  mode?: 'fit' | 'free'
  /** `fit` mode only. */
  fit?: ImageFit
  anchor?: ImageAnchor
  /** `free` mode only; overrides `anchor` per side. */
  inset?: ImageInset
  offsetX?: CssLength
  offsetY?: CssLength

  // --- zoom ---
  /** transform-origin; defaults to `anchor`. */
  origin?: ImageAnchor | string
  minZoom?: number
  maxZoom?: number

  // --- presentation ---
  /** Falls back to the `--image-radius` CSS token when unset. */
  radius?: CssLength
  /** ms */
  fadeDuration?: number
}

/** Alt text is enforced at the type level — one of the two shapes is required. */
export type EpAppImageProps = BaseProps &
  ({ alt: string, decorative?: false } | { alt?: never, decorative: true })
