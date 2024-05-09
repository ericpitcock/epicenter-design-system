import EpMap from '@/components/map/EpMap.vue'
import { watch } from 'vue'

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
  const themeMap = {
    'Light Theme': 'light',
    'Dark Theme': 'dark'
  }
  if (themeMap[theme] === 'light') {
    return mapStyles['Mapbox Streets']
  } else {
    return mapStyles['Dark (Ep)']
  }
}

export default {
  title: 'Components/Map',
  component: EpMap,
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
    EpMap
  },
  setup() {
    const currentMapStyle = defaultMapStyle(theme)
    return { args, currentMapStyle }
  },
  template: '<ep-map v-bind="args" />'
})

Map.args = {
  mapCenter: [-122.3321, 47.6062],
  mapZoom: 12,
  mapStyle: 'mapbox://styles/ericpitcock/cke3hfy27072i1bmzjovpgvph',
  // mapSource: null,
  // mapLayer: null,
  scrollZoom: true,
  navigationControl: false,
  fitToBounds: false
}

Map.decorators = [
  (story, context) => {
    watch(
      () => context.globals.theme,
      () => {
        console.log('theme changed', context.globals.theme)
        // update the mapStyle prop based on the theme
        // const currentMapStyle = defaultMapStyle(context.globals.theme)
        const currentMapStyle = defaultMapStyle(context.globals.theme)
        context.args.mapStyle = currentMapStyle
        console.log('context', context)
        console.log('currentMapStyle', currentMapStyle)
      },
      { immediate: true }
    )

    return {
      // setup() {
      //   return { currentMapStyle }
      // },
      template: '<story/>',
    }
  }
]
