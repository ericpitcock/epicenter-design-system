<template>
  <div
    class="ep-search"
    style="width: 600px;"
  >
    <ep-input
      height="4rem"
      placeholder="Search…"
      :icon="{ name: 'search' }"
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
  import EpInput from '../input/EpInput.vue'
  import debounceMixin from '../../mixins/debounce'

  export default {
    name: 'EpSearch',
    mixins: [debounceMixin],
    components: {
      EpInput,
    },
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
        console.log('handleInput')
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
        console.log('search')
        this.searching = true
        this.debounce(this.$emit('search', this.searchQuery), 500)
      }
    }
  }
</script>
