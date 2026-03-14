import { type ComponentPublicInstance, type Ref, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'

/** Return type of the useFixedHeader composable */
export interface UseFixedHeaderReturn {
  /** Measured widths for each header cell (used to sync fixed header) */
  cellWidths: Ref<{ width: string }[]>
  /** Whether the fixed header is currently visible */
  fixedHeader: Ref<boolean>
  /** Scroll offset at which the fixed header activates */
  fixedHeaderOffset: Ref<number>
  /** Sync the fixed header position with the table body */
  syncTablePosition: () => void
  /** Template ref for the EpTable component instance */
  tableComponent: Readonly<Ref<ComponentPublicInstance | null>>
  /** Ref to the EpTableHead component instance */
  tableHead: Ref<ComponentPublicInstance | null>
  /** Combined update + sync */
  updateAndSync: () => void
  /** Recalculate cell widths and fixed-header visibility */
  updateCellWidths: () => void
}

/**
 * Composable that implements a fixed/sticky table header that appears
 * when the user scrolls past the original header position.
 *
 * @param scrollElement - The scrollable container (defaults to `window` on mount)
 * @param initialFixedHeader - Whether the fixed header starts visible
 * @param initialFixedHeaderOffset - Scroll offset threshold
 * @param fixedTop - CSS top position for the fixed header in pixels
 */
export default function useFixedHeader(
  scrollElement?: HTMLElement | Window,
  initialFixedHeader = false,
  initialFixedHeaderOffset = 0,
  fixedTop = 0,
): UseFixedHeaderReturn {
  const tableComponent = useTemplateRef<ComponentPublicInstance>('tableComponent')
  const tableContainer = ref<HTMLElement | null>(null)
  const tableFixed = ref<HTMLElement | null>(null)
  const tableBody = ref<HTMLElement | null>(null)
  const fixedHeader = ref(initialFixedHeader)
  const fixedHeaderOffset = ref(initialFixedHeaderOffset)
  const cellWidths = ref<{ width: string }[]>([])
  const tableHead = ref<ComponentPublicInstance | null>(null)

  // Resolved at mount time — SSR-safe
  let resolvedScrollElement: HTMLElement | Window = typeof window !== 'undefined' ? window : (null as unknown as Window)

  const getScrollTop = (): number => {
    if (resolvedScrollElement === window) {
      return window.scrollY || document.documentElement.scrollTop
    }
    return (resolvedScrollElement as HTMLElement).scrollTop
  }

  const updateCellWidths = (): void => {
    fixedHeader.value = getScrollTop() > fixedHeaderOffset.value
    if (!fixedHeader.value) return

    const tableHeadInstance = tableHead.value as (ComponentPublicInstance & { $refs: Record<string, HTMLElement | undefined> }) | null
    const tableHeadEl = tableHeadInstance?.$refs.thead as HTMLElement | undefined
    const tableHeadCells = tableHeadEl?.querySelectorAll('th')
    if (!tableHeadCells) return

    cellWidths.value = Array.from(tableHeadCells).map((cell) => ({
      width: `${cell.getBoundingClientRect().width}px`,
    }))
  }

  const syncTablePosition = (): void => {
    if (!tableFixed.value || !tableBody.value) return
    tableFixed.value.style.top = `${fixedTop}px`
    tableFixed.value.style.width = `${tableBody.value.clientWidth}px`
    tableFixed.value.style.left = `${tableBody.value.getBoundingClientRect().left}px`
  }

  const updateAndSync = (): void => {
    updateCellWidths()
    syncTablePosition()
  }

  onMounted(() => {
    if (scrollElement) {
      resolvedScrollElement = scrollElement
    }

    const component = tableComponent.value as (ComponentPublicInstance & { $refs: Record<string, HTMLElement | undefined> }) | null
    if (component) {
      tableContainer.value = (component.$refs.tableContainer as HTMLElement) ?? null
      tableFixed.value = (component.$refs.tableFixed as HTMLElement) ?? null
      tableBody.value = (component.$refs.tableBody as HTMLElement) ?? null
    }

    updateAndSync()
    resolvedScrollElement.addEventListener('scroll', updateAndSync)
    window.addEventListener('resize', updateAndSync)
  })

  onBeforeUnmount(() => {
    resolvedScrollElement.removeEventListener('scroll', updateAndSync)
    window.removeEventListener('resize', updateAndSync)
  })

  return {
    fixedHeader,
    fixedHeaderOffset,
    cellWidths,
    tableComponent,
    tableHead,
    updateCellWidths,
    syncTablePosition,
    updateAndSync,
  }
}