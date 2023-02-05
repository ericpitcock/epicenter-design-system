<template>
  <div class="aoty">
    <template v-if="currentView == 'years'">
      <div class="years">
        <div
          v-for="year in getYears"
          class="year"
          @click="selectYear(year)"
        >
          {{ year }}
        </div>
      </div>
    </template>
    <template v-else-if="currentView == 'albums'">
      albums
      <div
        v-for="album in filterAlbumsByYear"
        class="album"
        @click="selectAlbum(album)"
      >
        
        <!-- {{ item }} -->
        {{ album.title }}
        {{ album.artist }}
        {{ album.year }}
      </div>
    </template>
    <template v-else-if="currentView == 'album'">
      single album
    </template>
  </div>
</template>

<script>
  import * as albumsOfTheYear from './aoty.json'

  export default {
    name: 'AlbumsOfTheYear',
    props: {
      filter: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        albumsOfTheYear: albumsOfTheYear.default,
        currentView: 'years',
        currentFilter: '2020'
      }
    },
    methods: {
      selectAlbum(album) {
        this.currentView = 'album'
        this.currentFilter = album
      },
      selectYear(year) {
        this.currentView = 'albums'
        this.currentFilter = year
        console.log(year)
      },
      // filterAlbumsByYear() {
      //   return this.albumsOfTheYear.filter(album => {
      //     return album.year === "2019"
      //   })
      // },
    },
    computed: {
      filterAlbumsByYear() {
        return this.albumsOfTheYear.filter(album => {
          return album.year === this.currentFilter
        })
      },
      // filterAlbumsOfTheYear() {
      //   if (!this.currentFilter) return this.albumsOfTheYear
      //   // return the albums that include the filter string in any value
      //   return this.albumsOfTheYear.filter(album => {
      //     return Object.values(album).some(value => {
      //       return value.toString().toLowerCase().includes(this.currentFilter.toLowerCase())
      //     })
      //   })
      // },
      getYears() {
        // get unique years in the albumsOfTheYear array
        return [...new Set(this.albumsOfTheYear.map(album => album.year))]
      }
    },
    // watch: {
    //   filter() {
    //     this.filterAlbumsOfTheYear()
    //   }
    // }
  }
</script>