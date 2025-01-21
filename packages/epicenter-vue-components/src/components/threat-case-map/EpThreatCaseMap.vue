<template>
  <div
    class="map-container"
    :class="`case-${selectedThreatCase}`"
  >
    <div
      id="map"
      ref="mapElement"
      class="map"
    >
      <div class="lane lane--one">
        <template v-if="getNodesByStage('recon').length">
          <div class="section-title">
            Recon Targets
          </div>
          <div
            v-for="node in getNodesByStage('recon')"
            :key="node.id"
            class="node-container"
          >
            <div class="events events__int">
              <div
                v-for="(event, index) in getEvents(node.id)"
                :id="'event' + event.id"
                :key="index"
                class="event"
                @mouseenter="highlightEvent(event)"
                @mouseleave="highlightEvent(null)"
              >
                {{ event.value }}
              </div>
            </div>
            <div
              :id="node.id"
              class="node node--internal"
              :class="{
                'node--cluster': node.cluster === true,
              }"
            >
              <span class="identifier identifier--primary">
                {{ node.labels[0] }}
              </span>
              <span
                v-if="node.labels[1]"
                class="identifier identifier--secondary"
              >
                {{ node.labels[1] }}
              </span>
            </div>
          </div>
        </template>
        <div class="section-title">
          Collection Sources
        </div>
        <div
          v-for="node in getNodesByStage('collection')"
          :key="node.id"
          class="node-container"
        >
          <div class="events events__int">
            <div
              v-for="(event, index) in getEvents(node.id)"
              :id="'event' + event.id"
              :key="index"
              class="event"
              @mouseenter="highlightEvent(event)"
              @mouseleave="highlightEvent(null)"
            >
              {{ event.value }}
            </div>
          </div>
          <div
            :id="node.id"
            class="node node--internal"
            :class="{
              'node--cluster': node.cluster === true,
            }"
          >
            <span class="identifier identifier--primary">
              {{ node.labels[0] }}
            </span>
            <span
              v-if="node.labels[1]"
              class="identifier identifier--secondary"
            >
              {{ node.labels[1] }}
            </span>
          </div>
        </div>
      </div>

      <div class="lane lane--two">
        <div class="section-title">
          Compromised Endpoints
        </div>
        <div
          v-for="(node, index) in getNodes('sus')"
          :key="index"
          class="node-container"
        >
          <div class="events">
            <div
              :class="['events__int', { 'events__int--compact': filterEvents(getEvents(node.id), 'internal').length > 3 }]"
            >
              <div
                v-for="(event, intEventIndex) in filterEvents(getEvents(node.id), 'internal')"
                :id="'event' + event.id"
                :key="intEventIndex"
                class="event"
                @mouseenter="highlightEvent(event)"
                @mouseleave="highlightEvent(null)"
              >
                {{ event.value }}
              </div>
            </div>
            <div
              :class="['events__ext', { 'events__ext--compact': filterEvents(getEvents(node.id), 'external').length > 3 }]"
            >
              <div
                v-for="(event, extEventIndex) in filterEvents(getEvents(node.id), 'external')"
                :id="'event' + event.id"
                :key="extEventIndex"
                class="event"
                @mouseenter="highlightEvent(event)"
                @mouseleave="highlightEvent(null)"
              >
                {{ event.value }}
              </div>
            </div>
          </div>
          <div
            :id="node.id"
            class="node node--sus"
          >
            <span class="identifier identifier--primary">
              {{ node.labels[0] }}
            </span>
            <span
              v-if="node.labels[1]"
              class="identifier identifier--secondary"
            >
              {{ node.labels[1] }}
            </span>
          </div>
        </div>
      </div>

      <div class="network-barrier" />

      <div class="lane lane--three">
        <div class="section-title section-title--exfil">
          Exfiltration Destinations
        </div>
        <div
          v-for="(node, index) in getNodes('external')"
          :key="index"
          class="node-container"
        >
          <div
            :id="node.id"
            :class="['node node--external', { 'node--exfil-anchor': index === 0 }]"
          >
            <span class="identifier identifier--primary">
              {{ node.labels[0] }}
            </span>
            <span
              v-if="node.labels[1]"
              class="identifier identifier--secondary"
            >
              {{ node.labels[1] }}
            </span>
          </div>
        </div>
      </div>
      <svg
        ref="connectionsSvg"
        class="map-connections"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"
      >
        <defs>
          <marker
            id="arrowhead-thin"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path
              d="M0,0 L0,6 L6,3 z"
              fill="inherit"
              stroke="inherit"
            />
          </marker>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script setup>
  import {
    computed,
    ref,
    nextTick,
    onMounted,
    onUnmounted,
    watch,
  } from 'vue'
  // let arrowCreate
  // let HEAD

  // const loadArrowSvg = async () => {
  //   const module = await import('arrows-svg')
  //   arrowCreate = module.default
  //   HEAD = module.HEAD
  // }

  const props = defineProps({
    selectedThreatCase: {
      type: Number,
      default: 0
    },
    threatcases: {
      type: Array,
      required: true
    }
  })

  const events = computed(() => props.threatcases[props.selectedThreatCase].events)
  const nodes = computed(() => props.threatcases[props.selectedThreatCase].nodes)

  const getNodesByStage = (stage) => {
    return nodes.value.filter(node => node.stage === stage)
  }

  const getNodes = (type) => {
    return nodes.value.filter(node => node.type === type)
  }

  const getEvents = (id) => {
    return events.value.filter(event => event.source === id)
  }

  const filterEvents = (events, type) => {
    return events.filter(event => event.type === type)
  }

  let rafId = null

  const startAnimationLoop = () => {
    // In case there's an existing loop
    if (rafId !== null) cancelAnimationFrame(rafId)

    const loop = () => {
      drawConnections()
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)
  }

  const stopAnimationLoop = () => {
    if (rafId !== null) {
      cancelAnimationFrame(rafId)
      rafId = null
    }
  }

  const highlightedEventRef = ref(null)

  // Then in highlightEvent():
  function highlightEvent(event) {
    if (!event) {
      highlightedEventRef.value = null
      // Clear old dimming
      document.querySelectorAll('.dimmed').forEach(el => el.classList.remove('dimmed'))
      // Stop the animation loop if you’re using it
      // stopAnimationLoop()
      return
    }

    highlightedEventRef.value = event
    startAnimationLoop()

    // Apply dimming
    document.querySelectorAll('.node, .event, .connection').forEach(el => {
      el.classList.add('dimmed')
    })
    // Undim relevant items
    const { id, source, target } = event
    const highlightSelectors = [
      `#event${id}`,
      `#${source}`,
      `#${target}`,
      `.connection.event${id}`
    ]
    highlightSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.remove('dimmed')
      })
    })
  }

  const mapElement = ref(null)
  const connectionsSvg = ref(null)

  const anchorOffsets = {
    'TopLeft': { x: 0, y: 0 },
    'Top': { x: 0.5, y: 0 },
    'TopRight': { x: 1, y: 0 },
    'Right': { x: 1, y: 0.5 },
    'BottomRight': { x: 1, y: 1 },
    'Bottom': { x: 0.5, y: 1 },
    'BottomLeft': { x: 0, y: 1 },
    'Left': { x: 0, y: 0.5 },
    'Center': { x: 0.5, y: 0.5 }
  }

  const getAnchorPoint = (el, anchorDir, mapRect) => {
    if (!el) return { x: 0, y: 0 }

    const rect = el.getBoundingClientRect()
    const offsetLeft = rect.left - mapRect.left
    const offsetTop = rect.top - mapRect.top
    const offset = anchorOffsets[anchorDir] || anchorOffsets.center

    return {
      x: offsetLeft + rect.width * offset.x,
      y: offsetTop + rect.height * offset.y
    }
  }

  const makeCurvePath = (from, to) => {
    // Some quick logic for control points:
    const dx = to.x - from.x
    const dy = to.y - from.y

    const cx1 = from.x + dx * 0.25
    const cy1 = from.y
    const cx2 = from.x + dx * 0.75
    const cy2 = to.y

    return `M ${from.x},${from.y} C ${cx1},${cy1} ${cx2},${cy2} ${to.x},${to.y}`
  }

  let arrows = []

  const clearConnections = () => {
    if (!connectionsSvg.value) return
    while (connectionsSvg.value.lastChild) {
      connectionsSvg.value.removeChild(connectionsSvg.value.lastChild)
    }
    arrows = []
  }

  const drawConnections = () => {
    if (!mapElement.value || !connectionsSvg.value) return

    clearConnections()
    const mapRect = mapElement.value.getBoundingClientRect()

    // For each event, draw a path:
    events.value.forEach(event => {
      const fromEventEl = document.getElementById(`event${event.id}`)
      const toNodeEl = document.getElementById(event.target)
      if (!fromEventEl || !toNodeEl) return

      const fromDir = event.anchors?.[0] || 'center'
      const toDir = event.anchors?.[1] || 'center'

      const fromPt = getAnchorPoint(fromEventEl, fromDir, mapRect)
      const toPt = getAnchorPoint(toNodeEl, toDir, mapRect)

      const pathD = makeCurvePath(fromPt, toPt)

      const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      pathEl.setAttribute('d', pathD)
      // Classes for highlighting/dimming
      pathEl.setAttribute(
        'class',
        `ep-tcm-path--${event.stages[0]} connection event${event.id} arrow__path`
      )
      // Attach arrowhead
      pathEl.setAttribute('marker-end', 'url(#arrowhead-thin)')

      connectionsSvg.value.appendChild(pathEl)
      arrows.push(pathEl)

      if (highlightedEventRef.value) {
        // But be careful to skip the “startAnimationLoop()” again 
        // if you only want that on actual hover. 
        // You can create a helper to just apply the dimming classes:
        reapplyHighlightClasses(highlightedEventRef.value)
      }
    })
  }

  const reapplyHighlightClasses = (event) => {
    // Clear old .dimmed
    document.querySelectorAll('.dimmed').forEach(el => el.classList.remove('dimmed'))

    // Dim all
    document.querySelectorAll('.node, .event, .connection').forEach(el => {
      el.classList.add('dimmed')
    })

    // Then undim the relevant items
    const { id, source, target } = event
    const highlightSelectors = [
      `#event${id}`,
      `#${source}`,
      `#${target}`,
      `.connection.event${id}`
    ]
    highlightSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.remove('dimmed')
      })
    })
  }

  watch(() => props.selectedThreatCase, () => {
    nextTick(() => {
      drawConnections()
    })
  })

  let resizeObs = null

  onMounted(() => {
    drawConnections()
    window.addEventListener('resize', drawConnections)

    resizeObs = new ResizeObserver(() => drawConnections())
    queueMicrotask(() => {
      document.querySelectorAll('.event, .node').forEach(el => {
        resizeObs.observe(el)

        // Listen for transitionend
        el.addEventListener('transitionend', () => {
          // If there's NO highlighted event now, transitions are done
          if (!highlightedEventRef.value) {
            // Now that everything has settled, we can do a final draw
            drawConnections()
            // And finally stop the RAF
            stopAnimationLoop()
          }
        })
      })
    })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', drawConnections)
    if (resizeObs) {
      resizeObs.disconnect()
      resizeObs = null
    }
  })
