import EpMap from './EpMap'
import { padded } from '@/helpers/decorators'

const mapStyles = {
  // Default: 'mapbox://styles/mapbox/streets-v11',
  // Dark: 'mapbox://styles/ericpitcock/cke3hfy27072i1bmzjovpgvph',
  // Borders: 'mapbox://styles/ericpitcock/ckba479fv065v1in6pmfm6hz2',
  'Mapbox Streets': 'mapbox://styles/mapbox/streets-v11',
  'Mapbox Outdoors': 'mapbox://styles/mapbox/outdoors-v11',
  'Mapbox Light': 'mapbox://styles/mapbox/light-v10',
  'Mapbox Dark': 'mapbox://styles/mapbox/dark-v10',
  'Mapbox Satellite': 'mapbox://styles/mapbox/satellite-v9',
  'Mapbox Satellite Streets': 'mapbox://styles/mapbox/satellite-streets-v11',
  'Mapbox Navigation Day': 'mapbox://styles/mapbox/navigation-day-v1',
  'Mapbox Navigation Night': 'mapbox://styles/mapbox/navigation-night-v1'
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
      },
      defaultValue: [-122.3321, 47.6062]
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
    //   },
    //   defaultValue: null
    // },
    mapZoom: {
      name: 'Map Zoom',
      control: {
        type: 'number'
      },
      defaultValue: 12
    },
    mapStyle: {
      name: 'Map Style',
      control: {
        type: 'radio',
        options: mapStyles
      },
      defaultValue: 'mapbox://styles/mapbox/streets-v11'
    },
    mapSource: {
      table: { disable: true }
      // name: 'Map Source',
      // control: {
      //   type: 'object'
      // },
      // defaultValue: null
    },
    mapLayer: {
      table: { disable: true }
      // name: 'Map Layer',
      // control: {
      //   type: 'object'
      // },
      // defaultValue: null
    },
    scrollZoom: {
      name: 'Scroll Zoom',
      control: {
        type: 'boolean'
      },
      defaultValue: true
    },
    navigationControl: {
      name: 'Navigation Control',
      control: {
        type: 'boolean'
      },
      defaultValue: false
    },
    fitToBounds: {
      table: { disable: true }
      // name: 'Fit Bounds',
      // control: {
      //   type: 'boolean'
      // },
      // defaultValue: false
    },
  }
}

const Template = (args) => ({
  components: { EpMap },
  setup() {
    return { args }
  },
  template: '<ep-map v-bind="args" />'
})

export const Map = Template.bind({})
