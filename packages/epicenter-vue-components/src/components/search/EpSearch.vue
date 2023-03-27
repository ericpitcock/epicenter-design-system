<template>
  <div class="ep-search">
    <ep-input
      v-model="searchQuery"
      v-bind="computedInputProps"
      @input="handleInput"
      @clear="handleClear"
      @keydown.prevent.down="handleKeyDown"
      @keydown.prevent.up="handleKeyUp"
      @keydown.enter="handleEnter"
      @keydown.esc="handleEsc"
    />
    <div
      v-show="searching"
      ref="resultsList"
      v-click-outside="handleClickOutside"
      class="ep-search__dropdown"
      :style="{ maxHeight: dynamicHeight }"
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

<script>
  import EpInput from '../input/EpInput.vue'
  import calculateHeight from '../../mixins/calculateHeight'
  import clickOutside from '../../directives/clickOutside'
  import debounceMixin from '../../mixins/debounce'

  export default {
    name: 'EpSearch',
    components: {
      EpInput,
    },
    directives: {
      clickOutside,
    },
    mixins: [calculateHeight, debounceMixin],
    props: {
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
    },
    emits: ['clear', 'search', 'selection'],
    data() {
      return {
        currentIndex: 0,
        inputPropDefaults: {
          size: 'default',
          placeholder: 'Search…',
          iconLeft: { name: 'search' },
          clearable: true
        },
        searchQuery: '',
        searching: false,
      }
    },
    computed: {
      computedInputProps() {
        return {
          ...this.inputPropDefaults,
          ...this.inputProps,
        }
      },
    },
    methods: {
      handleClear() {
        this.searchQuery = ''
        this.searching = false
        this.$emit('clear')
      },
      handleClickOutside() {
        this.searching = false
      },
      handleInput() {
        if (this.searchQuery === '') {
          this.searching = false
          return
        }
        this.search()
      },
      getItemOffsetTop(index) {
        const selectedItem = this.$refs.resultsList.children[0].children[index]
        return selectedItem.offsetTop
      },
      handleKeyDown() {
        if (this.searchResults.length === 0 || this.currentIndex === this.searchResults.length - 1) {
          return
        }

        this.currentIndex++

        // get the selected item element and its offset from the top of the dropdown container
        const list = this.$refs.resultsList.children[0]
        let selectedItem
        if (list.children[this.currentIndex]) {
          selectedItem = list.children[this.currentIndex]
        }

        if (selectedItem && selectedItem.offsetTop + selectedItem.offsetHeight > this.$refs.resultsList.scrollTop + this.$refs.resultsList.offsetHeight) {
          // Scroll the container down to bring the selected item into view
          this.$refs.resultsList.scrollTop = selectedItem.offsetTop + selectedItem.offsetHeight - this.$refs.resultsList.offsetHeight
        }
      },
      handleKeyUp() {
        if (this.searchResults.length === 0 || this.currentIndex === 0) {
          return
        }
        this.currentIndex--

        // get the selected item element and its offset from the top of the dropdown container
        const list = this.$refs.resultsList.children[0]
        let selectedItem
        if (list.children[this.currentIndex]) {
          selectedItem = list.children[this.currentIndex]
        }

        if (selectedItem && selectedItem.offsetTop < this.$refs.resultsList.scrollTop) {
          // Scroll the container up to bring the selected item into view
          this.$refs.resultsList.scrollTop = selectedItem.offsetTop
        }
      },
      handleEnter() {
        if (this.searchResults.length === 0) {
          return
        }
        this.handleSelection(this.searchResults[this.currentIndex])
      },
      handleEsc() {
        this.searching = false
      },
      handleMouseEnter(index) {
        this.currentIndex = index
      },
      handleSelection(result) {
        this.searching = false
        this.$emit('selection', result[this.resultsValue])
        this.searchQuery = result[this.resultsLabel]
      },
      async search() {
        this.searching = true
        this.debounce(this.$emit('search', this.searchQuery), 500)
      },
    },
  }
</script>