</script>

<style lang="scss">
  :root {
    --ep-tcm-recon: hsl(206, 66%, 65%);
    --ep-tcm-collection: hsl(var(--orange-300));
    --ep-tcm-exfil: hsl(var(--red-400));
  }

  html[data-color-theme='light'] {
    // light theme
  }

  h1 {
    // font-size: $font-size-large;
    line-height: 28px;
  }

  .arrow {
    pointer-events: none;
  }

  .arrow__path {
    fill: transparent;
    stroke-width: 3;

    &.ep-tcm-path--recon {
      stroke: var(--ep-tcm-recon);
      stroke-dasharray: 3 5;
    }

    &.ep-tcm-path--collection {
      stroke: var(--ep-tcm-collection);
    }

    &.ep-tcm-path--exfil {
      stroke: var(--ep-tcm-exfil);
    }
  }

  .arrow__head {
    stroke-width: 2;

    &.ep-tcm-path--recon line {
      stroke: var(--ep-tcm-recon);
    }

    &.ep-tcm-path--collection line {
      stroke: var(--ep-tcm-collection);
    }

    &.ep-tcm-path--exfil line {
      stroke: var(--ep-tcm-exfil);
    }
  }

  .dimmed {
    opacity: 0.25;
  }

  .map-container {
    flex: 1;
    display: flex;
    justify-content: center;
    height: 100%;
    background: var(--interface-surface);
    user-select: none;
  }

  .map {
    position: relative;
    flex: 1 1 75%;
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 1400px;
  }

  .lane {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 60px 0;
    justify-content: center;
    pointer-events: none;

    > * {
      pointer-events: all;
    }

    .section-title {
      font-size: var(--font-size--body);
      margin-bottom: 20px;
      color: var(--text-color--loud);
    }

    &--one {
      align-items: flex-end;

      .section-title {
        width: 100%;
        max-width: 360px;
        padding-left: 30px;
        text-align: left;
      }
    }

    .node-container + .section-title {
      margin-top: 60px;
    }

    &--two {
      align-items: center;

      .node-container + .node-container {
        margin-top: 60px;
      }

      // hacking the sus host to sus host tab into position for case DEF456
      .case-0 & #event9 {
        position: absolute;
        top: -18px;
        left: 118px;
      }
    }

    &--three {
      align-items: flex-start;

      .section-title {
        align-self: center;

        // temp for browsers that don't support anchors
        @supports not (anchor-name: --exfil) {
          display: none;
        }

        @supports (anchor-name: --exfil) {
          &--exfil {
            position: fixed;
            position-anchor: --exfil;
            top: calc(anchor(top) - 36px);
            left: anchor(left);
          }
        }
      }
    }

    .collection {
      position: relative;
      height: 100%;
      margin-top: 60px;
    }
  }

  .network-barrier {
    position: relative;
    flex: 0 0 20px;
    height: 100%;
    background-color: var(--interface-bg--accent);
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='hsl(0, 0%, 30%)' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
    border-right: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);

    &:before,
    &:after {
      position: absolute;
      top: 10px;
      font-size: var(--font-size--small);
      color: var(--text-color--subtle);
    }

    &:before {
      content: 'Internal';
      left: -58px;
    }

    &:after {
      content: 'External';
      right: -62px;
    }
  }

  .node-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 360px;

    .lane--one & {
      justify-content: flex-start;
      padding-left: 30px;
    }

    .lane--three & {
      justify-content: flex-end;
      padding-right: 30px;
    }

    & + .node-container {
      margin-top: 20px;
    }
  }

  .node {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 200px;
    height: 60px;
    padding-left: 55px;
    background-color: var(--interface-overlay);
    border: 1px solid var(--border-color--lighter);
    border-radius: var(--border-radius--large);
    transition: all .25s cubic-bezier(0, 0.83, 0.25, 1);

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }

    &:not(.node--selected):hover {
      // node hover state
    }

    &--internal {
      background-image: url('./icon__host.svg');
      background-position: 10px center;
      background-repeat: no-repeat;
    }

    &--external {
      background-image: url('./icon__external-server.svg');
      background-position: 10px center;
      background-repeat: no-repeat;
    }

    // temp for browsers that don't support anchors
    @supports not (anchor-name: --exfil) {
      &--exfil-anchor {
        position: relative;

        &:before {
          content: 'Exfiltration Destinations';
          position: absolute;
          top: -4rem;
          left: 0;
          width: 100%;
          height: 100%;
          font-size: var(--font-size--body);
          color: var(--text-color--loud);
        }
      }
    }

    @supports (anchor-name: --exfil) {
      &--exfil-anchor {
        anchor-name: --exfil;
      }
    }

    &--cluster {
      justify-content: flex-end;
      width: 100px;
      height: 100px;
      padding-bottom: 25px;
      padding-left: 0;
      border-radius: 50px;
      text-align: center;
      background-image: url('./icon__host.svg'),
        url('./icon__host.svg');
      background-position: 43px 30px, 21px 22px;
      background-size: auto;
    }

    &--sus {
      align-items: center;
      justify-content: space-between;
      height: 120px;
      padding: 60px 0 20px 0;
      background-image: url('./icon__sus-host.svg');
      background-position: center 20px;
      background-repeat: no-repeat;

      & + .node--sus {
        margin-top: 50px;
      }
    }

    .identifier {
      display: block;
      pointer-events: none;

      & + .identifier {
        margin-top: 5px;
      }

      &--primary {}

      &--secondary {
        color: var(--text-color--subtle);
      }
    }
  }

  .events {
    position: absolute;
    top: 0;
    display: flex;
    width: 85%;
    height: 100%;

    .lane--one & {
      width: 250px;
    }

    &__int,
    &__ext {
      flex: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3px;

      &--compact {
        .event + .event {
          margin-top: -20px;
          transition: margin-top 0.2s ease, opacity 0.2s ease;
        }

        &:hover {
          .event {
            margin-top: 0;
            opacity: 1;
          }
        }
      }
    }

    &__int {
      .lane--one & {
        align-items: flex-end;
      }
    }

    &__ext {
      align-items: flex-end;
    }
  }

  .event {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 24px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--interface-foreground);
    font-size: var(--font-size--tiny);
    transition: all .25s cubic-bezier(0, 0.83, 0.25, 1);

    &:hover {
      cursor: pointer;
      background-color: var(--interface-surface);
      color: var(--text-color--loud);
    }

    &::before {
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      background: transparent;
      pointer-events: all;
    }
  }
</style>
