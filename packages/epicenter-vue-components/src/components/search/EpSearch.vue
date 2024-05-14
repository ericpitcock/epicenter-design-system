<template>
  <div class="ep-search">
    <ep-input
      ref="searchInput"
      v-model="searchQuery"
      v-bind="computedInputProps"
      spellcheck="false"
      @update:model-value="handleInput"
      @clear="handleClear"
      @keydown.prevent.down="onDownArrow"
      @keydown.prevent.up="onUpArrow"
      @keydown.enter="handleEnter"
      @keydown.esc="handleEsc"
    />
    <div
      v-if="searchResults.length"
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
  import vClickOutside from '../../directives/clickOutsideNext'
  import { useDebounce } from '../../composables/useDebounce.js'
  import { computed, ref, watch } from 'vue'

  const resultsList = ref(null)
  const searchInput = ref(null)
  const currentIndex = ref(-1)
  const userIsTyping = ref(false)

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

  // const searching = ref(false)
  // const searchValue = ref('')

  // watch currentIndex and return the value that is currently highlighted
  const currentResult = computed(() => {
    return props.searchResults[currentIndex.value]
  })

  watch(currentResult, (newValue, oldValue) => {
    if (newValue) {
      searchQuery.value = newValue[props.resultsLabel]
    }
  })

  const debouncedSearch = useDebounce((value) => emit('search', value), 200)
  // const search = async () => {
  //   console.log('searching...')
  //   debouncedSearch(searchQuery.value)
  //   // searching.value = true
  // }

  const handleInput = () => {
    console.log('user is typing, let’s run a query on', searchQuery.value)
    currentIndex.value = -1
    debouncedSearch(searchQuery.value)
  }

  const searchQuery = ref('')
  watch(searchQuery, (newValue, oldValue) => {
    console.log('watch:searchQuery.value', searchQuery.value)
    // debouncedSearch(searchQuery.value)
    // if (searchQuery.value === '') {
    //   console.log('watch:searchQuery.value is empty')
    //   // searching.value = false
    //   currentIndex.value = 0
    //   return
    // }
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

  watch(() => props.searchResults, () => {
    console.log('watch:props.searchResults', props.searchResults)
  })

  const emit = defineEmits(['clear', 'search', 'selection'])

  // const handleInput = () => {
  //   if (searchQuery.value === '') {
  //     searching.value = false
  //     return
  //   }
  //   search()
  // }



  const handleClear = () => {
    searchQuery.value = ''
    // searching.value = false
    currentIndex.value = -1
    emit('clear')
  }

  const handleClickOutside = () => {
    searchQuery.value = ''
    // searching.value = false
  }

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
    handleSelection(props.searchResults[currentIndex.value])
  }

  const handleEsc = () => {
    searchQuery.value = ''
    // searching.value = false
  }

  const handleMouseEnter = (index) => {
    currentIndex.value = index
  }

  const handleSelection = (result) => {
    // searchValue.value = result[props.resultsValue]
    // searching.value = false
    emit('selection', result[props.resultsValue])
    // searchQuery.value = result[props.resultsLabel]
  }
</script>
