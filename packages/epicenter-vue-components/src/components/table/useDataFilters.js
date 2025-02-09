import { computed, onMounted, ref } from 'vue'

export default function useDataFilters(
  columns,
  data,
  columnsToFilter,
  disabledFilters = [],
  customSortOrder = {},
  showCount = false,
  columnRangeCategories = {},
) {
  const filters = ref({})

  const generateFilters = () => {
    const uniqueValues = {}

    // Extract unique values for specified columns
    columns.value.forEach(column => {
      const columnKey = column.key

      if (columnsToFilter.includes(columnKey)) {
        if (columnRangeCategories[columnKey]) {
          // Use ranges for category mapping
          uniqueValues[columnKey] = Object.keys(columnRangeCategories[columnKey])
        } else {
          // Use raw unique values otherwise
          uniqueValues[columnKey] = Array.from(
            new Set(data.value.map(user => getColumnValue(user, columnKey)))
          )
        }
      }
    })

    // Sort unique values based on custom sort order if provided
    for (const key in uniqueValues) {
      if (customSortOrder[key]) {
        uniqueValues[key].sort((a, b) => {
          const indexA = customSortOrder[key].indexOf(a)
          const indexB = customSortOrder[key].indexOf(b)
          return indexA - indexB
        })
      } else {
        uniqueValues[key].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
      }
    }

    const generatedFilters = {}

    // Generate filter objects based on unique values or ranges
    for (const key in uniqueValues) {
      const generateLabel = (value) => {
        if (showCount) {
          const count = columnRangeCategories[key]
            ? data.value.filter(user =>
              columnRangeCategories[key][value](getColumnValue(user, key))
            ).length
            : data.value.filter(user => getColumnValue(user, key) === value).length
          return `${value} (${count})`
        } else {
          return value
        }
      }

      const generateUniqueId = () => crypto.randomUUID()

      generatedFilters[key] = uniqueValues[key].map(value => ({
        id: generateUniqueId(),
        name: key,
        value: value,
        checked: disabledFilters.includes(value) ? false : true,
        label: generateLabel(value),
        disabled: false,
      }))
    }

    filters.value = generatedFilters
  }

  const getColumnValue = (item, key) => {
    return item[key]?.value || item[key]
  }

  const filteredData = computed(() => {
    let filtered = data.value

    // Apply filters
    for (const key in filters.value) {
      filtered = filtered.filter(user => {
        const value = getColumnValue(user, key)
        const isChecked = filters.value[key].some(filter => {
          if (columnRangeCategories[key]) {
            return filter.checked && columnRangeCategories[key][filter.value](value)
          } else {
            return filter.checked && filter.value === value
          }
        })
        return isChecked
      })
    }

    return filtered
  })

  const onFilterUpdate = ({ category, label, checked }) => {
    filters.value[category].find(filter => filter.label === label).checked = checked
  }

  const resetFilters = () => {
    for (const key in filters.value) {
      filters.value[key].forEach(filter => {
        if (!disabledFilters.includes(filter.value)) {
          filter.checked = true
        }
      })
    }
  }

  onMounted(() => generateFilters())

  return {
    filters,
    filteredData,
    onFilterUpdate,
    resetFilters
  }
}