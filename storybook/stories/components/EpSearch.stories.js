import EpSearch from '@/components/search/EpSearch.vue'
import webColors from '../../data/webColors.json'
import { ref } from 'vue'

export default {
  title: 'Components/Search',
  component: EpSearch,
  argTypes: {
    calculateHeight: { table: { disable: true } },
    calculateHeightOffset: { table: { disable: true } },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    resultsLabel: { table: { disable: true } },
    resultsValue: { table: { disable: true } },
    searchResults: { table: { disable: true } },
  },
}

export const Autocomplete = args => ({
  components: { EpSearch },
  setup() {
    const searchResults = ref([])
    const bg = ref('var(--interface-surface)')

    const setBackground = color => {
      bg.value = color
      searchResults.value = []
    }

    const clearResults = () => {
      bg.value = 'var(--interface-surface)'
      searchResults.value = []
    }

    const searchWebColors = query => {
      console.log('searching for:', query)
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
    <div :style="{ height: '100%', background: bg, padding: '3rem'}">
      <ep-search
        calculateHeight
        :calculateHeightOffset="74"
        :search-results="searchResults"
        results-label="name"
        results-value="hex"
        :input-props="{ width: '60rem', placeholder: 'Find your favorite color…', size: 'xlarge' }"
        @search="searchWebColors"
        @selection="setBackground"
        @clear="clearResults"
      />
    </div>
  `,
})
