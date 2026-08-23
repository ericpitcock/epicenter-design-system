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
| `fitToBounds` | - | `boolean` | `-` |
| `mapCenter` | - | `tuple` | `-` |
| `mapLayer` | - | `union` | `-` |
| `mapSource` | - | `union` | `-` |
| `mapStyle` | - | `string` | `-` |
| `mapZoom` | - | `number` | `-` |
| `navigationControl` | - | `boolean` | `-` |
| `pinLocations` | - | `Array` | `-` |
| `scrollZoom` | - | `boolean` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `centerChange` | - | - |
| `dropPin` | - | - |
| `zoomChange` | - | - |


::: info
This component does not use slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-map` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-map {
  --ep-map-height: /* … */;
}
```

### Box

| Property | Default | State |
|---|---|---|
| `--ep-map-height` | `100%` | — |
| `--ep-map-width` | `100%` | — |

## Component Code

```vue
<script setup lang="ts">
  import 'mapbox-gl/dist/mapbox-gl.css'
  import { computed, nextTick, onBeforeUnmount, onMounted, onUpdated, ref, useTemplateRef } from 'vue'

  interface MapSource {
    id: string
    source: Record<string, unknown>
  }

  interface Props {
    accessToken: string
    fitToBounds?: boolean
    mapCenter?: [number, number]
    mapLayer?: Record<string, unknown> | null
    mapSource?: (MapSource & { source: { data: { geometry: { coordinates: [number, number][] } } } }) | null
    mapStyle?: string
    mapZoom?: number
    navigationControl?: boolean
    pinLocations?: [number, number][]
    scrollZoom?: boolean
  }

  const {
    accessToken,
    fitToBounds = false,
    mapCenter = [-122.3321, 47.6062],
    mapLayer = null,
    mapSource = null,
    mapStyle = 'mapbox://styles/mapbox/streets-v11',
    mapZoom = 12,
    navigationControl = true,
    pinLocations = [],
    scrollZoom = true,
  } = defineProps<Props>()

  const emit = defineEmits<{
    centerChange: [center: [number, number]]
    dropPin: []
    zoomChange: [zoom: number]
  }>()

  defineOptions({ name: 'EpMap' })

  const init = ref(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map = ref<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markers = ref<any[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mapboxgl: any = null
  const mapStateSignature = computed(() => JSON.stringify({
    mapCenter,
    mapZoom,
    mapStyle,
    pinLocations,
    scrollZoom,
  }))
  const previousMapStateSignature = ref('')

  const epMapContainer = useTemplateRef<HTMLDivElement>('epMapContainer')
  const epMapCanvas = useTemplateRef<HTMLDivElement>('epMapCanvas')

  const observer = new ResizeObserver(() => {
    if (map.value) {
      nextTick(() => {
        map.value.resize()
      })
    }
  })

  onMounted(() => {
    loadMap().then(() => {
      if (mapSource && mapLayer) addSource(mapSource, mapLayer)
      if (fitToBounds && mapSource) {
        fitBounds(getBounds(mapSource.source.data.geometry.coordinates))
      }
      if (pinLocations.length) addMarkers()
      init.value = false
      previousMapStateSignature.value = mapStateSignature.value
    })

    if (epMapContainer.value) {
      observer.observe(epMapContainer.value)
    }
  })

  onUpdated(() => {
    if (!map.value || init.value) return
    if (previousMapStateSignature.value === mapStateSignature.value) return

    const previousState = JSON.parse(previousMapStateSignature.value || '{}') as {
      mapCenter?: [number, number]
      mapStyle?: string
      mapZoom?: number
      pinLocations?: [number, number][]
      scrollZoom?: boolean
    }

    previousMapStateSignature.value = mapStateSignature.value

    if (JSON.stringify(previousState.mapCenter) !== JSON.stringify(mapCenter)) {
      emit('centerChange', mapCenter)
      flyTo(mapCenter, mapZoom)
    }

    if (previousState.mapZoom !== mapZoom) {
      emit('zoomChange', mapZoom)
      flyTo(mapCenter, mapZoom)
    }

    if (previousState.mapStyle !== mapStyle) {
      map.value.setStyle(mapStyle)
    }

    if (JSON.stringify(previousState.pinLocations) !== JSON.stringify(pinLocations)) {
      removeMarkers()
      addMarkers()
    }

    if (previousState.scrollZoom !== scrollZoom) {
      if (scrollZoom) {
        map.value.scrollZoom.enable()
      } else {
        map.value.scrollZoom.disable()
      }
    }
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

  const loadMap = (): Promise<void> => {
    return new Promise((resolve) => {
      if (!epMapCanvas.value) return

      import('mapbox-gl').then((module) => {
        mapboxgl = module.default
        map.value = new mapboxgl.Map({
          accessToken: accessToken,
          container: epMapCanvas.value as HTMLDivElement,
          center: mapCenter,
          zoom: mapZoom,
          style: mapStyle,
        })

        if (!scrollZoom) map.value.scrollZoom.disable()
        if (navigationControl) map.value.addControl(new mapboxgl.NavigationControl())

        map.value.on('load', () => resolve())
        map.value.on('dragend', onDragEnd)
      })
    })
  }

  const addMarkers = (): void => {
    pinLocations.forEach((location) => {
      const marker = new mapboxgl.Marker().setLngLat(location).addTo(map.value)
      markers.value.push(marker)
    })
  }

  const removeMarkers = (): void => {
    markers.value.forEach((marker) => marker.remove())
    markers.value = []
  }

  const flyTo = (center: [number, number] = mapCenter, zoom: number = mapZoom): void => {
    map.value.flyTo({
      center,
      zoom
    })
  }

  const onDragEnd = (): void => {
    const center = map.value.getCenter()
    emit('centerChange', [center.lng, center.lat])
  }

  const getBounds = (coordinates: [number, number][]): unknown => {
    return coordinates.reduce(
      (bounds: unknown, coord: [number, number]) => (bounds as { extend: (c: [number, number]) => unknown }).extend(coord),
      new mapboxgl.LngLatBounds(coordinates[0], coordinates[0])
    )
  }

  const fitBounds = (bounds: unknown): void => {
    map.value.fitBounds(bounds, {
      linear: false,
      duration: 1000,
      padding: 60
    })
  }

  const addSource = (source: MapSource, layer: Record<string, unknown>): void => {
    map.value.addSource(source.id, source.source)
    map.value.addLayer(layer)
  }
</script>

<template>
  <div
    ref="epMapContainer"
    class="ep-map"
  >
    <div
      ref="epMapCanvas"
      class="ep-map__canvas"
    />
  </div>
</template>
```

## Styles (SCSS)

```scss
// Mapbox's own stylesheet is loaded unlayered (a JS import inside the
// component), and unlayered CSS beats every layer regardless of specificity —
// `.mapboxgl-map { position: relative }` therefore wins over anything declared
// here. So the canvas is sized rather than pinned with `inset`, and the block
// keeps its own `position: relative` as the anchor for overlays.
.ep-map {
  --ep-map-width: 100%;
  --ep-map-height: 100%;

  position: relative;
  width: var(--ep-map-width);
  height: var(--ep-map-height);
}

.ep-map__canvas {
  width: 100%;
  height: 100%;
}

```