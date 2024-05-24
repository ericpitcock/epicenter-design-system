import { ref, computed } from 'vue'
import useExclude from './useExclude.js'

export default function useColumnFilters(columns, disabledColumns, data) {
  // these are the columns that are disabled by default
  const disabledColumnsRef = ref(disabledColumns)

  // we're creating an array of objects that will be used to create checkboxes
  const columnFilters = computed(() => {
    return columns.value.map(column => ({
      id: column.key,
      name: 'columns',
      value: column.key,
      checked: !disabledColumnsRef.value.includes(column.key),
      label: column.label,
      disabled: false,
    }))
    // don't need to filter out excluded, we're doing that elsewhere
    // .filter(filter => !tableProps.exclude.includes(filter.id))
  })

  const handleFilter = (event, filterId) => {
    if (!event) {
      disabledColumnsRef.value.push(filterId)
    } else {
      disabledColumnsRef.value = disabledColumnsRef.value.filter(column => column !== filterId)
    }
  }

  const { includedColumns: visibleColumns, includedData: visibleData } = useExclude(columns, data, disabledColumnsRef)

  console.log('columnFilters', columnFilters.value)
  return { columnFilters, disabledColumnsRef, visibleColumns, visibleData, handleFilter }
}