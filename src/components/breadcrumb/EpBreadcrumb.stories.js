import { padded } from '@/helpers/decorators'
import AlbumsOfTheYear from '@/components/breadcrumb/AlbumsOfTheYear'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
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
      }
    }
  }
}

// const handleCrumbClick = (item, index) => {
//   console.log('crumb clicked', item, index)
// }

const Template = args => ({
  components: {
    AlbumsOfTheYear,
    EpActionBar,
    EpBreadcrumb,
    EpContainer,
    EpHeader,
    EpFooter
  },
  setup() {
    return {
      args,
      commonActionBarArgs
    }
  },
  data() {
    return {
      crumbs: [
        {
          text: 'Albums of the Year'
        }
      ],
      year: '2020'
    }
  },
  methods: {
    handleCrumbClick(item, index) {
      this.filter = item.text
    }
  },
  template: `
    <ep-container
      useHeader
      useFooter
      max-width="120rem"
      height="100%"
      padding="3rem"
      overflow="hidden"
    >
      <template #header>
      <ep-header>
        <template #left>
          <ep-breadcrumb :items="crumbs" @crumb-click="handleCrumbClick" />
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <albums-of-the-year :year="'2020'" />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  `
})

export const Breadcrumb = Template.bind({})

// Breadcrumb.args = {
//   items: [
//     {
//       text: 'Albums of the Year'
//     }
//   ]
// }
