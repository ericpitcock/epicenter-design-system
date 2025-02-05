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
                @mouseleave="clearDimmers(true)"
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
              @mouseleave="clearDimmers(true)"
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
                @mouseleave="clearDimmers(true)"
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
                @mouseleave="clearDimmers(true)"
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
            viewBox="0 0 30 30"
            markerWidth="30"
            markerHeight="30"
            refX="30"
            refY="30"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path
              d="M0,0 L0,6 L6,3 z"
              stroke="yellow"
              fill="yellow"
              stroke-width="1"
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

  const clearDimmers = (mouseleave) => {
    if (mouseleave) highlightedEventRef.value = null
    document.querySelectorAll('.dimmed').forEach(el => el.classList.remove('dimmed'))
  }

  const dimEvents = (event) => {
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

  const highlightEvent = (event) => {
    highlightedEventRef.value = event
    startAnimationLoop()
    dimEvents(event)
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

  let arrows = []

  const clearConnections = () => {
    if (!connectionsSvg.value) return
    while (connectionsSvg.value.lastChild) {
      connectionsSvg.value.removeChild(connectionsSvg.value.lastChild)
    }
    arrows = []
  }

  /**
 * approximateCurveAngleAtEnd
 * Approximates the angle (in degrees) of your custom cubic from "fromPt" to "toPt"
 * given the control points (cx1, cy1), (cx2, cy2).
 */
  const approximateCurveAngleAtEnd = (fromPt, toPt, cx1, cy1, cx2, cy2) => {
    // We sample two points: one very close to t=1, and t=1 exactly.
    // Then compute atan2 of their difference.
    const EPS = 0.0001
    const pA = getPointOnCubic(1 - EPS, fromPt, toPt, cx1, cy1, cx2, cy2)
    const pB = getPointOnCubic(1, fromPt, toPt, cx1, cy1, cx2, cy2)

    const dx = pB.x - pA.x
    const dy = pB.y - pA.y
    return Math.atan2(dy, dx) * (180 / Math.PI)
  }

  /**
   * getPointOnCubic
   * Returns the (x, y) at parameter t for a standard cubic:
   *    M p0  C  p1, p2, p3
   */
  const getPointOnCubic = (t, p0, p3, cx1, cy1, cx2, cy2) => {
    const oneMinusT = 1 - t

    const x = Math.pow(oneMinusT, 3) * p0.x
      + 3 * Math.pow(oneMinusT, 2) * t * cx1
      + 3 * oneMinusT * Math.pow(t, 2) * cx2
      + Math.pow(t, 3) * p3.x

    const y = Math.pow(oneMinusT, 3) * p0.y
      + 3 * Math.pow(oneMinusT, 2) * t * cy1
      + 3 * oneMinusT * Math.pow(t, 2) * cy2
      + Math.pow(t, 3) * p3.y

    return { x, y }
  }

  const drawConnections = () => {
    if (!mapElement.value || !connectionsSvg.value) return

    clearConnections()
    const mapRect = mapElement.value.getBoundingClientRect()

    events.value.forEach(event => {
      const fromEventEl = document.getElementById(`event${event.id}`)
      const toNodeEl = document.getElementById(event.target)
      if (!fromEventEl || !toNodeEl) return

      const fromDir = event.anchors?.[0] || 'center'
      const toDir = event.anchors?.[1] || 'center'

      const fromPt = getAnchorPoint(fromEventEl, fromDir, mapRect)
      const toPt = getAnchorPoint(toNodeEl, toDir, mapRect)

      // Build the cubic path (same as before)
      const dx = toPt.x - fromPt.x
      const cx1 = fromPt.x + dx * 0.25
      const cy1 = fromPt.y
      const cx2 = fromPt.x + dx * 0.75
      const cy2 = toPt.y

      const pathD = `M ${fromPt.x},${fromPt.y}
                     C ${cx1},${cy1} ${cx2},${cy2} ${toPt.x},${toPt.y}`

      const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      pathEl.setAttribute('d', pathD)
      pathEl.setAttribute(
        'class',
        `ep-tcm-path--${event.stages[0]} connection event${event.id} arrow__path`
      )

      connectionsSvg.value.appendChild(pathEl)
      arrows.push(pathEl)

      const angleDeg = approximateCurveAngleAtEnd(
        fromPt, toPt, cx1, cy1, cx2, cy2
      )

      const arrowEl = document.createElementNS('http://www.w3.org/2000/svg', 'path')

      arrowEl.setAttribute('d', 'M -8,7 L 0,0 L -8,-7')
      arrowEl.setAttribute(
        'class',
        `connection event${event.id} arrow__head ep-tcm-path--${event.stages[0]}`
      )

      // Translate the tip to (toPt.x, toPt.y), then rotate
      arrowEl.setAttribute(
        'transform',
        `translate(${toPt.x}, ${toPt.y}) rotate(${angleDeg})`
      )

      connectionsSvg.value.appendChild(arrowEl)
      arrows.push(arrowEl)

      if (highlightedEventRef.value) {
        reapplyHighlightClasses(highlightedEventRef.value)
      }
    })
  }

  defineExpose({
    drawConnections
  })

  const reapplyHighlightClasses = (event) => {
    clearDimmers()
    dimEvents(event)
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

  .arrow__path,
  .arrow__head {
    fill: transparent;
    stroke-width: 3;

    &.ep-tcm-path--recon {
      stroke: var(--ep-tcm-recon);
      stroke-dasharray: 3 6;
    }

    &.ep-tcm-path--collection {
      stroke: var(--ep-tcm-collection);
    }

    &.ep-tcm-path--exfil {
      stroke: var(--ep-tcm-exfil);
    }
  }

  .arrow__head {
    &.ep-tcm-path--recon {
      stroke: var(--ep-tcm-recon);
      stroke-dasharray: none;
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
            position: absolute;
            position-anchor: --exfil;
            top: calc(anchor(top) - 36px);
            right: anchor(right);
            left: anchor(left);
            text-align: center;
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
      color: var(--text-color--loud);

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
    align-items: center;
    width: 85%;
    height: 100%;

    .lane--one & {
      width: 250px;
    }

    &__int,
    &__ext {
      height: fit-content;
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
      height: 100%;

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
