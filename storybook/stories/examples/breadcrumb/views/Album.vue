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
  import colors from '../../../../../packages/epicenter-styles/tokens/color/color'
  import * as albumsOfTheYear from '../aoty.json'

  export default {
    name: 'Album',
    props: {
      album: {
        type: Object,
        default: () => ({}),
      },
    },
    data() {
      return {
        albumsOfTheYear: albumsOfTheYear.default,
      }
    },
    computed: {
      randomBrightColor() {
        const colorKeys = Object.keys(colors)
        const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)]
        const randomColor = colors[randomColorKey]['500'].value
        const randomColorLighter = colors[randomColorKey]['300'].value
        return `linear-gradient(${randomColor} 50%, ${randomColorLighter} 100%)`
      },
      getAlbum() {
        return this.albumsOfTheYear.filter(album => album.title === this.album.title)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .album {
    display: flex;
    gap: 10rem;

    &__cover {
      border-radius: var(--border-radius);
      transform: rotate(-2deg);
      padding-left: 0.7rem;

      img {
        vertical-align: middle;
        border-radius: var(--border-radius);
        box-shadow: var(--drop-shadow);
        z-index: 1;
      }

      &::before {
        content: '';
        position: absolute;
        width: 98%;
        height: 98%;
        top: 0.5%;
        right: -18.5%;
        border-radius: 50%;
        border: 0.1rem double rgba(255, 255, 255, 0.18);
        z-index: -1;
      }

      &::after {
        content: '';
        position: absolute;
        width: 99%;
        height: 99%;
        background: v-bind(randomBrightColor);
        top: 0.5%;
        right: -20%;
        border-radius: 50%;
        box-shadow: var(--drop-shadow);
        z-index: -2;
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