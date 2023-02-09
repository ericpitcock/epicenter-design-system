<template>
  <div class="aoty">
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
          <ep-badge label="Work in progress" borderColor="var(--bg-color--alert-high)" />
          <ep-breadcrumb-static :crumbs="breadcrumbs" @crumb-click="crumbClick" />
        </template>
        <template #right>
          <ep-action-bar v-bind="commonActionBarArgs" />
        </template>
      </ep-header>
      </template>
      <template #default>
        <Years v-if="currentView === 'Years'" @year-click="updateView" />
        <Year v-else-if="currentView === 'Year'" :year="currentYear" @album-click="updateView" />
        <Album v-else-if="currentView === 'Album'" :album="currentAlbum" />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  </div>
</template>

<script>
  import EpActionBar from '@/components/action-bar/EpActionBar'
  import commonActionBarArgs from '@/components/action-bar/commonActionBarArgs'
  import EpBadge from '@/components/badge/EpBadge'
  import EpBreadcrumbStatic from '@/components/breadcrumb/EpBreadcrumbStatic'
  import EpContainer from '@/components/container/EpContainer'
  import EpHeader from '@/components/header/EpHeader'
  import EpFooter from '@/components/footer/EpFooter'
  import Years from './views/Years'
  import Year from './views/Year'
  import Album from './views/Album'
  
  import * as albumsOfTheYear from './aoty.json'

  export default {
    name: 'AlbumsOfTheYear',
    components: {
      EpActionBar,
      EpBadge,
      EpBreadcrumbStatic,
      EpContainer,
      EpHeader,
      EpFooter,
      Years,
      Year,
      Album
    },
    // props: {
    //   year: {
    //     type: String,
    //     default: ''
    //   },
    //   album: {
    //     type: String,
    //     default: ''
    //   },
    //   view: {
    //     type: String,
    //     default: 'Years'
    //   }
    // },
    data () {
      return {
        albumsOfTheYear: albumsOfTheYear.default,
        commonActionBarArgs,
        currentView: 'Years',
        currentYear: '',
        currentAlbum: ''
      }
    },
    methods: {
      crumbClick(crumb) {
        console.log(crumb)
        // if (crumb === 'Years') {
        //   this.currentView = 'Years'
        //   this.currentYear = ''
        //   this.currentAlbum = ''
        // } else if (crumb === 'Year') {
        //   this.currentView = 'Year'
        //   this.currentAlbum = ''
        // } else if (crumb === 'Album') {
        //   this.currentView = 'Album'
        // }
      },
      updateView(view, year, album) {
        this.currentView = view
        this.currentYear = year
        this.currentAlbum = album
      }
    },
    computed: {
      breadcrumbs() {
        // breadcrumb trail made up of "Albums of the Year" / this.currentYear / this.currentAlbum
        // this will be an array of objects with a label and an action
        // if this.currentYear is empty, return only "Albums of the Year"
        // if this.currentAlbum is empty, return "Albums of the Year" and this.currentYear
        // if both are filled, return "Albums of the Year", this.currentYear, and this.currentAlbum
        // if neither are filled, return "Albums of the Year"
        const routes = [
          {
            text: 'Albums of the Year',
            // command: () => crumbClick('Years')
          },
          {
            text: this.currentYear,
            // command: () => crumbClick('Year')
          },
          {
            text: this.currentAlbum,
            // command: () => crumbClick('Album')
          }
        ]

        if (!this.currentYear) return [routes[0]]
        if (!this.currentAlbum) return [routes[0], routes[1]]
        return [routes[0], routes[1], routes[2]]
      },
      // filterAlbumsByYear() {
      //   return this.albumsOfTheYear.filter(album => {
      //     return album.year === this.currentYear
      //   })
      // },
      // getAlbum() {
      //   return this.albumsOfTheYear.filter(album => {
      //     return album.title === this.currentAlbum
      //   })
      // },
      // filterAlbumsOfTheYear() {
      //   if (!this.currentYear) return this.albumsOfTheYear
      //   // return the albums that include the filter string in any value
      //   return this.albumsOfTheYear.filter(album => {
      //     return Object.values(album).some(value => {
      //       return value.toString().toLowerCase().includes(this.currentYear.toLowerCase())
      //     })
      //   })
      // },
      // getYears() {
        // get unique years in the albumsOfTheYear array
        // return [...new Set(this.albumsOfTheYear.map(album => album.year))]
      // }
    }
  }
</script>