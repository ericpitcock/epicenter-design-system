<template>
  <div class="ep-map-container">
    <div id="ep-map"></div>
  </div>
</template>

<script>
  import mapboxgl from 'mapbox-gl'
  
  export default {
    name: 'EpMap',
    props: {
      mapCenter: {
        type: Array,
        default: () => [-122.3321, 47.6062]
      },
      mapZoom: {
        type: Number,
        default: 12
      },
      mapStyle: {
        type: String,
        default: 'mapbox://styles/mapbox/streets-v11'
      },
      mapSource: {
        type: Object,
        default: null
      },
      mapLayer: {
        type: Object,
        default: null
      },
      scrollZoom: {
        type: Boolean,
        default: true
      },
      navigationControl: {
        type: Boolean,
        default: true
      },
      fitToBounds: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        init: true,
        map: null
      }
    },
    computed: {
      theme() {
        let theme = document.documentElement.getAttribute('data-color-theme')
        console.log(theme)
      }
    },
    methods: {
      loadMap() {
        return new Promise(resolve => {
          mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY3BpdGNvY2siLCJhIjoia29WT3AzOCJ9.YTnpZdWBqPD4cH6mlnZoYQ'
          this.map = new mapboxgl.Map({
            container: 'ep-map',
            center: this.getMapCenter(),
            zoom: this.mapZoom,
            style: this.mapStyle
          })
          // various options
          // scroll zoom
          if (!this.scrollZoom) this.map.scrollZoom.disable()
          // Add zoom and rotation controls to the map.
          if (this.navigationControl) this.map.addControl(new mapboxgl.NavigationControl())

          this.map.on('load', () => resolve())
        })
      },
      getMapCenter() {
        if (this.fitToBounds) {
          let bounds = this.getBounds(this.mapSource.source.data.geometry.coordinates)
          return [bounds.getCenter().lng, bounds.getCenter().lat]
        } else {
          return this.mapCenter
        }
      },
      getBounds(coordinates) {
        let bounds = coordinates.reduce(function(bounds, coord) {
          return bounds.extend(coord)
        }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]))
        return bounds
      },
      fitBounds(bounds) {
        this.map.fitBounds(bounds, {
          linear: false,
          duration: 1000,
          padding: 60
        })
      },
      addSource(source, layer) {
        this.map.addSource(source.id, source.source)
        this.map.addLayer(layer)
      }
    },
    watch: {
      mapCenter(newCenter, oldCenter) {
        this.map.setCenter(newCenter)
      },
      mapZoom(newZoom, oldZoom) {
        this.map.zoomTo(newZoom)
      },
      mapStyle(newStyle, oldStyle) {
        this.map.setStyle(newStyle)
      },
      // moved to created
      // mapSource(newSource, oldSource) {
      //   if (this.init) return
      //   if (this.map.getLayer('test')) this.map.removeLayer('test')
      //   this.map.removeSource('test')
      //   this.addSource(this.mapSource, this.mapLayer)
      //   this.fitBounds(this.getBounds(this.mapSource.source.data.geometry.coordinates))
      // }
    },
    mounted() {
      this.loadMap().then(() => {
        // map layer
        if (this.mapSource) this.addSource(this.mapSource, this.mapLayer)
        // fit to bounds
        if (this.fitToBounds) {
          this.fitBounds(this.getBounds(this.mapSource.source.data.geometry.coordinates))
          // console.log(this.getBounds(this.mapSource.source.data.geometry.coordinates))
        }
        this.init = false
      })
      console.log(this.theme)
      // this.map.on('click', function(event) {
      //   // console.log('A click event has occurred at ' + event.lngLat)
      //   console.log(event)
      // })
    },
    created() {
      // selectively create watchers if features exist
      // do this for everything

      if (this.mapSource) {
        this.$watch('mapSource', function(newSource, oldSource) {
          if (this.init) return
          console.log('map source changed (mapSource watcher)')
          if (this.map.getLayer('test')) this.map.removeLayer('test')
          if (this.map.getSource('test')) this.map.removeSource('test')
          this.addSource(this.mapSource, this.mapLayer)
          this.fitBounds(this.getBounds(this.mapSource.source.data.geometry.coordinates))
        })
      }
    },
    beforeDestroy() {
      if (this.map) {
        if (this.map.getLayer('test')) this.map.removeLayer('test')
        if (this.map.getSource('test')) this.map.removeSource('test')
        this.map.remove()
        console.log('map removed (beforeDestroy)')
      }
    },
    // from https://github.com/soal/vue-mapbox/blob/5a37e7a8bd2fdb8776350e66a00e23b47ec5ad0c/src/components/map/GlMap.vue
    // beforeDestroy() {
    //   this.$nextTick(() => {
    //     if (this.map) this.map.remove()
    //   })
    // }
  }
</script>

<style lang="scss" scoped>
  @import '~mapbox-gl/dist/mapbox-gl.css';
  
  .ep-map-container, #ep-map {
    width: 100%;
    height: 100%;
    padding: 0 10px 10px 10px;
  }
  .ep-map-container {
    position: relative;
  }
</style>