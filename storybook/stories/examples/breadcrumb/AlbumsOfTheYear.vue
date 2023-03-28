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
        const routes = [
          {
            text: 'Albums of the Year',
            className: 'app-title',
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

<style lang="scss">
  .aoty {
    .app-title {
      background: var(--text-gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>