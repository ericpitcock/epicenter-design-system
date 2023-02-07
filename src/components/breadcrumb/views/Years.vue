<template>
  <div class="years">
    <template v-for="year in getYears" :key="year">
      <router-link class="years__year" :to="{ name: 'Year', params: { year } }">
        <div class="covers">
          <img v-for="(cover, index) in getAlbumCovers(year)" :key="index" :src="cover" :alt="year" />
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import * as albumsOfTheYear from '../aoty.json'

export default {
  name: 'Years',
  data () {
    return {
      albumsOfTheYear: albumsOfTheYear.default,
    }
  },
  computed: {
    getYears() {
      // get unique years in the albumsOfTheYear array
      return [...new Set(this.albumsOfTheYear.map(album => album.year))]
    }
  },
  methods: {
    getAlbumCovers(year) {
      const albums = this.albumsOfTheYear.filter(album => album.year === year)
      return albums.map(album => album.cover)
    }
  }
}
</script>

<style lang="scss" scoped>
  .years {
    // display flex and fit all children in the space, wrapping if necessary
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &__year {
      display: flex;
      background: red;
    }
  }
  .covers {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 50px;
      height: auto;
      object-fit: cover;
    }
  }
</style>