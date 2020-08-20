import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs } from '@storybook/addon-knobs'

import EpControlBar from './EpControlBar'

const container = () => {
  return {
    template: '<div style="height: 61px; margin: 30px;"><story/></div>'
  }
}

export default {
  title: 'Components/EpControlBar',
  component: EpControlBar,
  decorators: [withKnobs, container]
}

export const ControlBar = () => ({
  components: { EpControlBar },
  template: '<EpControlBar />',
  props: {

  },
  methods: {}
})
