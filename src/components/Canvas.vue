<template>
  <div class="canvas-container">
    <EpControlBar :style="{ flex: '0 0 61px' }">
      <EpControlBarSegment>
        <EpButton :kind="'primary'" :label="'Control'" />
        <EpButton :kind="'danger'" :label="'Control'" />
        <EpButton :kind="'warning'" :label="'Control'" />
        <EpButton :kind="'success'" :label="'Control'" />
        <EpButton :kind="'secondary'" :label="'Control'" />
        <EpButton :kind="'naked'" :label="'Control'" />
      </EpControlBarSegment>
      <!-- <EpControlBarSegment :justifyContent="'center'">
        <EpButton :kind="'naked'" :label="'Zoom in'" />
        <EpButton :kind="'naked'" :label="'Zoom out'" />
      </EpControlBarSegment>
      <EpControlBarSegment :justifyContent="'flex-end'">
        <EpButton :kind="'naked'" :label="'Sign in'" />
      </EpControlBarSegment> -->
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
  button + button {
    margin-left: 10px;
  }
</style>