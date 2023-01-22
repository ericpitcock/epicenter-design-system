import { padded } from '@/helpers/decorators'
import EpActionBar from '@/components/action-bar/EpActionBar'
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
          text: 'Music Library',
          href: '#'
        },
        {
          text: 'Hip Hop',
          href: '#'
        },
        {
          text: 'Jay-Z',
          href: '#'
        }
      ]
    }
  }
}

const actionBarProps = {
  items: [
    {
      type: 'button',
      kind: 'ghost',
      label: '',
      iconLeft: { name: 'help' }
    },
    {
      type: 'button',
      kind: 'ghost',
      label: '',
      iconLeft: { name: 'notifications' }
    },
    {
      type: 'button',
      kind: 'ghost',
      label: '',
      iconLeft: { name: 'user' }
    }
  ]
}

const Template = args => ({
  components: {
    EpActionBar,
    EpBreadcrumb,
    EpContainer,
    EpHeader,
    EpFooter
  },
  setup() {
    return {
      actionBarProps,
      args
    }
  },
  // template: '<ep-breadcrumb v-bind="args" />'
  template: `
    <ep-container
      useHeader
      useFooter
      height="100%"
      padding="3rem"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-breadcrumb v-bind="args" />
        </template>
        <template #right>
          <ep-action-bar v-bind="actionBarProps" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <div class="copy-block">
          <h1>Breadcrumb</h1>
          <p>Breadcrumbs are used in user interface design as a way to provide users with a clear and intuitive navigation path, indicating their current location within a website or application. They can also help users understand the relationship between different pages, and quickly navigate back to higher-level sections of the site. This allows for a better user experience and increase the usability of the website.</p>
        </div>
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Breadcrumb = Template.bind({})