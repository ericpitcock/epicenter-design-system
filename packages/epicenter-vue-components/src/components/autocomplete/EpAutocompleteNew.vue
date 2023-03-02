<template>
  <div class="ep-autocomplete">
    <input
      class="ep-input"
      type="text"
      v-model="searchQuery"
      @input="debouncedSearch"
    />
    <div class="ep-autocomplete__dropdown">
      <div class="loading">
        Searching...
      </div>
      <ul v-if="searchResults.length">
        <li
          v-for="result in searchResults"
          :key="result.id"
          @click="select(result)"
        >
          {{ result[displayKey] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import debounceMixin from '../../mixins/debounce'

  export default {
    name: 'EpAutocompleteNew',
    mixins: [debounceMixin],
    props: {
      searchResults: {
        type: Array,
        required: true,
      },
      displayKey: {
        type: String,
        default: 'place_name',
      },
    },
    data() {
      return {
        searchQuery: '',
        searching: false,
      }
    },
    methods: {
      select(result) {
        this.$emit('select', result)
        this.searchQuery = ''
      },
      async search() {
        this.searching = true
        this.$emit('search', this.searchQuery)
        this.searching = false
      },
    },
    computed: {
      // debouncedSearch() {
      //   return debounce(this.search, 500)
      // },
      debouncedSearch() {
        return this.debounce(this.search, 500)
      }
    },
  }
</script>
