<template>
  <div
    class="browser-frame"
    :style="{ width: `${width}px` }"
  >
    <ep-header
      padding="0 2rem"
      style="flex: 1 1 5rem; max-height: 5rem;"
      left-flex="0"
      center-flex="3"
      right-flex="0"
      background-color="var(--interface-foreground)"
    >
      <template #left>
        <div class="window-buttons">
          <div class="window-button window-button--close" />
          <div class="window-button window-button--minimize" />
          <div class="window-button window-button--maximize" />
        </div>
      </template>
      <template #center>
        <div class="search">
          {{ url }}
        </div>
      </template>
      <template #right>
        <ep-icon name="user" />
      </template>
    </ep-header>
    <div class="image-container">
      <!-- <img
        :src="imageUrl"
        alt="Static Image"
      > -->
      <img
        src="./color-desktop.png"
        alt="Static Image"
      >
    </div>
  </div>
</template>

<script>
  import EpHeader from '../header/EpHeader.vue'
  import EpIcon from '../icon/EpIcon.vue'

  export default {
    name: 'EpBrowserFrame',
    components: {
      EpHeader,
      EpIcon
    },
    props: {
      width: {
        type: String,
        default: '100%'
      },
      url: {
        type: String,
        default: 'http://website.com'
      }
      // imageUrl: {
      //   type: String,
      //   default: ''
      // }
    }
  }
</script>

<style lang="scss">
  .browser-frame {
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius--large);
    border: 1px solid var(--border-color);
    overflow: hidden;
  }

  .window-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.7rem;
    width: 100%;
    height: 100%;

    .window-button {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;

      &--close {
        background: #ff5f57;
      }

      &--minimize {
        background: #febc2e;
      }

      &--maximize {
        background: #28c840;
      }
    }
  }

  .search {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3rem;
    padding-left: 1.5rem;
    background: var(--interface-overlay);
    border: 1px solid var(--border-color--lighter);
    border-radius: 1.5rem;
    color: var(--text-color--subtle);
    cursor: default;
  }

  .image-container {
    flex-grow: 1;
    overflow: hidden;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
