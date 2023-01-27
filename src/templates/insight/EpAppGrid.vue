<template>
  <div class="app-layout">
    <div class="left">
      <div class="header">
        <slot name="header" />
      </div>
      <div class="grid">
        <div v-show="leftPanelOpen" class="left-panel">
          <slot name="left-panel" />
        </div>
        <div class="content">
          <slot name="content" />
        </div>
      </div>
    </div>
    <div v-show="rightPanelOpen" class="right-panel">
      <slot name="right-panel" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpAppGrid',
  props: {
    leftPanelOpen: {
      type: Boolean,
      default: true
    },
    rightPanelOpen: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    gridClasses() {
      return {
        'left-panel-closed': !this.leftPanelOpen,
        'right-panel-closed': !this.rightPanelOpen
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-layout {
    width: 100vw;
    height: 100vh;
    display: flex;
    // overflow: hidden;
    .left {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      .header {
        flex: 0 0 41px;
      }
      .grid {
        flex: 1;
        display: flex;
        overflow: scroll;
        .left-panel {
          position: sticky;
          top: 0;
        }
      }
    }
    .right-panel {
      flex: 0 0 300px;
      // position: fixed;
      // top: 0;
      // right: 0;
      // height: 100%;
      // background: var(--background-1);
      border-left: 1px solid var(--border-color);
    }
  }
  // .grid {
  //   display: grid;
  //   grid-template-areas:
  //     'header header right-panel'
  //     'left-panel content right-panel';
  //   grid-template-columns: 240px 1fr 300px;
  //   grid-template-rows: 41px 1fr;
  //   width: 100vw;
  //   height: 100vh;
  //   &.left-panel-closed {
  //     grid-template-areas:
  //       'header header right-panel'
  //       'content content right-panel';
  //   }
  //   &.right-panel-closed {
  //     grid-template-areas:
  //       'header header header'
  //       'left-panel content content';
  //   }
  //   &.left-panel-closed.right-panel-closed {
  //     grid-template-areas:
  //       'header header header'
  //       'content content content';
  //   }
  //   .header {
  //     grid-area: header;
  //   }
  //   .left-panel {
  //     grid-area: left-panel;
  //   }
  //   .content {
  //     grid-area: content;
  //   }
  //   .right-panel {
  //     grid-area: right-panel;
  //     // > * {
  //     //   position: fixed;
  //     // }
  //   }
  // }
</style>