<script setup lang="ts">
  import { onClickOutside, useDebounceFn } from '@vueuse/core'
  import { computed, ref, watch } from 'vue'

  import type { Size } from '../../types'
  import EpInput from '../input/EpInput.vue'

  interface EpSearchTypeaheadProps {
    inputProps?: Record<string, unknown>
    resultsKey?: string
    returnedSearchResults: Record<string, unknown>[]
  }

  const {
    returnedSearchResults,
    inputProps = {},
    resultsKey = '',
  } = defineProps<EpSearchTypeaheadProps>()

  const emit = defineEmits<{
    clear: []
    search: [query: string]
    selection: [result: Record<string, unknown>]
  }>()

  const searchQuery = ref('')
  const activeItemIndex = ref(-1)

  const activeItem = computed(() => {
    return returnedSearchResults[activeItemIndex.value]
  })

  watch(activeItem, (newValue) => {
    if (newValue) {
      searchQuery.value = newValue[resultsKey] as string
    }
  })

  const computedInputProps = computed(() => {
    return {
      size: 'default' as Size,
      placeholder: 'Search…',
      clearable: true,
      ...inputProps,
    }
  })

  const resetSearch = (): void => {
    searchQuery.value = ''
    activeItemIndex.value = -1
    emit('clear')
  }

  const resultsListRef = ref<HTMLDivElement | null>(null)

  onClickOutside(resultsListRef, resetSearch)

  const updateactiveItemIndex = (delta: number): void => {
    const newIndex = activeItemIndex.value + delta

    if (returnedSearchResults.length === 0 || newIndex < 0 || newIndex >= returnedSearchResults.length) {
      return
    }

    activeItemIndex.value = newIndex

    scrollToSelectedItem()
  }

  const scrollToSelectedItem = (): void => {
    if (!resultsListRef.value) return
    const list = resultsListRef.value.children[0] as HTMLElement
    const selectedItem = list.children[activeItemIndex.value] as HTMLElement

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

  const debouncedSearch = useDebounceFn((value: string) => emit('search', value), 200)

  const onInput = (): void => {
    activeItemIndex.value = -1
    debouncedSearch(searchQuery.value)
  }

  const onEnter = (): void => {
    if (returnedSearchResults.length === 0) {
      return
    }
    onSelection(returnedSearchResults[activeItemIndex.value])
  }

  const onMouseEnter = (index: number): void => {
    activeItemIndex.value = index
  }

  const onSelection = (result: Record<string, unknown>): void => {
    emit('selection', result)
  }
</script>

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
      ref="resultsListRef"
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
