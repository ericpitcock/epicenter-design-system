import vueRouter from 'storybook-vue3-router'
import { padded } from '@/helpers/decorators'
// import AlbumsOfTheYear from '@/components/breadcrumb/AlbumsOfTheYear'
import EpActionBar from '@/components/action-bar/EpActionBar'
import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
import EpBreadcrumb from './EpBreadcrumb'
import EpContainer from '@/components/container/EpContainer'
import EpHeader from '@/components/header/EpHeader'
import EpFooter from '@/components/footer/EpFooter'

import CpBreadcrumb from './copilot.vue'
import Years from './views/Years.vue'
import Year from './views/Year.vue'
import Album from './views/Album.vue'

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
    // AlbumsOfTheYear,
    CpBreadcrumb,
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
          <cp-breadcrumb
            :initialRoute="{
              to: { name: 'Years' },
              text: 'Albums of the year'
            }"
          />
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <router-view />
      </template>
      <template #footer>
        <ep-footer>
        Route: {{ $route.fullPath.replace('%20', ' ') }}
        </ep-footer>
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
    path: '/',
    name: 'Years',
    component: Years,
    meta: {
      breadcrumb: [
        {
          to: { name: 'Years' }, 
          text: 'Albums of the Yearzzzz'
        }
      ]
    }
  },
  {
    path: '/:year',
    name: 'Year',
    component: Year,
    meta: {
      breadcrumb: (route) => ({
        to: { name: 'Years', params: { year: route.params.year } },
        text: route.params.year
      })
    },
    // use props to pass route params to component
    props: (route) => ({ year: route.params.year })
  },
  {
    path: '/:year/:album',
    name: 'Album',
    component: Album,
    meta: {
      breadcrumb: (route) => ({
        to: { name: 'Year', params: { album: route.params.album } },
        text: route.params.album
      })
    },
    // use props to pass route params to component
    // props: (route) => ({ album: route.params.album })
  }
]

Breadcrumb.decorators = [vueRouter(routes)]