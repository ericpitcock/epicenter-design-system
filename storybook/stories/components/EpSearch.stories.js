import EpSearch from '@/components/search/EpSearch.vue'
import webColors from '../../data/webColors.json'
import { ref } from 'vue'

export default {
  title: 'Components/Search',
  component: EpSearch,
  argTypes: {
    searchResults: { table: { disable: true } },
  },
}

export const Autocomplete = args => ({
  components: { EpSearch },
  setup() {
    const searchResults = ref([])
    const bg = ref('var(--background-1)')

    const setBackground = color => {
      bg.value = color
    }

    const searchWebColors = query => {
      const results = webColors.filter(color =>
        color.name.toLowerCase().includes(query.toLowerCase())
      )
      searchResults.value = results
    }
    return {
      args,
      bg,
      searchResults,
      searchWebColors,
      setBackground,
    }
  },
  template: `
    <div :style="{ height: '100%', background: bg, padding: '3rem'}">
      <ep-search
        placeholder="Find your background color…"
        :search-results="searchResults"
        results-label="name"
        results-value="hex"
        @search="searchWebColors"
        @selection="setBackground"
        @clear="bg = 'var(--background-1)'"
      />
    </div>
  `,
})
