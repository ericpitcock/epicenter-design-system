<template>
  <ep-container style="display: flex; flex-direction: column;" height="100%">
      <div class="header">
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
      <div style="flex: 1">
        <ep-map
          :mapCenter="mapCenter"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          :mapZoom="mapZoom"
          :navigationControl="false"
          ref="map"
        />
      </div>
      <!-- <ep-table
        :columns="tableColumns"
        :data="tableData(20)"
        fullWidth
        compact
        striped
        selectable
        stickyHeader
      /> -->
  </ep-container>
</template>

<script>
  import faker from 'faker';

  import EpContainer from '@/components/container/EpContainer'
  import EpButton from '@/components/button/EpButton'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpMap from '@/components/map/EpMap'
  import EpTable from '@/components/table/EpTable'

  export default {
    name: 'Sandbox',
    components: {
      EpContainer,
      EpButton,
      EpDropdown,
      EpMap,
      EpTable
    },
    data() {
      return {
        seattleRecordStores: [
          {
            label: 'Sonic Boom Records',
            command: () => { 
              this.setMapCenter([-122.38514205300778, 47.66850341509612])
            }
          },
          {
            label: 'Jive Time Records',
            command: () => { 
              this.setMapCenter([-122.34959506262331, 47.65081209155994])
            }
          },
          {
            label: 'Silver Platters SoDo',
            command: () => { 
              this.setMapCenter([-122.33381836999745, 47.5774458190115])
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
      // dropPin(location) {
      //   this.$refs.map.dropPin(location)
      // },
      testMethod() {
        console.log('test method')
      },
      tableData(length) {
        let arr = []
        for (let i = 0; i < length; i++) {
          arr.push({
            name: faker.company.companyName(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode()
          })
        }
        return arr
      },
      setMapCenter(latlng) {
        // console.log('setMapCenter', latlng)
        this.mapCenter = latlng
        this.$refs.map.dropPin(latlng)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    flex: 0 0 61px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    border-bottom: 1px solid var(--border-color);
  }
</style>
