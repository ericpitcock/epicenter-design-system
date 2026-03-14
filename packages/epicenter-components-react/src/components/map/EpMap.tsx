import React, { useEffect, useRef, useState } from 'react'

export interface PinLocation {
  lat: number
  lng: number
}

export interface MapSource {
  id: string
  source: any
}

export interface EpMapProps {
  /** Mapbox access token (required) */
  accessToken: string
  /** Additional CSS classes */
  className?: string
  /** Fit map to bounds of source data */
  fitToBounds?: boolean
  /** Map center coordinates [lng, lat] */
  mapCenter?: [number, number]
  /** Map layer configuration */
  mapLayer?: any
  /** Map source configuration */
  mapSource?: MapSource | null
  /** Mapbox style URL */
  mapStyle?: string
  /** Map zoom level */
  mapZoom?: number
  /** Show navigation control */
  navigationControl?: boolean
  /** Callback when center changes */
  onCenterChange?: (center: [number, number]) => void
  /** Callback when pin is dropped */
  onDropPin?: (location: PinLocation) => void
  /** Callback when zoom changes */
  onZoomChange?: (zoom: number) => void
  /** Array of pin locations to display */
  pinLocations?: PinLocation[]
  /** Enable scroll zoom */
  scrollZoom?: boolean
}

/**
 * EpMap - Mapbox GL wrapper component
 * 
 * Interactive map with pin markers, custom layers, and navigation controls.
 * Automatically resizes with container using ResizeObserver.
 */
export const EpMap: React.FC<EpMapProps> = ({
  accessToken,
  mapCenter = [-122.3321, 47.6062],
  mapZoom = 12,
  mapStyle = 'mapbox://styles/mapbox/streets-v11',
  mapSource = null,
  mapLayer = null,
  pinLocations = [],
  scrollZoom = true,
  navigationControl = true,
  fitToBounds = false,
  onCenterChange,
  onZoomChange,
  className = ''
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const mapboxglRef = useRef<any>(null)
  const [init, setInit] = useState(true)

  // Load map
  useEffect(() => {
    const loadMap = async () => {
      const mapboxgl = (await import('mapbox-gl')).default
      await import('mapbox-gl/dist/mapbox-gl.css')
      mapboxglRef.current = mapboxgl

      if (!mapContainerRef.current) return

      mapRef.current = new mapboxgl.Map({
        accessToken,
        container: mapContainerRef.current,
        center: mapCenter,
        zoom: mapZoom,
        style: mapStyle
      })

      // Various options
      if (!scrollZoom) mapRef.current.scrollZoom.disable()
      if (navigationControl) mapRef.current.addControl(new mapboxgl.NavigationControl())

      mapRef.current.on('load', () => {
        // map layer
        if (mapSource) addSource(mapSource, mapLayer)
        // fit to bounds
        if (fitToBounds && mapSource) {
          fitBoundsToSource(getBounds(mapSource.source.data.geometry.coordinates))
        }
        // if pin locations exist, add them
        if (pinLocations.length) addMarkers()
        setInit(false)
      })

      mapRef.current.on('dragend', () => {
        const center = mapRef.current.getCenter()
        onCenterChange?.([center.lng, center.lat])
      })
    }

    loadMap()

    return () => {
      if (mapRef.current) {
        removeMarkers()
        if (mapRef.current.getLayer('test')) mapRef.current.removeLayer('test')
        if (mapRef.current.getSource('test')) mapRef.current.removeSource('test')
        mapRef.current.remove()
      }
    }
  }, [])

  // Watch for map center changes
  useEffect(() => {
    if (!init && mapRef.current) {
      onCenterChange?.(mapCenter)
      flyTo(mapCenter, mapZoom)
    }
  }, [mapCenter])

  // Watch for map zoom changes
  useEffect(() => {
    if (!init && mapRef.current) {
      onZoomChange?.(mapZoom)
      flyTo(mapCenter, mapZoom)
    }
  }, [mapZoom])

  // Watch for map style changes
  useEffect(() => {
    if (!init && mapRef.current) {
      mapRef.current.setStyle(mapStyle)
    }
  }, [mapStyle])

  // Watch for pin location changes
  useEffect(() => {
    if (!init && mapRef.current) {
      removeMarkers()
      addMarkers()
    }
  }, [pinLocations])

  // Watch for scroll zoom changes
  useEffect(() => {
    if (!init && mapRef.current) {
      if (scrollZoom) {
        mapRef.current.scrollZoom.enable()
      } else {
        mapRef.current.scrollZoom.disable()
      }
    }
  }, [scrollZoom])

  // Resize observer
  useEffect(() => {
    if (!mapContainerRef.current || !mapRef.current) return

    const observer = new ResizeObserver(() => {
      if (mapRef.current) {
        setTimeout(() => {
          mapRef.current.resize()
        }, 0)
      }
    })

    observer.observe(mapContainerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [init])

  const addMarkers = () => {
    if (!mapboxglRef.current || !mapRef.current) return
    pinLocations.forEach((location) => {
      const marker = new mapboxglRef.current.Marker()
        .setLngLat([location.lng, location.lat])
        .addTo(mapRef.current)
      markersRef.current.push(marker)
    })
  }

  const removeMarkers = () => {
    markersRef.current.forEach((marker) => marker.remove())
    markersRef.current = []
  }

  const flyTo = (center = mapCenter, zoom = mapZoom) => {
    if (mapRef.current) {
      mapRef.current.flyTo({ center, zoom })
    }
  }

  const getBounds = (coordinates: number[][]) => {
    if (!mapboxglRef.current) return null
    return coordinates.reduce(
      (bounds, coord) => bounds.extend(coord),
      new mapboxglRef.current.LngLatBounds(coordinates[0], coordinates[0])
    )
  }

  const fitBoundsToSource = (bounds: any) => {
    if (mapRef.current && bounds) {
      mapRef.current.fitBounds(bounds, {
        linear: false,
        duration: 1000,
        padding: 60
      })
    }
  }

  const addSource = (source: MapSource, layer: any) => {
    if (mapRef.current) {
      mapRef.current.addSource(source.id, source.source)
      if (layer) mapRef.current.addLayer(layer)
    }
  }

  return (
    <div className={`ep-map-container${className ? ` ${className}` : ''}`}>
      <div ref={mapContainerRef} id="ep-map" style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
