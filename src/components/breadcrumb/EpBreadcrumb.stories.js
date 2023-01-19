import { padded } from '@/helpers/decorators'
import EpBreadcrumb from './EpBreadcrumb'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'

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
  components: {
    EpBreadcrumb,
    EpContainer,
    EpHeader,
    EpFooter
  },
  setup() {
    return { args }
  },
  // template: '<ep-breadcrumb v-bind="args" />'
  template: `
    <ep-container
      useHeader
      useFooter
      height="100%"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-breadcrumb v-bind="args" />
        </template>
        <template #right>
        </template>
      </ep-header>
      </template>
      <template #footer>
        <ep-footer>
      </template>
    </ep-container>
  `
})

export const Breadcrumb = Template.bind({})