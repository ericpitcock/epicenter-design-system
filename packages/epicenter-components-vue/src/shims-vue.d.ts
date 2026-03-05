declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module '@ericpitcock/epicenter-icons-vue/*' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module 'd3' {
  const d3: Record<string, unknown>
  export = d3
  export default d3
}

declare module 'mapbox-gl' {
  const mapboxgl: Record<string, unknown>
  export default mapboxgl
}
