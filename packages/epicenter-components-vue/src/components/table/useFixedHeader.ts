/**
 * Pins a duplicate of a table's header once the real one scrolls out of view,
 * and keeps it locked to the body's horizontal scroll position.
 *
 * The rule the rework is built on: **nothing that runs on scroll may read
 * layout or touch Vue reactivity.**
 *
 * Until 2.0.0-beta.7 this wrote the clone's `left` from a scroll handler. A
 * scroll event reaches the main thread only after the compositor has already
 * scrolled and painted the body, so the clone was structurally at least a frame
 * behind — several during momentum scrolling — and `left` is layout-inducing, so
 * every write forced layout and paint. It also re-measured every column on every
 * scroll event (~1ms of main-thread work for 22 columns) and wrote the result
 * into a reactive array, which deferred the clone's DOM update to Vue's next
 * flush and cost another frame. Column widths do not change while scrolling, so
 * all of that was waste on top of the lag.
 *
 * Now:
 *  - Horizontal tracking is a scroll-driven animation whose timeline IS the
 *    container's scroll. It runs on the compositor and cannot fall behind,
 *    because nothing on the main thread is involved. It is declared in CSS
 *    (`_table.scss`) rather than built here with `new ScrollTimeline()`:
 *    that constructor is Chrome-only, while Firefox and Safari support the CSS
 *    syntax — driving it from JS would have quietly handed both of them the
 *    fallback. All this file contributes is the distance, written on layout
 *    change. Browsers with neither get a rAF-coalesced `transform` write —
 *    still one frame, but a cheap composited one rather than several frames of
 *    layout.
 *  - Column widths are measured by a ResizeObserver watching the real header
 *    cells, and written only when a width actually changed.
 *  - Whether the copy shows at all is an IntersectionObserver on a marker at
 *    the top edge of the real header, replacing both the window scroll listener
 *    and the caller-side offset measurement `fixedHeaderOffset` forced on every
 *    consumer.
 *
 * The table's own container has to be the element that scrolls sideways. That
 * is what the scroll timeline binds to, so a container with no bounded inline
 * size — one that grows to fit the table while an ancestor scrolls instead —
 * leaves the copy with nothing to follow. See `warnIfContainerIsNotTheScroller`.
 */
