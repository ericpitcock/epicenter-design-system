import { computed, ref } from 'vue'

import EpContainer from '@/components/container/EpContainer.vue'
import EpIcon from '@/components/icon/EpIcon.vue'
import EpSearchTypeahead from '@/components/search/EpSearchTypeahead.vue'

import { paddedBg } from '../../helpers/decorators.js'
import { iconObjects,icons } from '../../helpers/iconHelper.js'

export default {
  title: 'Components/Icon Library',
  component: EpIcon,
  decorators: [paddedBg],
  argTypes: {
    color: {
      name: 'Color',
      control: {
        type: 'color'
      }
    },
    weight: {
      name: 'Weight',
      options: ['Light', 'Regular', 'Medium', 'Bold'],
      mapping: {
        'Light': 0.5,
        'Regular': 1,
        'Medium': 1.5,
        'Bold': 2,
      },
      control: {
        type: 'radio'
      }
    },
    size: {
      name: 'Size',
      control: {
        type: 'range',
        min: 20,
        max: 60,
        step: 2
      }
    },
    styles: {
      table: { disable: true }
    },
    type: {
      table: { disable: true }
    }
  }
}

export const IconLibrary = args => ({
  components: { EpContainer, EpIcon, EpSearchTypeahead },
  setup() {
    const styles = computed(() => {
      return {
        '--ep-icon-width': `${args.size}px`,
        '--ep-icon-height': `${args.size}px`,
        '--ep-icon-color': args.color,
        '--ep-icon-stroke-width': args.weight,
      }
    })

    const containerStyles = {
      '--ep-container-content-padding': '2rem',
      '--ep-container-border-radius': 'var(--border-radius)',
      '--ep-container-border-width': '0.1rem',
      '--ep-container-bg-color': 'var(--interface-surface)'
    }

    const searchResults = ref([])

    const searchIcons = query => {
      const results = iconObjects.filter(icon =>
        icon.name.toLowerCase().includes(query.toLowerCase())
      )
      searchResults.value = results
    }

    const filteredIcons = ref(icons)

    const filterIcons = query => {
      filteredIcons.value = icons.filter(icon =>
        icon.toLowerCase().includes(query.name.toLowerCase())
      )
    }

    const clearResults = () => {
      searchResults.value = []
      filteredIcons.value = icons
    }

    return {
      args,
      clearResults,
      icons,
      filterIcons,
      filteredIcons,
      searchIcons,
      searchResults,
      styles,
      containerStyles
    }
  },
  template: `
  <!--<ep-search-typeahead
    :input-props="{ width: '60rem', placeholder: 'Search icons…', size: 'xlarge' }"
    :returned-search-results="searchResults"
    results-key="name"
    @search="searchIcons"
    @selection="filterIcons"
    @clear="clearResults"
    style="margin-bottom: 2rem;"
  />-->
  <div style="display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-bottom: 20rem;"
  >
    <ep-container
      v-for="(icon, index) in filteredIcons"
      :key="index"
      :style="containerStyles"
      style="flex: 0 0 170px;"
    >
      <ep-icon
        :name="icon"
        :color="args.color"
        :weight="args.weight"
        :size="args.size"
        :style="styles"
      />
      <template #footer>
      <div
        class="font-size--small text--subtle"
        style="padding: 1rem 2rem; border-top: 1px solid var(--border-color);"
      >{{ icon }}</div>
      </template>
    </ep-container>
  </div>
  `
})

IconLibrary.args = {
  color: 'var(--text-color--loud)',
  weight: 'Light',
  size: 32
}

IconLibrary.argTypes = {
  name: {
    table: { disable: true }
  }
}
