import EpContainer from '@/components/container/EpContainer'
import EpMap from './EpMap'

// const container = () => {
//   return {
//     template: '<div style="height: 100vh; padding: 30px;"><story/></div>'
//   }
// }

const mapStyles = {
  Default: 'mapbox://styles/mapbox/streets-v11',
  Dark: 'mapbox://styles/ericpitcock/cke3hfy27072i1bmzjovpgvph',
  Borders: 'mapbox://styles/ericpitcock/ckba479fv065v1in6pmfm6hz2'
}

export default {
  title: 'Components/Map',
  component: EpMap,
  // decorators: [container],
  argTypes: {
    mapCenter: {
      name: 'Map Center',
      control: {
        type: 'array'
      },
      defaultValue: [-122.3321, 47.6062]
    },
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
    }
  }
}

const Template = (args) => ({
  components: { EpContainer, EpMap },
  setup() {
    return { args }
  },
  template: `
  <ep-container>
    <ep-map
      :mapCenter="mapCenter"
      :mapZoom="mapZoom"
      :mapStyle="mapStyle"
    />
  </ep-container>
  `
})

export const Map = Template.bind({})
