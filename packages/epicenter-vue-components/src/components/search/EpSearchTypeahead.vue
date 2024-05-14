<template>
  <div class="ep-search-typeahead">
    <ep-input
      v-model="searchQuery"
      v-bind="computedInputProps"
      spellcheck="false"
      @update:model-value="handleInput"
      @clear="resetSearch"
      @keydown.prevent.down="updateCurrentIndex(1)"
      @keydown.prevent.up="updateCurrentIndex(-1)"
      @keydown.enter="handleEnter"
      @keydown.esc="resetSearch"
    />
    <div
      v-if="searchResults.length"
      ref="resultsList"
      v-click-outside="resetSearch"
      class="ep-search-typeahead-dropdown"
    >
      <ul>
        <li
          v-for="(result, index) in searchResults"
          :key="index"
          class="ep-search-typeahead-dropdown__item"
          :class="{
            'ep-search-typeahead-dropdown__item--active': index === currentIndex,
          }"
          @click="handleSelection(result)"
          @mouseenter="handleMouseEnter(index)"
        >
          {{ result[resultsLabel] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import EpInput from '../input/EpInput.vue'
  import vClickOutside from '../../directives/clickOutsideNext'
  import { useDebounce } from '../../composables/useDebounce.js'
  import { computed, ref, watch } from 'vue'

  const searchQuery = ref('')
  const resultsList = ref(null)
  const currentIndex = ref(-1)

  const props = defineProps({
    resultsLabel: {
      type: String,
      default: '',
    },
    resultsValue: {
      type: String,
      default: '',
    },
    searchResults: {
      type: Array,
      required: true,
    },
    inputProps: {
      type: Object,
      default: () => ({}),
    },
  })

  // watch currentIndex and return the value that is currently highlighted
  const currentResult = computed(() => {
    return props.searchResults[currentIndex.value]
  })

  watch(currentResult, (newValue) => {
    if (newValue) {
      searchQuery.value = newValue[props.resultsLabel]
    }
  })

  const debouncedSearch = useDebounce((value) => emit('search', value), 200)

  const handleInput = () => {
    currentIndex.value = -1
    debouncedSearch(searchQuery.value)
  }

  const computedInputProps = computed(() => {
    return {
      size: 'default',
      placeholder: 'Search…',
      iconLeft: { name: 'search' },
      clearable: true,
      ...props.inputProps,
    }
  })

  const emit = defineEmits(['clear', 'search', 'selection'])

  const resetSearch = () => {
    searchQuery.value = ''
    currentIndex.value = -1
    emit('clear')
  }

  const updateCurrentIndex = (delta) => {
    const newIndex = currentIndex.value + delta

    if (props.searchResults.length === 0 || newIndex < 0 || newIndex >= props.searchResults.length) {
      return
    }

    currentIndex.value = newIndex

    scrollToSelectedItem()
  }

  const scrollToSelectedItem = () => {
    const list = resultsList.value.children[0]
    const selectedItem = list.children[currentIndex.value]

    if (!selectedItem) return

    const dropdownHeight = resultsList.value.offsetHeight
    const itemTop = selectedItem.offsetTop
    const itemBottom = itemTop + selectedItem.offsetHeight

    if (itemBottom > dropdownHeight + resultsList.value.scrollTop) {
      resultsList.value.scrollTop = itemBottom - dropdownHeight
    } else if (itemTop < resultsList.value.scrollTop) {
      resultsList.value.scrollTop = itemTop
    }
  }

  const handleEnter = () => {
    if (props.searchResults.length === 0) {
      return
    }
    handleSelection(props.searchResults[currentIndex.value])
  }

  const handleMouseEnter = (index) => {
    currentIndex.value = index
  }

  const handleSelection = (result) => {
    console.log('result', result)
    emit('selection', result)
  }
</script>
