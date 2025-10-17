import { computed } from 'vue'

import { paddedBgOverflow } from '../../../helpers/decorators.js'
import { useStorybookStore } from '../../../store'
import EpColor from './EpColor.vue'

export default {
  title: 'Style/Color',
  component: EpColor,
  decorators: [paddedBgOverflow],
  argTypes: {
    theme: {
      table: { disable: true }
    }
  },
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
}

export const Color = (args) => ({
  components: { EpColor },
  setup() {

    const store = useStorybookStore()
    const currentTheme = computed(() => store.theme)

    return { args, currentTheme }
  },
  template: '<ep-color :theme="currentTheme" />'
})
