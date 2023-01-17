// storybook breadcrumb component story
import { centered } from '@/helpers/decorators'
import EpBreadcrumb from './EpBreadcrumb'

export default {
  title: 'Breadcrumb',
  component: EpBreadcrumb,
  decorators: [centered],
  argTypes: {
    items: {
      name: 'Items',
      control: {
        type: 'array'
      },
      defaultValue: [
        {
          text: 'Home',
          href: '#'
        },
        {
          text: 'Library',
          href: '#'
        },
        {
          text: 'Data',
          href: '#'
        }
      ]
    }
  }
}

const Template = (args) => ({
  components: { EpBreadcrumb },
  setup() {
    return { args }
  },
  template: '<ep-breadcrumb v-bind="args" />'
})

export const Breadcrumb = Template.bind({})