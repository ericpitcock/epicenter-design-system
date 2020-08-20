import svgIcons from './EpIcon/load-icons'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs } from '@storybook/addon-knobs'

import Canvas from './Canvas'

const container = () => {
  return {
    template: '<div style="height: 100%; padding: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/Canvas',
  component: Canvas,
  decorators: [withKnobs, container]
}

export const Basic = () => ({
  components: { Canvas },
  template: '<Canvas />',
  props: {
  },
  methods: {}
})
