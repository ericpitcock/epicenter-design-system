import { centered } from '@/helpers/decorators'
import EpBanner from './EpBanner.vue'

export default {
  title: 'Components/Banner',
  component: EpBanner,
  decorators: [centered],
  argTypes: {
    bannerStyle: {
      name: 'Banner Style',
      options: ['info', 'success', 'warning', 'error'],
      control: {
        type: 'select',
      },
      table: {
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
      control: {
        type: 'object'
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
  iconProps: { name: 'info' },
  message: 'Version 2.0 will end support for JavaDabbles and Interquibbles',
  subtext: 'Our boss made us do it'
}