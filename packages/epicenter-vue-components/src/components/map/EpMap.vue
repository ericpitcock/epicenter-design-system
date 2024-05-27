<template>
  <div
    ref="epMapContainer"
    class="ep-map-container"
  >
    <div id="ep-map" />
  </div>
</template>

<script setup>
  import 'mapbox-gl/dist/mapbox-gl.css'
  import mapboxgl from 'mapbox-gl'
  import { ref, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'

  defineOptions({
    name: 'EpMap',
  })
  const props = defineProps({
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
  })

  const emit = defineEmits(['centerChange', 'dropPin', 'zoomChange'])

  const init = ref(true)
  const map = ref(null)
  const markers = ref([])

  watch(() => props.mapCenter, (newCenter) => {
    emit('centerChange', newCenter)
    flyTo(newCenter, props.mapZoom)
  })

  watch(() => props.mapZoom, (newZoom) => {
    emit('zoomChange', newZoom)
    // map.value.zoomTo(newZoom)

    // set the zoom level
    flyTo(props.mapCenter, newZoom)

    console.log('zoom changed', newZoom)
  })

  watch(() => props.mapStyle, (newStyle) => {
    map.value.setStyle(newStyle)
  })

  watch(() => props.pinLocations, () => {
    removeMarkers()
    addMarkers()
  })

  watch(() => props.scrollZoom, (newScrollZoom) => {
    if (newScrollZoom) {
      map.value.scrollZoom.enable()
    } else {
      map.value.scrollZoom.disable()
    }
  })

  // selectively create watchers if features exist
  // do this for everything that is not required

  if (props.mapSource) {
    watch('mapSource', () => {
      if (init.value) return
      console.log('map source changed (mapSource watcher)')
      if (map.value.getLayer('test')) map.value.removeLayer('test')
      if (map.value.getSource('test')) map.value.removeSource('test')
      addSource(props.mapSource, props.mapLayer)
      fitBounds(getBounds(props.mapSource.source.data.geometry.coordinates))
    })
  }

  // get a reference to the parent container
  const epMapContainer = ref(null)

  onMounted(() => {
    loadMap().then(() => {
      // map layer
      if (props.mapSource) addSource(props.mapSource, props.mapLayer)
      // fit to bounds
      if (props.fitToBounds) {
        fitBounds(getBounds(props.mapSource.source.data.geometry.coordinates))
      }
      // if pin locations exist, add them
      if (props.pinLocations.length) addMarkers()
      init.value = false
    })

    // create a new ResizeObserver instance
    const observer = new ResizeObserver(() => {
      // the size of the container has changed, redraw the map
      nextTick(() => {
        map.value.resize()
      })
    })

    // attach the observer to the container
    observer.observe(epMapContainer.value)
  })

  onBeforeUnmount(() => {
    if (map.value) {
      if (map.value.getLayer('test')) map.value.removeLayer('test')
      if (map.value.getSource('test')) map.value.removeSource('test')
      map.value.remove()
    }
  })

  const addMarkers = () => {
    props.pinLocations.forEach((location) => {
      const marker = new mapboxgl.Marker().setLngLat(location).addTo(map.value)
      markers.value.push(marker)
    })
  }

  const removeMarkers = () => {
    markers.value.forEach((marker) => marker.remove())
    markers.value = []
  }

  const flyTo = (center = props.mapCenter, zoom = props.mapZoom) => {
    map.value.flyTo({
      center,
      zoom
    })
  }

  const loadMap = () => {
    return new Promise(resolve => {
      mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_TOKEN
      map.value = new mapboxgl.Map({
        container: 'ep-map',
        center: props.mapCenter,
        zoom: props.mapZoom,
        style: props.mapStyle,
      })
      // various options
      // scroll zoom
      if (!props.scrollZoom) map.value.scrollZoom.disable()
      // Add zoom and rotation controls to the map.
      if (props.navigationControl) map.value.addControl(new mapboxgl.NavigationControl())

      map.value.on('load', () => resolve())
      map.value.on('dragend', onDragEnd)
    })
  }

  const onDragEnd = () => {
    const center = map.value.getCenter()
    emit('centerChange', [center.lng, center.lat])
  }

  // const getMapCenter = () => {
  //   if (this.fitToBounds) {
  //     let bounds = getBounds(this.mapSource.source.data.geometry.coordinates)
  //     return [bounds.getCenter().lng, bounds.getCenter().lat]
  //   } else {
  //     return this.mapCenter
  //   }
  // }

  const getBounds = (coordinates) => {
    let bounds = coordinates.reduce(function(bounds, coord) {
      return bounds.extend(coord)
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]))
    return bounds
  }

  const fitBounds = (bounds) => {
    map.value.fitBounds(bounds, {
      linear: false,
      duration: 1000,
      padding: 60
    })
  }

  const addSource = (source, layer) => {
    map.value.addSource(source.id, source.source)
    map.value.addLayer(layer)
  }
</script>
