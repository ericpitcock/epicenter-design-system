<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core'
  import { computed, onBeforeUnmount, ref, useId, useTemplateRef } from 'vue'

  import type { Size } from '../../types'
  import EpInput from '../input/EpInput.vue'

  interface Props {
    inputProps?: Record<string, unknown>
    resultsKey?: string
    returnedSearchResults: Record<string, unknown>[]
  }

  const {
    returnedSearchResults,
    inputProps = {},
    resultsKey = '',
  } = defineProps<Props>()

  const emit = defineEmits<{
    clear: []
    search: [query: string]
    selection: [result: Record<string, unknown>]
  }>()

  defineOptions({ name: 'EpSearchTypeahead' })

  const searchQuery = ref('')
  const activeItemIndex = ref(-1)

  const id = useId()
  const listboxId = `${id}-listbox`
  const optionId = (index: number): string => `${id}-option-${index}`

  const isOpen = computed(() => returnedSearchResults.length > 0)

  const activeItem = computed(() => {
    return returnedSearchResults[activeItemIndex.value]
  })

  const computedInputProps = computed(() => {
    return {
      size: 'default' as Size,
      placeholder: 'Search…',
      clearable: true,
      ...inputProps,
    }
  })

  const listboxLabel = computed(() => {
    const { label, placeholder } = computedInputProps.value as Record<string, unknown>
    return (label || placeholder) as string
  })

  let debounceTimer: ReturnType<typeof setTimeout> | undefined

  const cancelPendingSearch = (): void => {
    clearTimeout(debounceTimer)
  }

  const debouncedSearch = (value: string): void => {
    cancelPendingSearch()
    debounceTimer = setTimeout(() => emit('search', value), 200)
  }

  onBeforeUnmount(cancelPendingSearch)

  const resetSearch = (): void => {
    cancelPendingSearch()
    searchQuery.value = ''
    activeItemIndex.value = -1
    emit('clear')
  }

  const rootRef = useTemplateRef<HTMLDivElement>('rootRef')
  const resultsListRef = useTemplateRef<HTMLDivElement>('resultsListRef')

  onClickOutside(rootRef, () => {
    if (isOpen.value) resetSearch()
  })

  const syncSearchQueryToResult = (result?: Record<string, unknown>): void => {
    if (result) {
      searchQuery.value = result[resultsKey] as string
    }
  }

  const onActiveItemIndexUpdate = (delta: number): void => {
    const newIndex = activeItemIndex.value + delta

    if (returnedSearchResults.length === 0 || newIndex < 0 || newIndex >= returnedSearchResults.length) {
      return
    }

    activeItemIndex.value = newIndex
    syncSearchQueryToResult(activeItem.value)

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

  const onInput = (): void => {
    activeItemIndex.value = -1
    debouncedSearch(searchQuery.value)
  }

  const onEnter = (): void => {
    if (!activeItem.value) {
      return
    }
    onSelection(activeItem.value)
  }

  const onMouseEnter = (index: number): void => {
    activeItemIndex.value = index
  }

  const onSelection = (result: Record<string, unknown>): void => {
    syncSearchQueryToResult(result)
    emit('selection', result)
  }
</script>

<template>
  <div
    ref="rootRef"
    class="ep-search-typeahead"
  >
    <ep-input
      v-model="searchQuery"
      v-bind="computedInputProps"
      spellcheck="false"
      autocomplete="off"
      role="combobox"
      aria-autocomplete="list"
      :aria-expanded="isOpen"
      :aria-controls="isOpen ? listboxId : undefined"
      :aria-activedescendant="activeItem ? optionId(activeItemIndex) : undefined"
      @update:model-value="onInput"
      @clear="resetSearch"
      @keydown.prevent.down="onActiveItemIndexUpdate(1)"
      @keydown.prevent.up="onActiveItemIndexUpdate(-1)"
      @keydown.enter="onEnter"
      @keydown.esc="resetSearch"
    />
    <div
      v-if="isOpen"
      ref="resultsListRef"
      class="ep-search-typeahead-dropdown"
    >
      <ul
        :id="listboxId"
        role="listbox"
        :aria-label="listboxLabel"
      >
        <li
          v-for="(result, index) in returnedSearchResults"
          :id="optionId(index)"
          :key="index"
          role="option"
          :aria-selected="index === activeItemIndex"
          :class="[
            'ep-search-typeahead-dropdown__item',
            { 'ep-search-typeahead-dropdown__item--active': index === activeItemIndex, }
          ]"
          @mousedown.prevent
          @click="onSelection(result)"
          @mouseenter="onMouseEnter(index)"
        >
          {{ result[resultsKey] }}
        </li>
      </ul>
    </div>
  </div>
</template>
