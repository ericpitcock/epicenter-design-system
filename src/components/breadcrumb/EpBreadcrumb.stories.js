import { padded } from '@/helpers/decorators'
import EpBreadcrumb from './EpBreadcrumb'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'

export default {
  title: 'Components/Breadcrumb',
  component: EpBreadcrumb,
  decorators: [padded],
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

const Template = args => ({
  components: { EpBreadcrumb, EpContainer, EpHeader },
  setup() {
    return { args }
  },
  // template: '<ep-breadcrumb v-bind="args" />'
  template: `
    <ep-container :useHeader="true" height="100%">
      <template #header>
      <ep-header>
        <template #left>
          <ep-breadcrumb v-bind="args" />
        </template>
        <template #right>
        </template>
      </ep-header>
      </template>
    </ep-container>
  `
})

export const Breadcrumb = Template.bind({})