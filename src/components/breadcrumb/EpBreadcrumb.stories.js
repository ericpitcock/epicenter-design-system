import vueRouter from 'storybook-vue3-router'
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
          text: 'Albums of the Year',
          view: 'years'
        },
        // {
        //   text: null,
        //   view: 'year'
        // },
        // {
        //   text: null,
        //   view: 'album'
        // }
      ],
      aotyProps: {
        year: null,
        album: null,
        view: 'years'
      }
    }
  },
  methods: {
    handleCrumbClick(item, index) {
      console.log('crumb clicked', item, index)
      
      // if index is 0, you clicked on "Albums of the Year", remove all crumbs after index 0 and set view to "years
      if (index === 0) {
        this.crumbs = [this.crumbs[0]]
        this.aotyProps = {
          year: null,
          album: null,
          view: 'years'
        }
      }
      // if index is 1, you clicked on a year, remove all crumbs after index 1 and set view to "year"
      if (index === 1) {
        this.crumbs = this.crumbs.slice(0, 2)
        this.aotyProps = {
          year: item.text,
          album: null,
          view: 'year'
        }
      }

    },
    addYear(year) {
      this.year = year
      this.crumbs.push({
        text: year,
        view: 'year'
      })
    },
    addAlbum(album) {
      this.album = album.title
      this.crumbs.push({
        text: album.title,
        view: 'album'
      })
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
        <albums-of-the-year
          @year-click="addYear"
          @album-click="addAlbum"
          v-bind="aotyProps"
        />
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

// dynamic routes for breadcrumbs
const routes = [
  {
    path: '/albums-of-the-year',
    name: 'Albums of the Year',
    component: AlbumsOfTheYear
  },
  {
    path: '/albums-of-the-year/:year',
    name: 'Year',
    component: AlbumsOfTheYear
  },
  {
    path: '/albums-of-the-year/:year/:album',
    name: 'Album',
    component: AlbumsOfTheYear
  }
]

Breadcrumb.decorators = [vueRouter(routes)]