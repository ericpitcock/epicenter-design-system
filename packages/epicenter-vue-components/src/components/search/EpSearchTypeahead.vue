<template>
  <div class="ep-search-typeahead">
    <ep-input
      v-model="searchQuery"
      v-bind="computedInputProps"
      spellcheck="false"
      @update:model-value="onInput"
      @clear="resetSearch"
      @keydown.prevent.down="updateactiveItemIndex(1)"
      @keydown.prevent.up="updateactiveItemIndex(-1)"
      @keydown.enter="onEnter"
      @keydown.esc="resetSearch"
    />
    <div
      v-if="returnedSearchResults.length"
      ref="resultsList"
      v-click-outside="resetSearch"
      class="ep-search-typeahead-dropdown"
    >
      <ul>
        <li
          v-for="(result, index) in returnedSearchResults"
          :key="index"
          :class="[
            'ep-search-typeahead-dropdown__item',
            { 'ep-search-typeahead-dropdown__item--active': index === activeItemIndex, }
          ]"
          @click="onSelection(result)"
          @mouseenter="onMouseEnter(index)"
        >
          {{ result[resultsKey] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  defineOptions({
    name: 'EpSearchTypeahead'
  })

  import EpInput from '../input/EpInput.vue'
  import vClickOutside from '../../directives/clickOutside'
  import { useDebounce } from '../../composables/useDebounce.js'
  import { computed, ref, watch } from 'vue'

  const searchQuery = ref('')
  const resultsList = ref(null)
  const activeItemIndex = ref(-1)

  const props = defineProps({
    resultsKey: {
      type: String,
      default: '',
    },
    returnedSearchResults: {
      type: Array,
      required: true,
    },
    inputProps: {
      type: Object,
      default: () => ({}),
    },
  })

  const emit = defineEmits(['clear', 'search', 'selection'])

  // watch activeItemIndex and return the value that is currently highlighted
  const activeItem = computed(() => {
    return props.returnedSearchResults[activeItemIndex.value]
  })

  watch(activeItem, (newValue) => {
    if (newValue) {
      searchQuery.value = newValue[props.resultsKey]
    }
  })

  const computedInputProps = computed(() => {
    return {
      size: 'default',
      placeholder: 'Search…',
      iconLeft: { name: 'search' },
      clearable: true,
      ...props.inputProps,
    }
  })

  const resetSearch = () => {
    searchQuery.value = ''
    activeItemIndex.value = -1
    emit('clear')
  }

  const updateactiveItemIndex = (delta) => {
    const newIndex = activeItemIndex.value + delta

    if (props.returnedSearchResults.length === 0 || newIndex < 0 || newIndex >= props.returnedSearchResults.length) {
      return
    }

    activeItemIndex.value = newIndex

    scrollToSelectedItem()
  }

  const scrollToSelectedItem = () => {
    const list = resultsList.value.children[0]
    const selectedItem = list.children[activeItemIndex.value]

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

  const debouncedSearch = useDebounce((value) => emit('search', value), 200)

  const onInput = () => {
    activeItemIndex.value = -1
    debouncedSearch(searchQuery.value)
  }

  const onEnter = () => {
    if (props.returnedSearchResults.length === 0) {
      return
    }
    onSelection(props.returnedSearchResults[activeItemIndex.value])
  }

  const onMouseEnter = (index) => {
    activeItemIndex.value = index
  }

  const onSelection = (result) => {
    emit('selection', result)
  }
</script>
