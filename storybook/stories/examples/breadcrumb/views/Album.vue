<template>
  <div class="album">
    <div class="album__cover">
      <img
        :src="album.cover"
        :alt="`${album.artist} - ${album.title} album cover`"
      />
    </div>
    <div class="album__info copy-block">
      <h2>{{ album.title }}</h2>
      <p class="text--subtle">{{ album.artist }} • {{ album.year }}</p>
      <div
        v-if="album.songs"
        class="album__songs copy-block"
      >
        <h3 class="font-size--body">Liked Songs:</h3>
        <ul>
          <li
            v-for="song in album.songs"
            :key="song"
          >{{ song }}</li>
        </ul>
      </div>
    </div>
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

<style lang="scss" scoped>
  .album {
    display: flex;
    gap: 3rem;

    &__cover {
      border-radius: var(--border-radius);
      box-shadow: var(--drop-shadow);
      overflow: hidden;
      // rotate the image 90deg
      transform: rotate(-2deg);

      img {
        vertical-align: middle;
      }
    }

    &__songs {
      margin-top: 2rem;

      ul {
        li {
          margin-top: 0.5rem;
        }
      }
    }
  }
</style>