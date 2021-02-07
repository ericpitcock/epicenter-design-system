import EpMap from './EpMap'

const mapStyles = {
  Basic: 'mapbox://styles/mapbox/streets-v11',
  Ep: 'mapbox://styles/ericpitcock/ckba479fv065v1in6pmfm6hz2'
}

export default {
  title: 'Components/Map',
  component: EpMap,
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
        type: 'select',
        options: mapStyles
      },
      defaultValue: 'mapbox://styles/mapbox/streets-v11'
    }
  }
}

const Template = (args, { argTypes }) => ({
  components: { EpMap },
  props: Object.keys(argTypes),
  template: `
  <EpMap
    :mapCenter="mapCenter"
    :mapZoom="mapZoom"
    :mapStyle="mapStyle"
  />
  `
})

export const Map = Template.bind({})
