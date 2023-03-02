// storybook story for EpSearch component

import EpSearch from '@/components/search/EpSearch.vue'
import { padded } from '../../helpers/decorators'

export default {
  title: 'Components/Search',
  component: EpSearch,
  decorators: [padded]
}

export const Search = args => ({
  components: { EpSearch },
  setup() {
    return { args }
  },
  template: '<ep-search v-bind="args" />'
})

Search.args = {
  placeholder: 'Search'
}