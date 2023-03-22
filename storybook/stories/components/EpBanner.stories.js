import { centered } from '../../helpers/decorators'
import { iconNames, iconNamesMapping } from '@/components/icon/load-icons'
import EpBanner from '@/components/banner/EpBanner.vue'

export default {
  title: 'Components/Banner',
  component: EpBanner,
  decorators: [centered],
  argTypes: {
    bannerStyle: {
      name: 'Style',
      options: ['info', 'success', 'warning', 'error'],
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
      options: iconNames,
      mapping: iconNamesMapping,
      control: {
        type: 'select'
      }
    },
    message: {
      name: 'Message',
      control: {
        type: 'text'
      }
    },
    subtext: {
      name: 'Subtext',
      control: {
        type: 'text'
      }
    }
  }
}

const Template = args => ({
  components: {
    EpBanner
  },
  setup() {
    return {
      args
    }
  },
  template: '<ep-banner v-bind="args" />'
})

export const Banner = Template.bind({})

Banner.args = {
  bannerStyle: 'warning',
  dissmissable: false,
  iconProps: { name: 'f/alert-triangle' },
  message: 'Version 2.0 will end support for JavaDabbles and Interquibbles',
  subtext: 'Our boss made us do it'
}