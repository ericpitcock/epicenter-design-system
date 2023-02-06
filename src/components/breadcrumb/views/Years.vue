<template>
  <div class="years">
    <div class="years__year" v-for="year in getYears" :key="year">
      <router-link :to="{
          name: 'Year',
          params: { year }
        }
      ">
        {{ year }}
      </router-link>
    </div>
  </div>
</template>

<script>
import * as albumsOfTheYear from '../aoty.json'

export default {
  name: 'Years',
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
  //     default: ''
  //   }
  // },
  data () {
    return {
      albumsOfTheYear: albumsOfTheYear.default,
      // currentView: this.view,
      // currentYear: this.year,
      // currentAlbum: this.album
    }
  },
  computed: {
    getYears() {
        // get unique years in the albumsOfTheYear array
        return [...new Set(this.albumsOfTheYear.map(album => album.year))]
      },
    // filterAlbumsByYear () {
    //   return this.albumsOfTheYear.filter(album => album.year === this.currentYear)
    // },
    // getAlbum () {
    //   return this.albumsOfTheYear.filter(album => album.title === this.currentAlbum)
    // }
  },
  methods: {
    // selectYear (year) {
    //   this.currentYear = year
    //   this.currentView = 'albums'
    // },
    // selectAlbum (album) {
    //   this.currentAlbum = album.title
    //   this.currentView = 'album'
    // }
  }
}
</script>