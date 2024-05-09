<template>
  <div
    ref="ep-map-container"
    class="ep-map-container"
  >
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
      pinLocations: {
        type: Array,
        default: () => []
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
    emits: ['centerChange', 'dropPin', 'zoomChange'],
    data() {
      return {
        init: true,
        map: null,
        markers: [],
      }
    },
    watch: {
      mapCenter(newCenter) {
        this.$emit('centerChange', newCenter)
        this.flyTo(newCenter, this.mapZoom)
      },
      mapZoom(newZoom) {
        this.$emit('zoomChange', newZoom)
        // this.map.zoomTo(newZoom)

        // set the zoom level
        this.flyTo(this.mapCenter, newZoom)

        console.log('zoom changed', newZoom)
      },
      mapStyle(newStyle) {
        this.map.setStyle(newStyle)
      },
      pinLocations() {
        this.removeMarkers()
        this.addMarkers()
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
        // if pin locations exist, add them
        if (this.pinLocations.length) this.addMarkers()
        this.init = false
      })
      // get a reference to the parent container
      const container = this.$refs['ep-map-container']

      // create a new ResizeObserver instance
      const observer = new ResizeObserver(() => {
        // the size of the container has changed, redraw the map
        this.$nextTick(() => {
          this.map.resize()
        })
      })

      // attach the observer to the container
      observer.observe(container)
    },
    created() {
      // selectively create watchers if features exist
      // do this for everything that is not required

      if (this.mapSource) {
        this.$watch('mapSource', () => {
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
      addMarkers() {
        this.pinLocations.forEach((location) => {
          const marker = new mapboxgl.Marker().setLngLat(location).addTo(this.map)
          this.markers.push(marker)
        })
      },
      removeMarkers() {
        this.markers.forEach((marker) => marker.remove())
        this.markers = []
      },
      flyTo(center = this.mapCenter, zoom = this.mapZoom) {
        this.map.flyTo({
          center,
          zoom
        })
      },
      loadMap() {
        return new Promise(resolve => {
          mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_TOKEN
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
          this.map.on('dragend', this.onDragEnd)
        })
      },
      onDragEnd() {
        const center = this.map.getCenter()
        this.$emit('centerChange', [center.lng, center.lat])
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
    }
  }
</script>
