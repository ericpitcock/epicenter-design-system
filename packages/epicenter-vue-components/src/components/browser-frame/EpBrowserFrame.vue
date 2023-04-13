<template>
  <div
    class="browser-frame"
    :style="{ width: `${bigness}px` }"
  >
    <header>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Search"
        >
        <button>Go</button>
      </div>
    </header>
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
  export default {
    name: 'BrowserFrame',
    props: {
      bigness: {
        type: Number,
        default: 1200
      },
      // imageUrl: {
      //   type: String,
      //   default: ''
      // }
    }
  }
</script>

<style>
  .browser-frame {
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius--large);
    border: 1px solid var(--border-color);
    overflow: hidden;
  }

  header {
    height: 8%;
    background-color: var(--background-2);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search-bar {
    display: flex;
  }

  .search-bar input {
    flex-grow: 1;
    margin-right: 10px;
  }

  .image-container {
    flex-grow: 1;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
