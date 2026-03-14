<script setup lang="ts">
  import 'mapbox-gl/dist/mapbox-gl.css'
  import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

  interface MapSource {
    id: string
    source: Record<string, unknown>
  }

  interface EpMapProps {
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
  } = defineProps<EpMapProps>()

  const emit = defineEmits<{
    centerChange: [center: [number, number]]
    dropPin: []
    zoomChange: [zoom: number]
  }>()

  const init = ref(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const map = ref<any>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markers = ref<any[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mapboxgl: any = null

  watch(() => mapCenter, (newCenter) => {
    emit('centerChange', newCenter)
    flyTo(newCenter, mapZoom)
  })

  watch(() => mapZoom, (newZoom) => {
    emit('zoomChange', newZoom)
    flyTo(mapCenter, newZoom)
  })

  watch(() => mapStyle, (newStyle: string) => {
    map.value.setStyle(newStyle)
  })

  watch(() => pinLocations, () => {
    removeMarkers()
    addMarkers()
  })

  watch(() => scrollZoom, (newScrollZoom: boolean) => {
    if (newScrollZoom) {
      map.value.scrollZoom.enable()
    } else {
      map.value.scrollZoom.disable()
    }
  })

  const epMapContainer = ref<HTMLDivElement | null>(null)

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
    })

    if (epMapContainer.value) {
      observer.observe(epMapContainer.value)
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
      import('mapbox-gl').then((module) => {
        mapboxgl = module.default
        map.value = new mapboxgl.Map({
          accessToken: accessToken,
          container: 'ep-map',
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
    class="ep-map-container"
  >
    <div id="ep-map" />
  </div>
</template>