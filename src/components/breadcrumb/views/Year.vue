<template>
  <div class="year">
    {{ year }}
    <div
      v-for="album in getAlbumsByYear"
      class="album"
    >
      <a
        class="text--link"
        @click="albumClick(album)"
      >
        {{ album.artist }} - {{ album.title }}
      </a>
    </div>
  </div>
</template>

<script>
  import * as albumsOfTheYear from '../aoty.json'

  export default {
    name: 'Year',
    props: {
      year: {
        type: String,
        default: ''
      },
      // album: {
      //   type: String,
      //   default: ''
      // },
      // view: {
      //   type: String,
      //   default: ''
      // }
    },
    data() {
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
      getAlbumsByYear() {
        return this.albumsOfTheYear.filter(album => album.year === this.year)
      },
      // getAlbum(title) {
      //   return this.albumsOfTheYear.filter(album => album.title === title)
      // }
    },
    methods: {
      albumClick(album) {
        this.$emit('album-click', 'Album', null, album)
      },
      getAlbum(title) {
        return this.albumsOfTheYear.filter(album => album.title === title)
      }
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