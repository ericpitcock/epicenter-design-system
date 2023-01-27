<template>
  <div :class="[ 'grid', gridClasses ]">
    <div class="header">
      <slot name="header" />
    </div>
    <div v-show="leftPanelOpen" class="left-panel">
      <slot name="left-panel" />
    </div>
    <div class="content">
      <slot name="content" />
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
  methods: {
    // toggleLeftPanel() {
    //   this.leftPanelOpen = !this.leftPanelOpen
    // },
    // toggleRightPanel() {
    //   this.rightPanelOpen = !this.rightPanelOpen
    // }
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
.grid {
  display: grid;
  grid-template-areas:
    'header header right-panel'
    'left-panel content right-panel';
  grid-template-columns: 240px 1fr 300px;
  grid-template-rows: 41px 1fr;
  width: 100vw;
  height: 100vh;
  &.left-panel-closed {
    grid-template-areas:
      'header header right-panel'
      'content content right-panel';
  }
  &.right-panel-closed {
    grid-template-areas:
      'header header header'
      'left-panel content content';
  }
  &.left-panel-closed.right-panel-closed {
    grid-template-areas:
      'header header header'
      'content content content';
  }
  .header {
    grid-area: header;
    // background-color: var(--color--primary);
    // color: var(--color--primary-text);
    // display: flex;
    // align-items: center;
    // justify-content: space-between;
    // padding: 0 1rem;
    // height: 3rem;
  }
  .left-panel {
    grid-area: left-panel;
    // background-color: var(--color--primary);
    // color: var(--color--primary-text);
    // padding: 1rem;
    // height: 100%;
  }
  .content {
    grid-area: content;
    // background-color: var(--color--primary);
    // color: var(--color--primary-text);
    // padding: 1rem;
    // height: 100%;
  }
  .right-panel {
    grid-area: right-panel;
    // background-color: var(--color--primary);
    // color: var(--color--primary-text);
    // padding: 1rem;
    // height: 100%;
  }
}
</style>