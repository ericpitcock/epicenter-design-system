# EpMap



::: warning
In order to use `EpMap` in a Vite app, you must add this to `vite.config.js`:
:::

```js
optimizeDeps: {
  include: ['mapbox-gl'],
},
```

This is because Vite does not pre-bundle `mapbox-gl` by default, which can cause import issues*.

*Headaches galore
    

## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `accessToken` | - | `string` | `-` |
| `mapCenter` | - | `array` | `[-122.3321, 47.6062]` |
| `mapZoom` | - | `number` | `12` |
| `mapStyle` | - | `string` | `'mapbox://styles/mapbox/streets-v11'` |
| `mapSource` | - | `object` | `null` |
| `mapLayer` | - | `object` | `null` |
| `pinLocations` | - | `array` | `[]` |
| `scrollZoom` | - | `boolean` | `true` |
| `navigationControl` | - | `boolean` | `true` |
| `fitToBounds` | - | `boolean` | `false` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `centerChange` | - | - |
| `dropPin` | - | - |
| `zoomChange` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
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

  import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

  defineOptions({
    name: 'EpMap',
  })

  const props = defineProps({
    accessToken: {
      type: String,
      required: true
    },
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
  let mapboxgl = null

  watch(() => props.mapCenter, (newCenter) => {
    emit('centerChange', newCenter)
    flyTo(newCenter, props.mapZoom)
  })

  watch(() => props.mapZoom, (newZoom) => {
    emit('zoomChange', newZoom)
    flyTo(props.mapCenter, newZoom)
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

  // get a reference to the parent container
  const epMapContainer = ref(null)

  // create a new ResizeObserver instance
  const observer = new ResizeObserver(() => {
    if (map.value) {
      // Ensure map.value is initialized before calling resize
      nextTick(() => {
        map.value.resize()
      })
    }
  })

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

    // attach the observer to the container
    observer.observe(epMapContainer.value)
  })

  onBeforeUnmount(() => {
    observer.disconnect()

    if (map.value) {
      removeMarkers()

      if (map.value.getLayer('test')) map.value.removeLayer('test')
      if (map.value.getSource('test')) map.value.removeSource('test')
      map.value.remove()
    }
  })

  const loadMap = () => {
    return new Promise((resolve) => {
      // Perform the dynamic import and other async operations
      import('mapbox-gl').then((module) => {
        mapboxgl = module.default
        map.value = new mapboxgl.Map({
          accessToken: props.accessToken,
          container: 'ep-map',
          center: props.mapCenter,
          zoom: props.mapZoom,
          style: props.mapStyle,
        })

        // Various options
        if (!props.scrollZoom) map.value.scrollZoom.disable()
        if (props.navigationControl) map.value.addControl(new mapboxgl.NavigationControl())

        map.value.on('load', () => resolve())
        map.value.on('dragend', onDragEnd)
      })
    })
  }

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

  const onDragEnd = () => {
    const center = map.value.getCenter()
    emit('centerChange', [center.lng, center.lat])
  }

  const getBounds = (coordinates) => {
    return coordinates.reduce(
      (bounds, coord) => bounds.extend(coord),
      new mapboxgl.LngLatBounds(coordinates[0], coordinates[0])
    )
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
```

## Styles (SCSS)

```scss
.ep-map-container {
  position: relative;
  width: 100%;
  height: 100%;
}

#ep-map {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```