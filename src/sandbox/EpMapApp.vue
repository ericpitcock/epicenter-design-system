<template>
  <ep-container height="100%" class="app">
      <div class="app-header">
        <ep-button
          kind="ghost"
          :icon-left="{ name: 'plus' }"
          @click="mapZoom++"
        />
        <ep-button
          kind="ghost"
          :icon-left="{ name: 'minus' }"
          @click="mapZoom--"
        />
        <ep-dropdown
          :button="{ label: 'Seattle Record Stores' }"
          :menu-items="seattleRecordStores"
        />
        <ep-input
          label="Search"
          placeholder="Search"
          @input="search"
          style="flex: 1;"
        />
      </div>
      <div class="app-content">
        <ep-map
          :map-center="mapCenter"
          map-style="mapbox://styles/mapbox/streets-v11"
          :map-zoom="mapZoom"
          :navigation-control="false"
          ref="map"
        />
        <ep-table
          :columns="tableColumns"
          :data="tableData(20)"
          full-width
          compact
          striped
          selectable
          sticky-header
          @row-click="rowClick"
        />
      </div>
  </ep-container>
</template>

<script>
  import faker from 'faker';

  import EpButton from '@/components/button/EpButton'
  import EpContainer from '@/components/container/EpContainer'
  import EpDropdown from '@/components/dropdown/EpDropdown'
  import EpInput from '@/components/input/EpInput'
  import EpMap from '@/components/map/EpMap'
  import EpTable from '@/components/table/EpTable'
  import copyToClipboard from '@/mixins/copyToClipboard'

  export default {
    name: 'Sandbox',
    mixins: [copyToClipboard],
    components: {
      EpButton,
      EpContainer,
      EpDropdown,
      EpInput,
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
            key: 'name',
            command: (value, key) => {
              this.copyToClipboard(value)
            }
          },
          {
            header: 'Address',
            key: 'address',
            command: (value, key) => {
              this.copyToClipboard(value)
            },
            style: 'text--copyable'
          },
          {
            header: 'City',
            key: 'city',
            command: (value, key) => {
              this.copyToClipboard(value)
            },
            style: 'text--copyable'
          },
          {
            header: 'State',
            key: 'state',
            command: (value, key) => {
              this.copyToClipboard(value)
            },
            style: 'text--copyable'
          },
          {
            header: 'Zip',
            key: 'zip',
            command: (value, key) => {
              this.copyToClipboard(value)
            },
            style: 'text--copyable'
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
      rowClick(row) {
        console.log(row)
      },
      search() {
        console.log('youre searching')
      },
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
  .app {
    display: flex;
    flex-direction: column; 
  }
  .app-header {
    flex: 0 0 61px;
    display: flex;
    align-items: center;
    // gap: 1rem;
    padding: 0 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  .app-content {
    flex: 1;
    display: flex;
    align-items: stretch;
  }
</style>
