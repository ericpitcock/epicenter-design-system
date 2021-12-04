<template>
  <div class="layout--sidebar">
    <div class="app-header">
      <slot name="app-header" />
    </div>
    <div class="sidebar">
      <slot name="sidebar" />
    </div>
    <div :class="['content-wrapper', { 'content-wrapper--full-width': fullWidthContent }]">
      <div class="content-container">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpLayoutSidebar'
}
</script>

<style lang="scss">
  .layout--sidebar {
    height: 100%;
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 41px 1fr;
    // &--nav-collapsed {
    //   grid-template-columns: 50px 1fr;
    // }
  }
  .app-header {
    grid-column: 1 / 3;
    grid-row: 1 / 1;
  }
  .sidebar {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
  }
  .content-wrapper {
    grid-column: 2 / 3;
    grid-row: 2 / 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 10px 30px 0;
    
    @media (min-width: 1800px) {
      &:not(.content-wrapper--full-width) {
        padding-right: 240px;
        .grid--nav-collapsed & {
          padding-right: 50px;
        }
      }
    }
  }
  .content-container {
    flex: 1;
    @media (min-width: 1380px) {
      max-width: 1320px;
    }
    .content-wrapper--full-width &  {
      max-width: none;
    }
  }
</style>
