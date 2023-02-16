<!-- vue 3 options api mapbox component -->
<template>
  <div v-show="showMap" class="vue-mapbox" ref="container">
    <div class="map" ref="map" />
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  import 'mapbox-gl/dist/mapbox-gl.css'

  export default {
    name: 'VueMapbox',
    props: {
      mapCenter: {
        type: Array,
        default: () => [-122.309306, 47.449]
      },
      mapZoom: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {
        map: null,
        containerHeight: '',
        showMap: false
      }
    },
    computed: {
      computedMapStyle() {
        return this.theme == 'dark' ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/streets-v11'
      }
    },
    methods: {
      setContainerHeight() {
        // create promise to wait for container height to be set, then init map
        return new Promise((resolve, reject) => {
          this.containerHeight = `${this.$refs.container.clientHeight}px`
          resolve()
        })
      },
      initMap() {
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN
        this.map = new mapboxgl.Map({
          container: this.$refs.map,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: this.mapCenter,
          zoom: this.mapZoom
        })
      }
    },
    mounted() {
      this.setContainerHeight().then(() => {
        // next tick init map
        this.initMap()
        this.showMap = true
      })

      // mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN
      // this.map = new mapboxgl.Map({
      //   container: this.$refs.map,
      //   style: 'mapbox://styles/mapbox/streets-v11',
      //   center: this.mapCenter,
      //   zoom: this.mapZoom
      // })
    },
    // created() {
    //   this.setContainerHeight()
    // },
  }
</script>

<style lang="scss" scoped>
  .vue-mapbox {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    width: auto;
    height: 100%;
    .map {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: v-bind(containerHeight);
    }
  }
</style>