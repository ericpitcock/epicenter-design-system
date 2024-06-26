import { paddedSurface } from '../../helpers/decorators.js'
import EpSearchTypeahead from '@/components/search/EpSearchTypeahead.vue'
import webColors from '../../data/webColors.json'
import { ref } from 'vue'

export default {
  title: 'Components/Search/Typeahead',
  component: EpSearchTypeahead,
  decorators: [paddedSurface],
  argTypes: {
    resultsKey: { table: { disable: true } },
    returnedSearchResults: { table: { disable: true } },
    inputProps: { table: { disable: true } },
  },
}

export const Typeahead = args => ({
  components: { EpSearchTypeahead },
  setup() {
    const searchResults = ref([])
    const bg = ref('var(--interface-surface)')

    const setBackground = color => {
      bg.value = color.hex
      searchResults.value = []
    }

    const clearResults = () => {
      bg.value = 'var(--interface-surface)'
      searchResults.value = []
    }

    const searchWebColors = query => {
      if (!query) {
        searchResults.value = []
        return
      }
      const results = webColors.filter(color =>
        color.name.toLowerCase().includes(query.toLowerCase())
      )
      searchResults.value = results
    }

    return {
      args,
      bg,
      clearResults,
      searchResults,
      searchWebColors,
      setBackground,
    }
  },
  template: `
    <ep-search-typeahead
      :returned-search-results="searchResults"
      results-key="name"
      :input-props="{
        width: '60rem',
        placeholder: 'Search for your favorite color…',
        size: 'xlarge'
      }"
      @search="searchWebColors"
      @selection="setBackground"
      @clear="clearResults"
    />
  `
})
