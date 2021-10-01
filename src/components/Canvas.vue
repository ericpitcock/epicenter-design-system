<template>
  <div class="canvas-container">
    <EpControlBar :style="{ flex: '0 0 61px' }">
      <EpControlBarSegment>
        <EpButton :kind="'naked'" :size="'small'" :labelText="'Control'" />
      </EpControlBarSegment>
      <EpControlBarSegment :justifyContent="'center'">
        <EpButton :kind="'naked'" :size="'small'" :labelText="'Zoom in'" />
        <EpButton :kind="'naked'" :size="'small'" :labelText="'Zoom out'" />
      </EpControlBarSegment>
      <EpControlBarSegment :justifyContent="'flex-end'">
        <EpButton :kind="'naked'" :size="'small'" :labelText="'Sign in'" />
      </EpControlBarSegment>
    </EpControlBar>
    <EpMap />
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpControlBar from '@/components/controlbar/EpControlBar'
  import EpControlBarSegment from '@/components/controlbar/EpControlBarSegment'
  import EpMap from '@/components/map/EpMap'

  export default {
    name: 'Canvas',
    components: {
      EpButton,
      EpControlBar,
      EpControlBarSegment,
      EpMap
    }
  }
</script>

<style lang="scss" scoped>
  .canvas-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>