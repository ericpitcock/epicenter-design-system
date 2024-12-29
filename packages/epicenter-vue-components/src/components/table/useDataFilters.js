import { ref, computed, onMounted } from 'vue'
import { faker } from '@faker-js/faker'

export default function useDataFilters(
  columns,
  data,
  columnsToFilter,
  disabledFilters = [],
  customSortOrder = {},
  showCount = false
) {
  const filters = ref({})

  const generateFilters = () => {
    const uniqueValues = {}

    // Extract unique values for specified columns
    columns.value.forEach(column => {
      if (columnsToFilter.includes(column.key)) {
        uniqueValues[column.key] = Array.from(
          new Set(data.value.map(user => getColumnValue(user, column.key))))
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

    // Generate filter objects based on unique values
    for (const key in uniqueValues) {
      const generateLabel = (value) => {
        if (showCount) {
          return `${value} (${data.value.filter(user => getColumnValue(user, key) === value).length})`
        } else {
          return value
        }
      }

      generatedFilters[key] = uniqueValues[key].map(value => ({
        id: faker.string.uuid(),
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
        const checked = filters.value[key].find(filter => filter.value === value).checked
        return checked
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
