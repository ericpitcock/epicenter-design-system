<template>
  <ep-container :fullWidth="true" :fullHeight="true" :flexCol="true" padding="0">
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
        <ep-button to="/home" kind="secondary" label="Router Link" />
        <ep-button href="https://www.google.com/maps" kind="secondary" label="Link" />
      </ep-control-bar-segment>
      <ep-control-bar-segment justifySelf="flex-end">
        <!-- <ep-button kind="naked" label="Naked" icon="arrow-down" />
        <ep-button kind="danger" label="Danger" />
        <ep-button kind="warning" label="Warning" />
        <ep-button kind="success" label="Success" icon="star" /> -->
        <ep-dropdown alignRight>
          <template #trigger>
            <ep-button
              kind="secondary"
              label="Settings"
              iconLeft="settings"
              iconRight="chevron-down"
            />
          </template>
          <template v-for="(item, index) in fakeDropdownItems" :key="`item-${index}`">
            <ep-dropdown-item
              :item="item"
              :index="index"
              v-on="item.on"
            />
          </template>
        </ep-dropdown>
        <ep-dropdown alignRight>
          <template #trigger>
            <ep-button
              kind="secondary"
              label="Dropdown 2"
              iconLeft="settings"
              iconRight="chevron-down"
            />
          </template>
          <template v-for="(item, index) in fakeDropdownItems" :key="`item-${index}`">
            <ep-dropdown-item
              :item="item"
              :index="index"
              v-on="item.on"
            />
          </template>
        </ep-dropdown>
      </ep-control-bar-segment>
    </ep-control-bar>
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

  export default {
    name: 'Sandbox',
    components: {
      EpButton,
      EpControlBar,
      EpControlBarSegment,
      EpDropdown,
      EpDropdownItem,
      EpMap,
      EpContainer
    },
    data: () => ({
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
    }),
    methods: {
      testMethod() {
        console.log('test method')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>