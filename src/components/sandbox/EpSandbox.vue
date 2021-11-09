<template>
  <ep-container :fullWidth="true" :fullHeight="true" :flexCol="true" padding="0">
    <ep-control-bar :style="{ flex: '0 0 61px' }">
      <ep-control-bar-segment>
        <ep-button kind="primary" label="Primary" />
        <ep-button kind="primary" label="Primary" disabled />
        <ep-button kind="primary" label="Primary" @click.native="testMethod" />
        <ep-button kind="secondary" label="Button" />
        <ep-button to="/" kind="secondary" label="Router Link" />
        <ep-button href="https://www.google.com/maps" kind="secondary" label="Link" />
        <ep-button kind="naked" label="Naked" icon="arrow-down" />
        <ep-button kind="danger" label="Danger" />
        <ep-button kind="warning" label="Warning" />
        <ep-button kind="success" label="Success" icon="star" />
        <ep-dropdown>
          <template #trigger>
            <ep-button
              kind="secondary"
              label="Dropdown"
              icon="chevron-down"
              iconAlignment="right"
            />
          </template>
          <template v-for="(item, index) in fakeDropdownItems">
            <ep-dropdown-item
              :item="item"
              :index="index"
              :key="`item-${index}`"
              v-on="item.on"
            />
          </template>
        </ep-dropdown>
      </ep-control-bar-segment>
    </ep-control-bar>
    <ep-map mapStyle="mapbox://styles/ericpitcock/cke3hfy27072i1bmzjovpgvph" />
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
      ]
    })
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