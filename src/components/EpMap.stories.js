import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, array, number, select } from '@storybook/addon-knobs'

import EpMap from './EpMap'

export default {
  title: 'Components/EpMap',
  component: EpMap,
  decorators: [withKnobs]
}

const mapStyles = {
    Basic: 'mapbox://styles/mapbox/streets-v11',
    Ep: 'mapbox://styles/ericpitcock/ckba479fv065v1in6pmfm6hz2'
  }

export const Mapbox = () => ({
  components: { EpMap },
  template: '<EpMap :mapCenter="mapCenter" :mapZoom="mapZoom" :mapStyle="mapStyle" />',
  props: {
    mapCenter: { default: array('Center', [-122.3321, 47.6062]) },
    mapZoom: { default: number('Zoom', 12) },
    mapStyle: { default: select('Style', mapStyles, 'mapbox://styles/mapbox/streets-v11') }
  },
  methods: { }
})
