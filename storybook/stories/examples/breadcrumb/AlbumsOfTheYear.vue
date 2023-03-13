<template>
  <div class="aoty">
    <ep-container
      max-width="120rem"
      calculate-height
      :calculate-height-offset="30"
      container-padding="0 3rem"
      content-padding="3rem 0"
      overflow="auto"
    >
      <template #header>
        <ep-header>
          <template #left>
            <ep-breadcrumb-static
              :crumbs="breadcrumbs"
              @crumb-click="crumbClick"
            />
          </template>
        </ep-header>
      </template>
      <template #default>
        <Years
          v-if="currentView === 'Years'"
          @year-click="updateView"
        />
        <Year
          v-if="currentView === 'Year'"
          :year="currentYear"
          @album-click="updateView"
        />
        <Album
          v-if="currentView === 'Album'"
          :album="currentAlbum"
        />
      </template>
      <template #footer>
        <ep-footer />
      </template>
    </ep-container>
  </div>
</template>

<script>
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
    data() {
      return {
        albumsOfTheYear: albumsOfTheYear.default,
        currentView: 'Years',
        currentYear: '',
        currentAlbum: ''
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
            text: this.currentAlbum.title,
            // command: () => crumbClick('Album')
          }
        ]

        if (this.currentView === 'Years') return [routes[0]]
        if (this.currentView === 'Year') return [routes[0], routes[1]]
        if (this.currentView === 'Album') return [routes[0], routes[1], routes[2]]
        return false
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
    },
    methods: {
      crumbClick(item) {
        console.log(item.text)
        if (item.text === 'Albums of the Year') {
          this.updateView('Years', null, null)
        } else if (item.text === this.currentYear) {
          this.updateView('Year', this.currentYear, null)
        } else if (item.text === this.currentAlbum.title) {
          this.updateView('Album', this.currentYear, this.currentAlbum)
        }
      },
      updateView(view, year, album) {
        console.log(view, year, album)
        this.currentView = view ? view : this.currentView
        this.currentYear = year ? year : this.currentYear
        this.currentAlbum = album ? album : this.currentAlbum
      }
    },
  }
</script>