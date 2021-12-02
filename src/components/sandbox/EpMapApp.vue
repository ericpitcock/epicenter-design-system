<template>
  <ep-container>
    <!-- <ep-gridd
      style="height: 100%"
      rowGap="30px"
      gridTempColumns="1fr"
      gridTemplateRows="60px 1fr"
    > -->
      <div>
        <ep-button
          kind="secondary"
          label="Zoom in"
          iconLeft="zoom-in"
          @click="mapZoom++"
        />
        <ep-button
          kind="secondary"
          label="Zoom out"
          iconLeft="zoom-out"
          @click="mapZoom--"
        />
        <ep-dropdown
          :button="{ label: 'Seattle Record Stores' }"
          :menuItems="seattleRecordStores"
          alignRight
        />
      </div>
      <div style="background: red;">
        shit
        <!-- <ep-map
          :mapCenter="mapCenter"
          :mapZoom="mapZoom"
          :navigationControl="false"
        /> -->
      </div>
      <!-- <ep-table-new
        :columns="tableColumns"
        :data="tableData(20)"
        fullWidth
        compact
        striped
        selectable
        stickyHeader
      /> -->
    <!-- </ep-gridd> -->
  </ep-container>
</template>

<script>
  // import faker from 'faker';

  import EpContainer from '@/components/container/EpContainer'
  // import EpGridd from '@/components/grid/EpGridd'
  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpMap from '@/components/map/EpMap'
  import EpTableNew from '@/components/tableNew/EpTableNew'

  export default {
    name: 'Sandbox',
    components: {
      EpContainer,
      // EpGridd,
      EpButton,
      EpDropdown,
      EpMap,
      EpTableNew
    },
    data() {
      return {
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
        mapCenter: undefined,
        mapZoom: 14,
        tableColumns: [
          {
            header: 'Name',
            key: 'name'
          },
          {
            header: 'Address',
            key: 'address'
          },
          {
            header: 'City',
            key: 'city'
          },
          {
            header: 'State',
            key: 'state'
          },
          {
            header: 'Zip',
            key: 'zip'
          }
        ],
        // tableData: [
        //   {
        //     name: 'Sonic Boom Records',
        //     address: '1501 4th Ave',
        //     city: 'Seattle',
        //     state: 'WA',
        //     zip: '98101'
        //   }
        // ]
      }
    },
    methods: {
      testMethod() {
        console.log('test method')
      },
      // tableData(length) {
      //   let arr = []
      //   for (let i = 0; i < length; i++) {
      //     arr.push({
      //       name: faker.company.companyName(),
      //       address: faker.address.streetAddress(),
      //       city: faker.address.city(),
      //       state: faker.address.state(),
      //       zip: faker.address.zipCode()
      //     })
      //   }
      //   return arr
      // },
      flyTo(latlng, zoom) {
        this.mapCenter = latlng
        // this.mapZoom = zoom
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
