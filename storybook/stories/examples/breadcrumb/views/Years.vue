<template>
  <div class="years">
    <ep-container
      v-for="year in getYears"
      :key="year"
      v-bind="containerProps"
      style="flex: 0 1 200px; display: flex; flex-direction: column;"
    >
      <!-- can convert a to div -->
      <a
        class="link-wrapper"
        @click="yearClick(year)"
      >
        <div
          class="covers"
          @mouseover="startCycling(getAlbumCovers(year).length, year)"
          @mouseout="stopCycling(year)"
        >
          <img
            v-for="(cover, index) in getAlbumCovers(year)"
            :key="index"
            :src="cover"
            :alt="year"
            :style="{ display: index === currentIndices[year] ? 'block' : 'none' }"
          >
        </div>
        <div class="meta">
          <p>{{ year }}</p>
          <p class="text--subtle font-size--tiny">{{
            getAlbumCovers(year).length
          }} albums</p>
        </div>
      </a>
    </ep-container>
  </div>
</template>

<script>
  import * as albumsOfTheYear from '../aoty.json'
  import EpContainer from '@/components/container/EpContainer'

  export default {
    name: 'Years',
    components: {
      EpContainer
    },
    data() {
      return {
        albumsOfTheYear: albumsOfTheYear.default,
        containerProps: {
          backgroundColor: 'var(--interface-foreground)',
          borderRadius: 'var(--border-radius)',
          overflow: 'hidden',
        },
        currentIndices: {
          2023: 0,
          2022: 14,
          2021: 4,
          2020: 1,
          2019: 10,
          2018: 8,
          2017: 5,
          2016: 8,
          2015: 5,
          2014: 2,
        },
        intervalIds: {}
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
      },
      startCycling(length, year) {
        // cycle through all the covers, when the end is reached, start over
        this.intervalIds[year] = setInterval(() => {
          this.currentIndices[year] = this.currentIndices[year] + 1
          if (this.currentIndices[year] >= length) {
            this.currentIndices[year] = 0
          }
        }, 350)
      },
      stopCycling(year) {
        clearInterval(this.intervalIds[year])
      },
      yearClick(year) {
        this.$emit('year-click', 'Year', year, null)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .years {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    overflow: hidden;

    a.link-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      cursor: pointer;
    }

    .covers {
      display: flex;

      img {
        object-fit: cover;
        width: 100%;
        height: auto;
      }
    }

    .meta {
      flex: 0 1 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 1rem 2rem;
      border-top: 1px solid var(--border-color);
    }
  }
</style>