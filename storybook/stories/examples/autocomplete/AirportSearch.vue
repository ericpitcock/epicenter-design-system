<!-- airport search vue 3 options api component using EpAutocomplete.vue -->
<template>
  <div class="airport-search">
    <div class="search-bar">
      <EpAutocomplete
        :input-style="inputStyle"
        :items="airports"
        :searchable-keys="['name', 'city', 'iata_code']"
        placeholder="Search for an airport"
        @selected="onSelect"
      />
    </div>
    <div class="map">
      <ep-map :mapCenter="mapCenter" />
    </div>
  </div>
</template>

<script>
  import EpAutocomplete from '@/components/autocomplete/EpAutocomplete'
  import EpMap from '@/components/map/EpMap'
  import airports from '@/data/airports'

  export default {
    name: 'AirportSearch',
    components: {
      EpAutocomplete,
      EpMap
    },
    data() {
      return {
        airports,
        inputStyle: {
          width: '50rem',
          height: '5rem',
          backgroundColor: '#FFF',
          color: '#000',
          border: 'none',
          // perfect border radius for the input
          borderRadius: '5rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        },
        mapCenter: [-122.309306, 47.449]
      }
    },
    methods: {
      onSelect(item) {
        console.log(item._geoloc.lat, item._geoloc.lng)
        this.mapCenter = [item._geoloc.lng, item._geoloc.lat]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .airport-search {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    .search-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 20rem;
      background: linear-gradient(34deg, rgba(0, 255, 255, 1) 0%, var(--color--primary) 50%);
      // a nice subtle drop shadow
      box-shadow: var(--drop-shadow--large);
      z-index: var(--z-index--fixed);
    }
    .map {
      flex: 1;
    }
  }
</style>
