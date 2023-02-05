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
    .left {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      overflow: auto;
      .header {
        flex: 0 0 41px;
      }
      .grid {
        flex: 1;
        display: flex;
        // need to addresss this overflow issue
        // the mixin also has overflow:-y: scroll
        overflow: scroll;
        @include scrollable-container;
        .left-panel {
          // flex: 0 0 241px;
          // position: sticky;
          // top: 0;
          overflow: auto;
          // might be able to add this directly to the nav iteams causing the issue
          z-index: var(--z-index--fixed);
        }
        .content {
          flex: 1;
          overflow: auto;
          // height: fit-content;
          // width: 100%;
          height: 100%;
          // overflow: auto;
          // @include scrollable-container;
          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
    .right-panel {
      flex: 0 0 341px;
      overflow: auto;
      // border-left: 1px solid var(--border-color);
    }
  }
</style>