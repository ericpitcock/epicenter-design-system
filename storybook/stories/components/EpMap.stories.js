import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpContainer from '@/components/container/EpContainer'
import EpFooter from '@/components/footer/EpFooter'
import EpHeader from '@/components/header/EpHeader'
import EpMap from '@/components/map/EpMap'
import { padded } from '@/helpers/decorators'
import store from '@/store'

const mapStyles = (store) => {
  if (store.state.theme === 'light') {
    return {
      'Mapbox Streets': 'mapbox://styles/mapbox/streets-v11',
      'Mapbox Light': 'mapbox://styles/mapbox/light-v10'
    }
  }
  if (store.state.theme === 'dark') {
    return {
      'Mapbox Dark': 'mapbox://styles/mapbox/dark-v10'
    }
  }
  // Default: 'mapbox://styles/mapbox/streets-v11',
  // Dark: 'mapbox://styles/ericpitcock/cke3hfy27072i1bmzjovpgvph',
  // Borders: 'mapbox://styles/ericpitcock/ckba479fv065v1in6pmfm6hz2',
  // 'Mapbox Streets': 'mapbox://styles/mapbox/streets-v11',
  // 'Mapbox Outdoors': 'mapbox://styles/mapbox/outdoors-v11',
  // 'Mapbox Light': 'mapbox://styles/mapbox/light-v10',
  // 'Mapbox Dark': 'mapbox://styles/mapbox/dark-v10',
  // 'Mapbox Satellite': 'mapbox://styles/mapbox/satellite-v9',
  // 'Mapbox Satellite Streets': 'mapbox://styles/mapbox/satellite-streets-v11',
  // 'Mapbox Navigation Day': 'mapbox://styles/mapbox/navigation-day-v1',
  // 'Mapbox Navigation Night': 'mapbox://styles/mapbox/navigation-night-v1'
}

export default {
  title: 'Components/Map',
  component: EpMap,
  decorators: [padded],
  argTypes: {
    mapCenter: {
      name: 'Map Center',
      control: {
        type: 'select',
        options: {
          'Seattle': [-122.3321, 47.6062],
          'San Francisco': [-122.4194, 37.7749],
          'New York': [-74.0060, 40.7128],
          'London': [-0.1278, 51.5074],
          'Paris': [2.3522, 48.8566]
        }
      }
    },
    // flyTo: {
    //   name: 'Fly To',
    //   control: {
    //     type: 'select',
    //     options: {
    //       'Seattle': [-122.3321, 47.6062],
    //       'San Francisco': [-122.4194, 37.7749],
    //       'New York': [-74.0060, 40.7128],
    //       'London': [-0.1278, 51.5074],
    //       'Paris': [2.3522, 48.8566]
    //     }
    //   }
    // },
    mapZoom: {
      name: 'Map Zoom',
      control: {
        type: 'number'
      }
    },
    mapStyle: {
      table: { disable: true }
      // name: 'Map Style',
      // control: {
      //   type: 'radio',
      //   options: mapStyles(store)
      // }
    },
    mapSource: {
      table: { disable: true }
      // name: 'Map Source',
      // control: {
      //   type: 'object'
      // }
    },
    mapLayer: {
      table: { disable: true }
      // name: 'Map Layer',
      // control: {
      //   type: 'object'
      // }
    },
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
    fitToBounds: {
      table: { disable: true }
      // name: 'Fit Bounds',
      // control: {
      //   type: 'boolean'
      // }
    },
  }
}

export const Map = args => ({
  components: {
    EpActionBar,
    EpContainer,
    EpFooter,
    EpHeader,
    EpMap
  },
  setup() {
    return { args, commonActionBarArgs }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
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
        <ep-map v-bind="args" />
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
  mapStyle: 'mapbox://styles/mapbox/streets-v11',
  mapSource: null,
  mapLayer: null,
  scrollZoom: true,
  navigationControl: false,
  fitToBounds: false
}
