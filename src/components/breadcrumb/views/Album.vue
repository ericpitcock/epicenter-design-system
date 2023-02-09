<template>
  <div class="album">Album
    {{ getAlbum.title }}
  </div>
</template>

<script>
import * as albumsOfTheYear from '../aoty.json'
export default {
  name: 'Album',
  props: {
    // year: {
    //   type: String,
    //   default: ''
    // },
    album: {
      type: Object,
      default: () => ({}),
    },
    // view: {
    //   type: String,
    //   default: ''
    // }
  },
  data () {
    return {
      albumsOfTheYear: albumsOfTheYear.default,
      // currentView: this.view,
      // currentYear: this.year,
      // currentAlbum: this.album
    }
  },
  computed: {
    // getYears () {
    //   return this.albumsOfTheYear.map(album => album.year)
    // },
    // filterAlbumsByYear () {
    //   return this.albumsOfTheYear.filter(album => album.year === this.currentYear)
    // },
    getAlbum() {
      return this.albumsOfTheYear.filter(album => album.title === this.album.title)
    }
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