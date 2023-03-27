import EpActionBar from '@/components/action-bar/EpActionBar.vue'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer.vue'
import EpFooter from '@/components/footer/EpFooter.vue'
import EpHeader from '@/components/header/EpHeader.vue'
import EpInput from '@/components/input/EpInput.vue'
import EpMap from '@/components/map/EpMap.vue'
import EpSearch from '@/components/search/EpSearch.vue'
import { padded } from '../../../helpers/decorators'
import { ref } from 'vue'

const mapStyles = {
  'Dark (Ep)': 'mapbox://styles/ericpitcock/cke3hfy27072i1bmzjovpgvph',
  'Borders (Ep)': 'mapbox://styles/ericpitcock/ckba479fv065v1in6pmfm6hz2',
  'Mapbox Streets': 'mapbox://styles/mapbox/streets-v11',
  'Mapbox Outdoors': 'mapbox://styles/mapbox/outdoors-v11',
  'Mapbox Light': 'mapbox://styles/mapbox/light-v10',
  'Mapbox Dark': 'mapbox://styles/mapbox/dark-v10',
  'Mapbox Satellite': 'mapbox://styles/mapbox/satellite-v9',
  'Mapbox Satellite Streets': 'mapbox://styles/mapbox/satellite-streets-v11',
  'Mapbox Navigation Day': 'mapbox://styles/mapbox/navigation-day-v1',
  'Mapbox Navigation Night': 'mapbox://styles/mapbox/navigation-night-v1',
}

const defaultMapStyle = theme => {
  if (theme === 'light') {
    return mapStyles['Mapbox Streets']
  } else {
    return mapStyles['Dark (Ep)']
  }
}

export default {
  title: 'Components/Map',
  component: EpMap,
  decorators: [padded],
  argTypes: {
    mapCenter: { table: { disable: true } },
    mapZoom: { table: { disable: true } },
    mapStyle: { table: { disable: true } },
    mapSource: { table: { disable: true } },
    mapLayer: { table: { disable: true } },
    scrollZoom: { table: { disable: true } },
    navigationControl: { table: { disable: true } },
    fitToBounds: { table: { disable: true } },
  },
}

export const MapInContext = (args, { globals: { theme } }) => ({
  components: {
    EpActionBar,
    EpContainer,
    EpFooter,
    EpHeader,
    EpInput,
    EpMap,
    EpSearch,
  },
  setup() {
    const currentMapStyle = defaultMapStyle(theme)

    const currentMapCenter = ref([-122.3321, 47.6062])

    const searchResults = ref([])

    const searchLocation = async query => {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
        query
      )}.json?access_token=pk.eyJ1IjoiZXJpY3BpdGNvY2siLCJhIjoia29WT3AzOCJ9.YTnpZdWBqPD4cH6mlnZoYQ`

      const response = await fetch(url)
      const data = await response.json()

      searchResults.value = data.features
    }

    const updateMapCenter = result => {
      currentMapCenter.value = result
    }

    return {
      args,
      commonActionBarArgs,
      currentMapCenter,
      currentMapStyle,
      updateMapCenter,
      searchLocation,
      searchResults,
    }
  },
  template: `
    <ep-container
      max-width="120rem"
      height="100%"
      overflow="hidden"
    >
      <template #header>
      <ep-header padding="0 3rem">
        <template #left>
          <ep-search
            :input-props="{ placeholder: 'Search for a location…', size: 'large' }"
            :search-results="searchResults"
            results-label="place_name"
            results-value="center"
            @search="searchLocation"
            @selection="updateMapCenter"
          />
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div style="height: 100%; width: 100%;">
        <ep-map
          v-bind="args"
          :mapStyle="currentMapStyle"
          :mapCenter="currentMapCenter"
        />
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `,
})

MapInContext.args = {
  mapZoom: 12,
  scrollZoom: true,
  navigationControl: false,
  fitToBounds: false,
}
