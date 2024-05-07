import { centeredSurface } from '../../helpers/decorators.js'
import { iconNamesArray, iconNamesObject, iconNamesMapping } from '@/components/icon/load-icons.js'
import EpBanner from '@/components/banner/EpBanner.vue'

export default {
  title: 'Components/Banner',
  component: EpBanner,
  decorators: [centeredSurface],
  argTypes: {
    bannerStyle: {
      name: 'Style',
      options: [
        'info',
        'success',
        'warning',
        'error'
      ],
      control: {
        type: 'radio',
        labels: {
          info: 'Info',
          success: 'Success',
          warning: 'Warning',
          error: 'Error'
        }
      }
    },
    dissmissable: {
      name: 'Dissmissable',
      control: {
        type: 'boolean'
      }
    },
    iconProps: {
      name: 'Icon',
      options: iconNamesArray,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
      }
    },
  }
}

export const Banner = args => ({
  components: {
    EpBanner
  },
  setup() {
    return {
      args
    }
  },
  template: `<ep-banner v-bind="args">
    <template #message>
      Version 2.0 will end support for JavaDabbles and Interquibbles
    </template>
    <template #subtext>
      Our boss made us do it
    </template>
  </ep-banner>`
})

Banner.args = {
  bannerStyle: 'warning',
  dissmissable: false,
  iconProps: { name: 'f-alert-triangle' },
}