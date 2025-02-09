import { ref } from 'vue'

import EpSearchTypeahead from '@/components/search/EpSearchTypeahead.vue'

import webColors from '../../data/webColors.json'

export default {
  title: 'Components/Search/Typeahead',
  component: EpSearchTypeahead,
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
      console.log('setBackground', color)
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
    <div :style="{
      height: '100%',
      padding: '3rem',
      backgroundColor: bg,
    }">
      <ep-search-typeahead
        :returned-search-results="searchResults"
        results-key="name"
        :input-props="{
          placeholder: 'Search for your favorite color…',
          size: 'xlarge'
        }"
        @search="searchWebColors"
        @selection="setBackground"
        @clear="clearResults"
      />
    </div>
  `
})
