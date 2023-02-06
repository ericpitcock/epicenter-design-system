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
      {{ getAlbum[0].title }}
      {{ getAlbum[0].artist }}
      {{ getAlbum[0].year }}
      {{ getAlbum[0].description }}
      {{ getAlbum[0].link }}
      <img :src="getAlbum[0].cover" style="width: 300px; height: auto;" />
    </template>
  </div>
</template>

<script>
  import * as albumsOfTheYear from './aoty.json'

  export default {
    name: 'AlbumsOfTheYear',
    props: {
      year: {
        type: String,
        default: ''
      },
      album: {
        type: String,
        default: ''
      },
      view: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        albumsOfTheYear: albumsOfTheYear.default,
        currentView: this.view,
        currentYear: this.year,
        currentAlbum: this.album
      }
    },
    methods: {
      selectYear(year) {
        this.currentView = 'albums'
        this.currentYear = year
        console.log(year)
        this.$emit('year-click', year)
      },
      selectAlbum(album) {
        this.currentView = 'album'
        this.currentAlbum = album.title
        this.$emit('album-click', album)
      }
      // filterAlbumsByYear() {
      //   return this.albumsOfTheYear.filter(album => {
      //     return album.year === "2019"
      //   })
      // },
    },
    computed: {
      filterAlbumsByYear() {
        return this.albumsOfTheYear.filter(album => {
          return album.year === this.currentYear
        })
      },
      getAlbum() {
        return this.albumsOfTheYear.filter(album => {
          return album.title === this.currentAlbum
        })
      },
      // filterAlbumsOfTheYear() {
      //   if (!this.currentYear) return this.albumsOfTheYear
      //   // return the albums that include the filter string in any value
      //   return this.albumsOfTheYear.filter(album => {
      //     return Object.values(album).some(value => {
      //       return value.toString().toLowerCase().includes(this.currentYear.toLowerCase())
      //     })
      //   })
      // },
      getYears() {
        // get unique years in the albumsOfTheYear array
        return [...new Set(this.albumsOfTheYear.map(album => album.year))]
      }
    },
    watch: {
      // filter() {
      //   this.currentView = 'years'
      //   this.filterAlbumsOfTheYear()
      // }
      year() {
        // this.selectYear(this.year)
      },
    }
  }
</script>