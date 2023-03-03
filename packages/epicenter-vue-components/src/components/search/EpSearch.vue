<template>
  <div class="ep-search">
    <ep-input
      height="4rem"
      :placeholder="placeholder"
      :icon="{ name: 'search' }"
      v-model="searchQuery"
      @input="handleInput"
      @clear="handleClear"
    />
    <div v-show="searching" class="ep-search__dropdown">
      <ul>
        <li
          v-for="(result, index) in searchResults"
          :key="index"
          class="ep-search__dropdown__item"
          @click="handleSelection(result)"
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
        searchQuery: '',
        searching: false,
      }
    },
    methods: {
      handleClear() {
        this.searchQuery = ''
        this.$emit('clear')
      },
      handleInput() {
        if (this.searchQuery === '') {
          this.searching = false
          return
        }
        this.search()
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
