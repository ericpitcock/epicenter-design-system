<template>
  <div class="ep-map-container">
    <div id="ep-map" />
  </div>
</template>

<script>
  import 'mapbox-gl/dist/mapbox-gl.css'
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
    emits: ['dropPin'],
    data() {
      return {
        init: true,
        map: null,
        markers: [],
      }
    },
    watch: {
      mapCenter(newCenter, oldCenter) {
        this.flyTo(newCenter)
      },
      mapZoom(newZoom, oldZoom) {
        this.map.zoomTo(newZoom)
      },
      mapStyle(newStyle, oldStyle) {
        this.map.setStyle(newStyle)
      }
    },
    mounted() {
      this.loadMap().then(() => {
        // map layer
        if (this.mapSource) this.addSource(this.mapSource, this.mapLayer)
        // fit to bounds
        if (this.fitToBounds) {
          this.fitBounds(this.getBounds(this.mapSource.source.data.geometry.coordinates))
        }
        this.init = false
      })
    },
    created() {
      // selectively create watchers if features exist
      // do this for everything that is not required

      if (this.mapSource) {
        this.$watch('mapSource', function (newSource, oldSource) {
          if (this.init) return
          console.log('map source changed (mapSource watcher)')
          if (this.map.getLayer('test')) this.map.removeLayer('test')
          if (this.map.getSource('test')) this.map.removeSource('test')
          this.addSource(this.mapSource, this.mapLayer)
          this.fitBounds(this.getBounds(this.mapSource.source.data.geometry.coordinates))
        })
      }
    },
    beforeUnmount() {
      if (this.map) {
        if (this.map.getLayer('test')) this.map.removeLayer('test')
        if (this.map.getSource('test')) this.map.removeSource('test')
        this.map.remove()
      }
    },
    methods: {
      dropPin(lngLat) {
        this.markers.push(new mapboxgl.Marker()
          .setLngLat(lngLat)
          .addTo(this.map))
        this.$emit('dropPin', lngLat)
      },
      flyTo() {
        this.map.flyTo({
          center: this.mapCenter
        })
      },
      loadMap() {
        return new Promise(resolve => {
          mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpY3BpdGNvY2siLCJhIjoia29WT3AzOCJ9.YTnpZdWBqPD4cH6mlnZoYQ'
          this.map = new mapboxgl.Map({
            container: 'ep-map',
            center: this.mapCenter,
            zoom: this.mapZoom,
            style: this.mapStyle,
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
        let bounds = coordinates.reduce(function (bounds, coord) {
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
    }
  }
</script>
