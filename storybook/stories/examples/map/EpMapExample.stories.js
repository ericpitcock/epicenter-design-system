import AppTitle from '../components/AppTitle.vue'
import EpActionBar from '@/components/action-bar/EpActionBar.vue'
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
    AppTitle,
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

    const currentMapZoom = ref(12)

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
      currentMapPin.value = []
      currentMapPin.value.push(result)
    }

    const containerProps = {
      backgroundColor: 'var(--interface-overlay)',
      containerPadding: '1rem 0',
      borderRadius: 'var(--border-radius)',
      borderColor: 'var(--border-color--lighter)'
    }

    const actionBarArgs = {
      justifyContent: 'flex-start',
      showDropdownOnHover: true,
      items: [
        {
          type: 'dropdown',
          buttonProps: {
            variant: 'ghost',
            label: '',
            iconLeft: { name: 'f/coffee' },
            iconRight: null
          },
          containerProps,
          menuItems: [
            {
              section: true,
              label: 'Seattle Coffee Shops'
            },
            {
              label: 'Starbucks Reserve Roastery',
              value: [-122.3283, 47.6155]
            },
            {
              label: 'Cafe Allegro',
              value: [-122.3168, 47.6593]
            },
            {
              label: 'Victrola Coffee Roasters',
              value: [-122.3193, 47.6148]
            },
            {
              label: 'Caffe Vita',
              value: [-122.3164, 47.6144]
            },
            {
              label: 'Storyville Coffee Company',
              value: [-122.3407, 47.6084]
            }
          ]
        },
        {
          type: 'dropdown',
          buttonProps: {
            variant: 'ghost',
            label: '',
            iconLeft: { name: 'f/shopping-bag' },
            iconRight: null
          },
          containerProps,
          menuItems: [
            {
              section: true,
              label: 'Seattle Shopping'
            },
            {
              label: 'Nordstrom',
              value: [-122.3366, 47.6138]
            },
            {
              label: 'Pike Place Market',
              value: [-122.3401, 47.6098]
            },
            {
              label: 'University Village',
              value: [-122.2986, 47.6627]
            },
            {
              label: 'Pacific Place',
              value: [-122.3352, 47.6119]
            },
            {
              label: 'Westlake Center',
              value: [-122.3375, 47.6113]
            }
          ]
        }
      ]
    }

    const currentMapPin = ref([])

    const onClick = item => {
      currentMapCenter.value = item.value
      currentMapZoom.value = 18
      // clear currentMapPin and then add new pin
      currentMapPin.value = []
      currentMapPin.value.push(item.value)
    }

    // const centerChanged = center => {
    //   currentMapCenter.value = center
    // }

    return {
      args,
      actionBarArgs,
      // centerChanged,
      currentMapCenter,
      currentMapPin,
      currentMapStyle,
      currentMapZoom,
      updateMapCenter,
      searchLocation,
      searchResults,
      onClick
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
          <app-title title="Place Finder" />
          <ep-search
            :input-props="{
              placeholder: 'Find your place…',
              width: '40rem',
              size: 'large',
              backgroundColor: 'var(--interface-foreground)',
            }"
            :search-results="searchResults"
            results-label="place_name"
            results-value="center"
            @search="searchLocation"
            @selection="updateMapCenter"
          />
          <ep-action-bar
            v-bind="actionBarArgs"
            @click="onClick"
          />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div style="height: 100%; width: 100%;">
        <ep-map
          v-bind="args"
          :map-style="currentMapStyle"
          :map-center="currentMapCenter"
          :map-zoom="currentMapZoom"
          :pin-locations="currentMapPin"
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
