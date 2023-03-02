<template>
  <div
    class="ep-autocomplete"
    style="width: 600px;"
  >
    <input
      class="ep-input"
      type="text"
      v-model="searchQuery"
      @input="handleInput"
    />
    <div
      v-show="searching"
      class="ep-autocomplete__dropdown"
    >
      <ul>
        <li
          v-for="(result, index) in searchResults"
          :key="index"
          class="ep-autocomplete__dropdown__item"
          @click="handleSelection(result)"
        >
          {{ result[resultsLabel] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import debounceMixin from '../../mixins/debounce'

  export default {
    name: 'EpSearch',
    mixins: [debounceMixin],
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
      }
    },
    data() {
      return {
        searchQuery: '',
        searching: false,
      }
    },
    methods: {
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
      }
    }
  }
</script>
