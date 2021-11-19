<template>
  <ep-container
    :fullWidth="true"
    :fullHeight="true"
    :flexCol="true"
    padding="0"
  >
    <ep-control-bar justifyContent="space-between" gap="">
      <ep-control-bar-segment divideRight divideLeft>
        <ep-button kind="secondary" label="Zoom in" @click="mapZoom++" />
        <ep-button kind="secondary" label="Zoom out" @click="mapZoom--" />
        <ep-button kind="secondary" label="IconLeft" iconLeft="arrow-left" />
        <ep-button kind="secondary" label="IconRight" iconRight="arrow-right" />
      </ep-control-bar-segment>
      <ep-control-bar-segment>
        <ep-button kind="primary" label="Primary" disabled />
        <ep-button kind="primary" label="Test method" @click="testMethod" />
        <ep-button kind="secondary" label="Button" />
        <ep-button to="/" kind="secondary" label="Router Link" />
        <ep-button
          href="https://www.google.com/maps"
          kind="secondary"
          label="Link"
        />
      </ep-control-bar-segment>
      <ep-control-bar-segment justifySelf="flex-end">
        <!-- <ep-button kind="naked" label="Naked" icon="arrow-down" />
        <ep-button kind="danger" label="Danger" />
        <ep-button kind="warning" label="Warning" />
        <ep-button kind="success" label="Success" icon="star" /> -->
        <ep-dropdown :model="newMenuItems" label="New Dropdown" alignRight />
      </ep-control-bar-segment>
    </ep-control-bar>
    <ep-menu :model="newMenuItems" />
    <ep-map :mapZoom="mapZoom" />
  </ep-container>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpDropdownItem from '@/components/dropdown/EpDropdownItem'
  import EpControlBar from '@/components/controlbar/EpControlBar'
  import EpControlBarSegment from '@/components/controlbar/EpControlBarSegment'
  import EpMap from '@/components/map/EpMap'
  import EpContainer from '@/components/container/EpContainer'
  import EpMenu from '@/components/menu/EpMenu'

  export default {
    name: 'Sandbox',
    components: {
      EpButton,
      EpControlBar,
      EpControlBarSegment,
      EpDropdown,
      EpDropdownItem,
      EpMap,
      EpContainer,
      EpMenu
    },
    data() {
      return {
        newMenuItems: [
          {
            label: 'Go to internal page',
            iconLeft: 'arrow-right',
            bind: {
              to: '/'
            }
          },
          {
            divider: true
          },
          {
            label: 'Log click',
            iconLeft: 'circle',
            command: () => {
              this.testMethod()
            }
          },
          {
            label: 'Link to internet',
            iconLeft: 'export',
            bind: {
              href: 'https://www.google.com/maps'
            }
          }
        ],
        fakeDropdownItems: [
          {
            label: 'Go to internal page',
            icon: 'arrow-right',
            bind: {
              to: '/'
            }
          },
          {
            divider: true
          },
          {
            label: 'Log click',
            icon: 'circle',
            on: {
              click: () => console.log('click')
            }
          },
          {
            label: 'Link to internet',
            icon: 'export',
            bind: {
              href: 'https://www.google.com/maps'
            }
          }
        ],
        mapZoom: 14
      }
    },
    methods: {
      testMethod() {
        console.log('test method')
      }
    }
  }
</script>

<style lang="scss" scoped></style>
