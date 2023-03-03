<template>
  <div class="ep-search">
    <ep-input
      height="4rem"
      :placeholder="placeholder"
      :icon="{ name: 'search' }"
      v-model="searchQuery"
      @input="handleInput"
      @clear="handleClear"
      @keydown.down="handleKeyDown"
      @keydown.up="handleKeyUp"
      @keydown.enter="handleEnter"
      @keydown.esc="handleEsc"
    />
    <div v-show="searching" class="ep-search__dropdown">
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
  import debounceMixin from '../../mixins/debounce'

  export default {
    name: 'EpSearch',
    mixins: [debounceMixin],
    components: {
      EpInput,
    },
    props: {
      placeholder: {
        type: String,
        default: 'Search…',
      },
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
    },
    data() {
      return {
        currentIndex: -1,
        searchQuery: '',
        searching: false,
      }
    },
    methods: {
      handleClear() {
        this.searchQuery = ''
        this.searching = false
        this.$emit('clear')
      },
      handleInput() {
        if (this.searchQuery === '') {
          this.searching = false
          return
        }
        this.search()
      },
      handleKeyDown() {
        if (this.searchResults.length === 0) {
          return
        }
        if (this.currentIndex === this.searchResults.length - 1) {
          this.currentIndex = 0
        } else {
          this.currentIndex++
        }
      },
      handleKeyUp() {
        if (this.searchResults.length === 0) {
          return
        }
        if (this.currentIndex === 0) {
          this.currentIndex = this.searchResults.length - 1
        } else {
          this.currentIndex--
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