import { type ComponentPublicInstance, type Ref, nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

/**
 * Whether the stylesheet's scroll-driven animation will run. Matches the
 * `@supports (animation-timeline: --x)` guard in `_table.scss`, so the two
 * can never disagree about which mechanism owns the clone's transform.
 */
const supportsScrollTimeline = (): boolean =>
  typeof CSS !== 'undefined' && CSS.supports('animation-timeline', '--x')

export interface UseFixedHeaderOptions {
  /** Where the pinned header sits, in px from the top of the viewport. */
  fixedTop?: number
  /**
   * The vertical scroller the table lives in. Becomes the IntersectionObserver
   * root, so `window` (the default) means the viewport.
   */
  scrollElement?: HTMLElement | Window
}

export interface UseFixedHeaderReturn {
  /** Measured widths for each header cell, for the clone's head to apply. */
  cellWidths: Ref<{ width: string }[]>
  /** Whether the cloned header is currently pinned. */
  fixedHeader: Ref<boolean>
  /**
   * Re-measure widths and geometry. The observers cover resizes, column changes
   * and font loads on their own — this is only for a layout change they cannot
   * see, such as the table moving because something above it collapsed.
   */
  measure: () => void
  /** Template ref for the EpTable component instance. */
  tableComponent: Readonly<Ref<ComponentPublicInstance | null>>
  /** Ref to the head component rendered into the `thead` slot. */
  tableHead: Ref<ComponentPublicInstance | null>
}

export const useFixedHeader = (options: UseFixedHeaderOptions = {}): UseFixedHeaderReturn => {
  const { scrollElement, fixedTop = 0 } = options

  const tableComponent = useTemplateRef<ComponentPublicInstance>('tableComponent')
  const tableHead = ref<ComponentPublicInstance | null>(null)
  const fixedHeader = ref(false)
  const cellWidths = ref<{ width: string }[]>([])

  // Resolved from the table's `$refs` at mount.
  let container: HTMLElement | null = null
  let viewport: HTMLElement | null = null
  let clone: HTMLElement | null = null
  let bodyTable: HTMLElement | null = null

  let trackedDistance = Number.NaN
  let rafId = 0
  let disposed = false
  const usingScrollTimeline = supportsScrollTimeline()
  let resizeObserver: ResizeObserver | null = null
  let intersectionObserver: IntersectionObserver | null = null
  let observedCells: HTMLElement[] = []
  let sentinel: HTMLElement | null = null
  let warnedAboutScroller = false

  /** The real header's `<thead>`, which the head component exposes by ref. */
  const realThead = (): HTMLElement | null => {
    const instance = tableHead.value as (ComponentPublicInstance & { $refs: Record<string, HTMLElement | undefined> }) | null
    return instance?.$refs.thead ?? null
  }

  /**
   * Publish the distance the clone has to travel: the container's whole
   * scrollable extent. The stylesheet's keyframes read it, and the browser
   * interpolates against the scroll position itself on the compositor, so the
   * clone moves in the same frame as the body with no main-thread work at all.
   * `animation-fill-mode: both` holds the offset while the clone is hidden, so
   * it is already in the right place the moment it is pinned mid-scroll.
   */
  const track = (): void => {
    if (!container || !clone) return

    const distance = container.scrollWidth - container.clientWidth
    if (distance === trackedDistance) return
    trackedDistance = distance

    clone.style.setProperty('--ep-table-fixed-offset', `${-distance}px`)

    // The fallback owns the transform outright; without a scroll-driven
    // animation the property above is inert.
    if (!usingScrollTimeline) clone.style.transform = `translate3d(${-Math.min(container.scrollLeft, distance)}px, 0, 0)`
  }

  /**
   * The fallback for browsers with neither the CSS scroll timeline nor a
   * compositor to run it on. Coalesced to one write per frame, and a
   * `transform` rather than `left` so it composites instead of forcing layout.
   */
  const onContainerScroll = (): void => {
    if (rafId) return
    rafId = requestAnimationFrame(() => {
      rafId = 0
      if (!container || !clone) return
      clone.style.transform = `translate3d(${-container.scrollLeft}px, 0, 0)`
    })
  }

  /** Watch the header cells whose widths the clone has to match. */
  const observeCells = (cells: HTMLElement[]): void => {
    if (!resizeObserver) return
    if (cells.length === observedCells.length && cells.every((cell, i) => cell === observedCells[i])) return

    for (const cell of observedCells) resizeObserver.unobserve(cell)
    observedCells = cells
    for (const cell of cells) resizeObserver.observe(cell)
  }

  /**
   * Watch the marker at the top edge of the real header.
   *
   * The pinned state is `the marker has scrolled above the line`, and an
   * IntersectionObserver reports exactly that: the marker is either inside the
   * scrollport or above it. Two things this deliberately does NOT do, both
   * because they were tried and fail:
   *
   * Watching the header itself only reports it *leaving* the scrollport, which
   * does not happen until its bottom edge clears the line — a full
   * header-height after its top arrives, with the real header sliding away
   * under nothing.
   *
   * Watching a band on the line, or extending the root upward past the line,
   * both fail because an observer intersects the target's *visible* rect. Once
   * the header scrolls out of any clipping ancestor — the surrounding page, or
   * the frame the document is in — that rect is empty, so "above the line" and
   * "below the fold" become indistinguishable and the callback never fires.
   * That is why `root` is left implicit here rather than being widened.
   */
  const watchSentinel = (): void => {
    if (!sentinel || intersectionObserver) return

    intersectionObserver = new IntersectionObserver(([entry]) => {
      if (!entry) return
      // `boundingClientRect` is the marker's own box, so this stays right even
      // when the marker itself is clipped out of view.
      fixedHeader.value = !entry.isIntersecting && entry.boundingClientRect.top < fixedTop
    }, {
      root: scrollElement instanceof HTMLElement ? scrollElement : null,
      rootMargin: `${-fixedTop}px 0px 0px 0px`,
      threshold: 0,
    })
    intersectionObserver.observe(sentinel)
  }

  /**
   * The pinned header only tracks the body if the container is the thing that
   * scrolls sideways. A container with no bounded inline size grows to fit the
   * table instead, and some ancestor scrolls in its place — at which point
   * there is no scroll range to bind to and the header sits still. It fails
   * silently, so say so once.
   */
  const warnIfContainerIsNotTheScroller = (): void => {
    if (warnedAboutScroller || !container) return

    // Compared against the page's scrollport rather than the container's parent:
    // when the chain is blown out, the parent is blown out with it and can never
    // be the reference.
    const viewportWidth = scrollElement instanceof HTMLElement
      ? scrollElement.clientWidth
      : document.documentElement.clientWidth
    const grewInsteadOfScrolling = container.scrollWidth <= container.clientWidth
      && container.getBoundingClientRect().width > viewportWidth + 1

    if (!grewInsteadOfScrolling) return

    warnedAboutScroller = true
    console.warn(
      '[useFixedHeader] .ep-table-container is wider than the viewport instead of scrolling, '
      + 'so the pinned header has no scroll to follow. It needs a definite inline size: a '
      + 'percentage width only resolves if every ancestor does too, and one shrink-to-fit '
      + 'ancestor — a flex item with the default `min-width: auto`, a column flex container '
      + 'with `align-items` other than `stretch`, an inline-block, a grid item — is enough to '
      + 'size the chain by the table instead. See docs/components/EpTable.md.',
    )
  }

  const measure = (): void => {
    const thead = realThead()
    if (!container || !viewport || !clone || !thead) return

    // The clipping box sits exactly over the container's SCROLLPORT — its
    // padding box less any classic scrollbar — not its border box, or a bordered
    // table would pin its header a border-width out of true. Read as fractional
    // rects, not integer clientWidth, so a 2387.97px table does not become 2388.
    const rect = container.getBoundingClientRect()
    const style = getComputedStyle(container)
    const borderLeft = Number.parseFloat(style.borderLeftWidth) || 0
    const borderRight = Number.parseFloat(style.borderRightWidth) || 0
    const scrollbar = container.offsetWidth - container.clientWidth - borderLeft - borderRight
    viewport.style.top = `${fixedTop}px`
    viewport.style.left = `${rect.left + borderLeft}px`
    viewport.style.width = `${rect.width - borderLeft - borderRight - scrollbar}px`
    if (bodyTable) clone.style.width = `${bodyTable.getBoundingClientRect().width}px`

    // Written only when a width actually changed, so a no-op measure does not
    // re-render every cell in the clone's header.
    const cells = Array.from(thead.querySelectorAll('th'))
    const next = cells.map(cell => `${cell.getBoundingClientRect().width}px`)
    const changed = next.length !== cellWidths.value.length
      || next.some((width, index) => width !== cellWidths.value[index]?.width)
    if (changed) cellWidths.value = next.map(width => ({ width }))

    observeCells(cells)
    watchSentinel()
    warnIfContainerIsNotTheScroller()
    track()
  }

  onMounted(async () => {
    // `$refs` on the child and the `setTableHead` function ref are both
    // populated before this runs, but the await hands control back, so the
    // component can be torn down before the rest of this body executes.
    await nextTick()
    if (disposed) return

    const component = tableComponent.value as (ComponentPublicInstance & { $refs: Record<string, HTMLElement | undefined> }) | null
    if (component) {
      container = component.$refs.tableContainer ?? null
      viewport = component.$refs.tableFixedViewport ?? null
      clone = component.$refs.tableFixed ?? null
      bodyTable = component.$refs.tableElement ?? null
      sentinel = component.$refs.tablePinSentinel ?? null
    }

    // Nothing here observes the elements measure() writes to, so a measure
    // cannot retrigger the observer that called it.
    resizeObserver = new ResizeObserver(() => measure())
    if (container) resizeObserver.observe(container)
    if (bodyTable) resizeObserver.observe(bodyTable)

    if (!usingScrollTimeline && container) {
      container.addEventListener('scroll', onContainerScroll, { passive: true })
    }

    // The clipping box's `left` follows the container's position in the
    // viewport, which a ResizeObserver cannot see change on its own.
    window.addEventListener('resize', measure)

    measure()
  })

  onBeforeUnmount(() => {
    disposed = true
    resizeObserver?.disconnect()
    intersectionObserver?.disconnect()
    if (rafId) cancelAnimationFrame(rafId)
    container?.removeEventListener('scroll', onContainerScroll)
    window.removeEventListener('resize', measure)
  })

  return {
    cellWidths,
    fixedHeader,
    measure,
    tableComponent,
    tableHead,
  }
}
