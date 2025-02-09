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
  import { onClickOutside } from '@vueuse/core'
  import { computed, ref, useTemplateRef, watch } from 'vue'

  import { useDebounce } from '../../composables'
  import EpInput from '../input/EpInput.vue'

  defineOptions({
    name: 'EpSearchTypeahead'
  })

  const searchQuery = ref('')
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

  const resultsListRef = useTemplateRef('resultsList')

  onClickOutside(resultsListRef, resetSearch)

  const updateactiveItemIndex = (delta) => {
    const newIndex = activeItemIndex.value + delta

    if (props.returnedSearchResults.length === 0 || newIndex < 0 || newIndex >= props.returnedSearchResults.length) {
      return
    }

    activeItemIndex.value = newIndex

    scrollToSelectedItem()
  }

  const scrollToSelectedItem = () => {
    const list = resultsListRef.value.children[0]
    const selectedItem = list.children[activeItemIndex.value]

    if (!selectedItem) return

    const dropdownHeight = resultsListRef.value.offsetHeight
    const itemTop = selectedItem.offsetTop
    const itemBottom = itemTop + selectedItem.offsetHeight

    if (itemBottom > dropdownHeight + resultsListRef.value.scrollTop) {
      resultsListRef.value.scrollTop = itemBottom - dropdownHeight
    } else if (itemTop < resultsListRef.value.scrollTop) {
      resultsListRef.value.scrollTop = itemTop
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
