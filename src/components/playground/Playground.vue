<template>
  <ep-container :fullWidth="true" :fullHeight="true" :flexCol="true" padding="0">
    <ep-control-bar :style="{ flex: '0 0 61px' }">
      <ep-control-bar-segment>
        <ep-button kind="primary" label="Primary" />
        <!-- <ep-button kind="secondary" label="Secondary" icon="chevron-down" iconAlignment="right" /> -->
        <ep-dropdown />
        <ep-button kind="naked" label="Naked" icon="arrow-down" />
        <ep-button kind="danger" label="Danger" />
        <ep-button kind="warning" label="Warning" />
        <ep-button kind="success" label="Success" icon="star" />
      </ep-control-bar-segment>
      <!-- <EpControlBarSegment :justifyContent="'center'">
        <EpButton :kind="'naked'" :label="'Zoom in'" />
        <EpButton :kind="'naked'" :label="'Zoom out'" />
      </EpControlBarSegment>
      <EpControlBarSegment :justifyContent="'flex-end'">
        <EpButton :kind="'naked'" :label="'Sign in'" />
      </EpControlBarSegment> -->
    </ep-control-bar>
    <ep-map mapStyle="mapbox://styles/ericpitcock/cke3hfy27072i1bmzjovpgvph" />
  </ep-container>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpControlBar from '@/components/controlbar/EpControlBar'
  import EpControlBarSegment from '@/components/controlbar/EpControlBarSegment'
  import EpMap from '@/components/map/EpMap'
  import EpContainer from '@/components/container/EpContainer'

  export default {
    name: 'Playground',
    components: {
      EpButton,
      EpControlBar,
      EpControlBarSegment,
      EpDropdown,
      EpMap,
      EpContainer
    }
  }
</script>

<style lang="scss" scoped>
  .canvas-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .ep-control-bar {
    * + * {
      margin-left: 10px;
    }
  }
</style>