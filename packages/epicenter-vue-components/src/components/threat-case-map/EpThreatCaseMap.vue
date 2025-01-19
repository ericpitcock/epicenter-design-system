<template>
  <div
    class="map-container"
    :class="`case-${selectedThreatCase}`"
  >
    <div
      id="map"
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
                @mouseenter="highlightEvent(event.id)"
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
              @mouseenter="highlightEvent(event.id)"
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
                @mouseenter="highlightEvent(event.id)"
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
                @mouseenter="highlightEvent(event.id)"
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
    </div>
  </div>
</template>

<script setup>
  import { computed, nextTick, onMounted, onUnmounted, watch } from 'vue'
  import * as d3 from 'd3'

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

  let svg = null

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

  const highlightEvent = id => {
    if (id === null) {
      d3.selectAll('.node, .event, .connection').classed('dimmed', false)
      return
    }

    const event = events.value.find(obj => obj.id === id)
    const sourceID = event.source
    const targetID = event.target

    d3.selectAll('.node, .event, .connection').classed('dimmed', true)
    d3.selectAll(`#event${id}, #${sourceID}, #${targetID}, .connection.event${id}`).classed('dimmed', false)
  }

  const drawConnections = () => {
    if (svg) {
      svg.selectAll('*').remove()
    } else {
      svg = d3.select('#map').append('svg')
        .attr('width', '100%').attr('height', '100%')
        .attr('style', 'position: absolute; top: 0; left: 0; right: 0; bottom: 0;')
    }

    const mapRect = document.querySelector('#map').getBoundingClientRect()

    events.value.forEach(event => {
      const sourceNode = document.getElementById(`event${event.id}`).getBoundingClientRect()
      const targetNode = document.getElementById(event.target).getBoundingClientRect()

      let sourceX = sourceNode.x + sourceNode.width / 2 - mapRect.x
      let sourceY = sourceNode.y + sourceNode.height / 2 - mapRect.y
      let targetX = targetNode.x + targetNode.width / 2 - mapRect.x
      let targetY = targetNode.y + targetNode.height / 2 - mapRect.y

      // Adjust source and target positions based on anchors
      switch (event.anchors[0]) { // Source anchor
        case 'Left':
          sourceX = sourceNode.left - mapRect.x
          break
        case 'Right':
          sourceX = sourceNode.right - mapRect.x
          break
        case 'Top':
          sourceY = sourceNode.top - mapRect.y
          break
        case 'Bottom':
          sourceY = sourceNode.bottom - mapRect.y
          break
        case 'TopLeft':
          sourceX = sourceNode.left - mapRect.x
          sourceY = sourceNode.top - mapRect.y
          break
        case 'BottomLeft':
          sourceX = sourceNode.left - mapRect.x
          sourceY = sourceNode.bottom - mapRect.y
          break
      }

      switch (event.anchors[1]) { // Target anchor
        case 'Left':
          targetX = targetNode.left - mapRect.x
          break
        case 'Right':
          targetX = targetNode.right - mapRect.x
          break
        case 'Top':
          targetY = targetNode.top - mapRect.y
          break
        case 'Bottom':
          targetY = targetNode.bottom - mapRect.y
          break
        case 'TopLeft':
          targetX = targetNode.left - mapRect.x
          targetY = targetNode.top - mapRect.y
          break
        case 'BottomLeft':
          targetX = targetNode.left - mapRect.x
          targetY = targetNode.bottom - mapRect.y
          break
      }

      const midX = (sourceX + targetX) / 2

      const path = svg.append('path')
        .attr('d', `M ${sourceX},${sourceY} C ${midX},${sourceY} ${midX},${targetY} ${targetX},${targetY}`)
        .attr('class', `connection event${event.id}`)
        .attr('stroke', `var(--ep-tcm-${event.stages[0]})`)
        .attr('stroke-width', 2)
        .attr('fill', 'none')

      if (event.stages[0] === 'recon') {
        path.attr('stroke-dasharray', '3 5')
      }
    })
  }

  watch(() => props.selectedThreatCase, () => {
    nextTick(() => {
      drawConnections()
    })
  })

  onMounted(() => {
    drawConnections()
    window.addEventListener('resize', drawConnections)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', drawConnections)
    svg.selectAll('*').remove()
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

  svg.jtk-hover {

    // z-index: 1;
    path:not(.jtk-connector-outline) {
      // stroke: darken($selectedBlue, 10%);
      // stroke: color.adjust($selectedBlue, $lightness: -10%);
      // stroke: $selectedBlue;
      // cursor: pointer;
      // stroke-width: 4;
    }
  }

  .jtk-connector {
    path {
      // use to style lines
    }

    &.active {
      path:not(.jtk-connector-outline) {
        // stroke: darken($selectedBlue, 10%);
        // stroke: color.adjust($selectedBlue, $lightness: -10%);
        stroke: var(--ep-tcm-recon);
      }
    }
  }

  .jtk-connector-outline {
    path {
      // use to style outlines
    }
  }

  // classes for lines
  .hidden {
    display: none;
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

        // hack for browsers that don't support anchors
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

    // hack for browsers that don't support anchors
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
