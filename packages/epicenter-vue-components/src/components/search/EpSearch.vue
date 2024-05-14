<template>
  <div class="ep-search">
    <ep-input
      v-model="searchQuery"
      v-bind="computedInputProps"
      spellcheck="false"
      @clear="handleClear"
      @keydown.prevent.down="onDownArrow"
      @keydown.prevent.up="onUpArrow"
      @keydown.enter="handleEnter"
      @keydown.esc="handleEsc"
    />
    <div
      v-show="searching"
      ref="resultsList"
      v-click-outside="handleClickOutside"
      class="ep-search__dropdown"
    >
      <ul>
        <li
          v-for="(result, index) in searchResults"
          :key="index"
          class="ep-search__dropdown__item"
          :class="{
            'ep-search__dropdown__item--active': index === currentIndex,
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
  import * as vClickOutside from '../../directives/clickOutsideNext'
  import { useDebounce } from '../../composables/useDebounce.js'
  import { computed, ref, watch } from 'vue'

  const resultsList = ref(null)
  const currentIndex = ref(0)
  const searching = ref(false)

  const searchQuery = ref('')
  watch(searchQuery, () => {
    if (searchQuery.value === '') {
      searching.value = false
      currentIndex.value = 0
      return
    }
    useDebounce(emit('search', searchQuery.value), 500)
    // search()
  })

  // const inputPropDefaults = {
  //   size: 'default',
  //   placeholder: 'Search…',
  //   iconLeft: { name: 'search' },
  //   clearable: true
  // }

  const computedInputProps = computed(() => {
    return {
      size: 'default',
      placeholder: 'Search…',
      iconLeft: { name: 'search' },
      clearable: true,
      ...props.inputProps,
    }
  })

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

  watch(() => props.searchResults, () => {
    if (props.searchResults.length > 0) {
      searching.value = true
    } else {
      searching.value = false
    }

    // if (props.searchResults.length === 0) {
    //   searching.value = false
    // }
  })

  const emit = defineEmits(['clear', 'search', 'selection'])

  const handleClear = () => {
    searchQuery.value = ''
    searching.value = false
    currentIndex.value = 0
    emit('clear')
  }

  const handleClickOutside = () => {
    searching.value = false
  }

  // const handleInput = () => {
  //   if (searchQuery.value === '') {
  //     searching.value = false
  //     currentIndex.value = 0
  //     return
  //   }
  //   search()
  // }

  // const getItemOffsetTop = (index) => {
  //   const selectedItem = this.resultsList.value.children[0].children[index]
  //   return selectedItem.offsetTop
  // }

  const onDownArrow = () => {
    if (props.searchResults.length === 0 || currentIndex.value === props.searchResults.length - 1) {
      return
    }

    currentIndex.value++

    // get the selected item element and its offset from the top of the dropdown container
    const list = resultsList.value.children[0]
    let selectedItem
    if (list.children[currentIndex.value]) {
      selectedItem = list.children[currentIndex.value]
    }

    if (selectedItem && selectedItem.offsetTop + selectedItem.offsetHeight > resultsList.value.scrollTop + resultsList.value.offsetHeight) {
      // Scroll the container down to bring the selected item into view
      resultsList.value.scrollTop = selectedItem.offsetTop + selectedItem.offsetHeight - resultsList.value.offsetHeight
    }
  }

  const onUpArrow = () => {
    if (props.searchResults.length === 0 || currentIndex.value === 0) {
      return
    }
    currentIndex.value--

    // get the selected item element and its offset from the top of the dropdown container
    const list = resultsList.value.children[0]
    let selectedItem
    if (list.children[currentIndex.value]) {
      selectedItem = list.children[currentIndex.value]
    }

    if (selectedItem && selectedItem.offsetTop < resultsList.value.scrollTop) {
      // Scroll the container up to bring the selected item into view
      resultsList.value.scrollTop = selectedItem.offsetTop
    }
  }

  const handleEnter = () => {
    if (props.searchResults.length === 0) {
      return
    }
    console.log('handleEnter')
    handleSelection(props.searchResults[currentIndex.value])
  }

  const handleEsc = () => {
    searching.value = false
    searchQuery.value = ''
  }

  const handleMouseEnter = (index) => {
    currentIndex.value = index
  }

  const handleSelection = (result) => {
    console.log('handleSelection')
    emit('selection', result[props.resultsValue])
    searchQuery.value = result[props.resultsLabel]
    searching.value = false
  }

  // const search = async () => {
  //   searching.value = true
  //   useDebounce(emit('search', searchQuery.value), 500)
  // }

</script>
