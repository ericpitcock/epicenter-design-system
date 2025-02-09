import { computed, ref } from 'vue'

import useExclude from './useExclude.js'

export default function useColumnFilters(columns, data, disabledColumns) {
  const disabledColumnsRef = ref(disabledColumns)

  const columnFilters = computed(() => {
    return columns.value.map(column => ({
      id: column.key,
      name: 'columns',
      value: column.key,
      checked: !disabledColumnsRef.value.includes(column.key),
      label: column.label,
      disabled: false,
      filterable: column.filterable
    })).filter(column => column.filterable)
  })

  const onFilterToggle = (event, filterId) => {
    if (!event) {
      disabledColumnsRef.value.push(filterId)
    } else {
      disabledColumnsRef.value = disabledColumnsRef.value.filter(column => column !== filterId)
    }
  }

  const {
    includedColumns: visibleColumns,
    includedData: visibleData
  } = useExclude(columns, data, disabledColumnsRef)

  return {
    columnFilters,
    visibleColumns,
    visibleData,
    onFilterToggle
  }
}
