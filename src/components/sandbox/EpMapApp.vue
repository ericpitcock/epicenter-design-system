<template>
  <ep-container>
    <ep-control-bar justifyContent="space-between" gap="">
      <ep-control-bar-segment>
        <ep-button kind="secondary" label="Zoom in" iconLeft="zoom-in" @click="mapZoom++" />
        <ep-button kind="secondary" label="Zoom out" iconLeft="zoom-out" @click="mapZoom--" />
      </ep-control-bar-segment>
      <ep-control-bar-segment>
        Future search goes here
      </ep-control-bar-segment>
      <ep-control-bar-segment justifySelf="flex-end">
        <ep-dropdown :button="{ label: 'Seattle Record Stores' }" :menuItems="seattleRecordStores" alignRight />
      </ep-control-bar-segment>
    </ep-control-bar>
    <ep-map
      :mapCenter="mapCenter"
      :mapZoom="mapZoom"
      :navigationControl="false"
    />
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
        seattleRecordStores: [
          {
            label: 'Sonic Boom Records',
            command: () => { 
              this.flyTo([-122.38514205300778, 47.66850341509612], 20)
              // this.flyTo({
              //   center: [-122.38514205300778, 47.66850341509612],
              //   zoom: 20
              // })
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
        mapCenter: undefined,
        mapZoom: 14
      }
    },
    methods: {
      testMethod() {
        console.log('test method')
      },
      flyTo(latlng, zoom) {
        this.mapCenter = latlng
        // this.mapZoom = zoom
      }
    }
  }
</script>

<style lang="scss" scoped></style>
