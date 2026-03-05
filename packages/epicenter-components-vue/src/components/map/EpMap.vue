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

  const props = withDefaults(defineProps<EpMapProps>(), {
    fitToBounds: false,
    mapCenter: () => [-122.3321, 47.6062],
    mapLayer: null,
    mapSource: null,
    mapStyle: 'mapbox://styles/mapbox/streets-v11',
    mapZoom: 12,
    navigationControl: true,
    pinLocations: () => [],
    scrollZoom: true,
  })

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

  watch(() => props.mapCenter, (newCenter) => {
    emit('centerChange', newCenter)
    flyTo(newCenter, props.mapZoom)
  })

  watch(() => props.mapZoom, (newZoom) => {
    emit('zoomChange', newZoom)
    flyTo(props.mapCenter, newZoom)
  })

  watch(() => props.mapStyle, (newStyle: string) => {
    map.value.setStyle(newStyle)
  })

  watch(() => props.pinLocations, () => {
    removeMarkers()
    addMarkers()
  })

  watch(() => props.scrollZoom, (newScrollZoom: boolean) => {
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
      if (props.mapSource && props.mapLayer) addSource(props.mapSource, props.mapLayer)
      if (props.fitToBounds && props.mapSource) {
        fitBounds(getBounds(props.mapSource.source.data.geometry.coordinates))
      }
      if (props.pinLocations.length) addMarkers()
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
          accessToken: props.accessToken,
          container: 'ep-map',
          center: props.mapCenter,
          zoom: props.mapZoom,
          style: props.mapStyle,
        })

        if (!props.scrollZoom) map.value.scrollZoom.disable()
        if (props.navigationControl) map.value.addControl(new mapboxgl.NavigationControl())

        map.value.on('load', () => resolve())
        map.value.on('dragend', onDragEnd)
      })
    })
  }

  const addMarkers = (): void => {
    props.pinLocations.forEach((location) => {
      const marker = new mapboxgl.Marker().setLngLat(location).addTo(map.value)
      markers.value.push(marker)
    })
  }

  const removeMarkers = (): void => {
    markers.value.forEach((marker) => marker.remove())
    markers.value = []
  }

  const flyTo = (center: [number, number] = props.mapCenter, zoom: number = props.mapZoom): void => {
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