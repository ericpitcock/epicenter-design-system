import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import EpMap from '@/components/map/EpMap'
import { padded } from '../../helpers/decorators'

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
  'Mapbox Navigation Night': 'mapbox://styles/mapbox/navigation-night-v1'
}

const defaultMapStyle = (theme) => {
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
    mapCenter: {
      name: 'Map Center',
      options: ['Seattle', 'San Francisco', 'New York', 'London', 'Paris'],
      mapping: {
        'Seattle': [-122.3321, 47.6062],
        'San Francisco': [-122.4194, 37.7749],
        'New York': [-74.0060, 40.7128],
        'London': [-0.1278, 51.5074],
        'Paris': [2.3522, 48.8566]
      },
      control: {
        type: 'select',
        labels: {
          'Seattle': 'Seattle',
          'San Francisco': 'San Francisco',
          'New York': 'New York',
          'London': 'London',
          'Paris': 'Paris'
        }
      }
    },
    mapZoom: {
      name: 'Map Zoom',
      control: {
        type: 'number'
      }
    },
    mapStyle: {
      table: { disable: true }
      // name: 'Map Style',
      // options: Object.keys(mapStyles),
      // mapping: mapStyles,
      // control: {
      //   type: 'radio',
      // }
    },
    mapSource: { table: { disable: true } },
    mapLayer: { table: { disable: true } },
    scrollZoom: {
      name: 'Scroll Zoom',
      control: {
        type: 'boolean'
      }
    },
    navigationControl: {
      name: 'Navigation Control',
      control: {
        type: 'boolean'
      }
    },
    fitToBounds: { table: { disable: true } }
  }
}

export const Map = (args, { globals: { theme } }) => ({
  components: {
    EpActionBar,
    EpContainer,
    EpFooter,
    EpHeader,
    EpMap
  },
  setup() {
    const currentMapStyle = defaultMapStyle(theme)
    return { args, commonActionBarArgs, currentMapStyle }
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
          <h1>Map</h1>
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div style="height: 100%; width: 100%;">
        <ep-map v-bind="args" :mapStyle="currentMapStyle" />
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

Map.args = {
  mapCenter: [-122.3321, 47.6062],
  mapZoom: 12,
  // mapStyle: defaultMapStyle,
  // mapSource: null,
  // mapLayer: null,
  scrollZoom: true,
  navigationControl: false,
  fitToBounds: false
}
