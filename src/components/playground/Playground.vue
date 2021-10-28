<template>
  <ep-container :fullWidth="true" :fullHeight="true" :flexCol="true" padding="0">
    <ep-control-bar :style="{ flex: '0 0 61px' }">
      <ep-control-bar-segment>
        <ep-button kind="primary" label="Primary" />
        <ep-button kind="naked" label="Naked" icon="arrow-down" />
        <ep-button kind="danger" label="Danger" />
        <ep-button kind="warning" label="Warning" />
        <ep-button kind="success" label="Success" icon="star" />
        <ep-dropdown buttonKind="naked" buttonLabel="Dropdown">
          <ep-button
            v-for="(item, index) in fakeMenuItems"
            :key="index"
            :label="item.label"
            kind="menu-item"
            @click.native="onClick(item.action)"
          />
        </ep-dropdown>
      </ep-control-bar-segment>
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
    },
    data: () => ({
      fakeMenuItems: [
        {
          label: 'Go to internal page',
          action: {
            type: 'router-link',
            path: '/fart'
          }
        },
        {
          label: 'Run a method',
          action: {
            type: 'method',
            method: 'methodName'
          }
        },
        {
          label: 'Link to internet',
          action: {
            type: 'link',
            href: 'https://www.google.com/maps'
          }
        }
      ]
    }),
    methods: {
      onClick(action, event) {
        if (this.disabled) return
        let actionType = action.type
        if (actionType == 'router-link') {
          // router.push
          console.log('this is a router link')
        }
        if (actionType == 'method') {
          // this[functionName](event)
          console.log('this is a method')
        }
        if (actionType == 'link') {
          console.log('this is a link')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  // this is temporary
  .ep-control-bar__segment > {
    * + * {
      margin-left: 10px;
    }
  }
</style>