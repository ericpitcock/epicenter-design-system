import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, select, radios } from '@storybook/addon-knobs'

import EpColor from './EpColor'

export default {
  title: 'Style/EpColor',
  component: EpColor,
  decorators: [withKnobs]
}

export const Palette = () => ({
  components: { EpColor },
  template: '<EpColor />',
  props: { },
  methods: { }
})
