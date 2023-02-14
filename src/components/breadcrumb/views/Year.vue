<template>
  <div class="year">
    <!-- {{ year }} -->
    <ep-container
      v-for="(album, index) in getAlbumsByYear"
      :key="index"
      v-bind="containerProps"
      style="flex: 0 1 200px; display: flex; flex-direction: column;"
    >
      <!-- can convert a to div -->
      <a
        class="link-wrapper"
        @click="albumClick(album)"
      >
        <div class="covers">
          <img
            :src="album.cover"
            :alt="`${album.title} cover`"
          />
        </div>
        <div class="meta">
          {{ album.title }}
          <p class="text--subtle font-size--tiny">
            {{ album.artist }}
          </p>
        </div>
      </a>
    </ep-container>
  </div>
</template>

<script>
  import * as albumsOfTheYear from '../aoty.json'
  import EpContainer from '@/components/container/EpContainer'

  export default {
    name: 'Year',
    components: {
      EpContainer
    },
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
        containerProps: {
          backgroundColor: 'var(--background-1)',
          borderRadius: 'var(--border-radius)',
          overflow: 'hidden',
        }
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

<style lang="scss" scoped>
  .year {
    // display flex and fit all children in the space, wrapping if necessary
    display: flex;
    // flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    // justify-content: flex-start;
    align-items: flex-start;
    // width: 100%;
    // height: 100%;
    overflow: hidden;
    a.link-wrapper {
      // flex: 0 1 200px;
      display: flex;
      flex-direction: column;
      // display: block;
      height: 100%;
      cursor: pointer;
      // background: red;
    }
    .covers {
      // fill width but keep aspect ratio and height to contents
      // flex: 1 1 auto;
      display: flex;
      // position: relative;
      // // display: flex;
      // flex-direction: row;
      // justify-content: space-between;
      // align-items: center;
      // // width: 100%;
      // // height: 100%;
      // overflow: hidden;
      img {
        // position: absolute;
        // top: 0;
        // left: 0;
        // width: 50px;
        // height: auto;
        object-fit: cover;
        // keep aspect ratio and fill width
        width: 100%;
        height: auto;
      }
    }
    .meta {
      flex: 0 1 4rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      // justify-content: space-between;
      // align-items: center;
      width: 100%;
      // height: 100%;
      padding: 1.6rem 2rem;
      border-top: 1px solid var(--border-color);
      // background: blue;
    }
  }
</style>