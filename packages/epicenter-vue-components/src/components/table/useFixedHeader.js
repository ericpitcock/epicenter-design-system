import { ref, onBeforeUnmount, onMounted, useTemplateRef } from 'vue'

export default function useFixedHeader(
  scrollElement = window,
  initialFixedHeader = false,
  initialFixedHeaderOffset = 0,
  fixedTop = 0,
) {
  const tableComponent = useTemplateRef('tableComponent')
  const tableContainer = ref(null)
  const tableFixed = ref(null)
  const tableBody = ref(null)
  const fixedHeader = ref(initialFixedHeader)
  const fixedHeaderOffset = ref(initialFixedHeaderOffset)
  const cellWidths = ref([])
  const tableHead = ref(null)
  const scrollTarget = scrollElement === window ? window : scrollElement

  // get scroll target top position
  const getScrollTop = () => {
    if (scrollElement === window) {
      return window.scrollY || document.documentElement.scrollTop
    }
    return scrollElement.scrollTop
  }

  const updateCellWidths = () => {
    fixedHeader.value = getScrollTop() > fixedHeaderOffset.value
    if (!fixedHeader.value) return

    const tableHeadCells = tableHead.value?.$refs.tableHeadd.querySelectorAll('th')
    if (!tableHeadCells) return

    cellWidths.value = Array.from(tableHeadCells).map((cell) => ({
      width: `${cell.getBoundingClientRect().width}px`,
    }))
  }

  // need to sync top, right, and left positions
  // top with the fixedTop value
  // right with the tableBody.clientWidth
  // left with the tableContainer.scrollLeft
  const syncTablePosition = () => {
    // top - assigned by the fixedTop value
    tableFixed.value.style.top = `${fixedTop}px`
    // width - match the tableBody width
    tableFixed.value.style.width = `${tableBody.value.clientWidth}px`
    // left - match the tableBody left position
    tableFixed.value.style.left = `${tableBody.value.getBoundingClientRect().left}px`
    // tableFixed.value.style.transform = `translateX(-${tableContainer.value.scrollLeft}px)`
  }

  const updateAndSync = () => {
    updateCellWidths()
    syncTablePosition()
  }

  onMounted(() => {
    tableContainer.value = tableComponent.value.$refs.tableContainer
    tableFixed.value = tableComponent.value.$refs.tableFixed
    tableBody.value = tableComponent.value.$refs.tableBody

    updateAndSync()
    scrollTarget.addEventListener('scroll', updateAndSync)
    window.addEventListener('resize', updateAndSync)
  })

  onBeforeUnmount(() => {
    scrollTarget.removeEventListener('scroll', updateAndSync)
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