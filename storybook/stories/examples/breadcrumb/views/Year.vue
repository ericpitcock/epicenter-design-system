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
  import EpContainer from '@/components/container/EpContainer.vue'

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
    },
    data() {
      return {
        albumsOfTheYear: albumsOfTheYear.default,
        containerProps: {
          backgroundColor: 'var(--interface-foreground)',
          borderRadius: 'var(--border-radius)',
          overflow: 'hidden',
        }
      }
    },
    computed: {
      getAlbumsByYear() {
        return this.albumsOfTheYear.filter(album => album.year === this.year)
      },
    },
    methods: {
      albumClick(album) {
        this.$emit('album-click', 'Album', null, album)
      },
      getAlbum(title) {
        return this.albumsOfTheYear.filter(album => album.title === title)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .year {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: flex-start;
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
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      padding: 1.6rem 2rem;
      border-top: 1px solid var(--border-color);
    }
  }
</style>