<template>
  <div
    class="map-container"
    :class="`case-${caseID}`"
  >
    <div class="case-control-container">
      <select
        v-model="selectedThreatCase"
        label="Threat Case"
        :value="selectedThreatCase"
      >
        <option
          v-for="(threatcase, index) in threatcases.map(tc => tc.info.title)"
          :value="index"
          :key="index"
        >
          {{ threatcase }}
        </option>
      </select>
    </div>
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
            class="node-container"
            :key="node.id"
          >
            <div class="events events__int">
              <div
                v-for="event in getEvents(node.id)"
                :id="'event' + event.id"
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
          class="node-container"
          :key="node.id"
        >
          <div class="events events__int">
            <div
              v-for="event in getEvents(node.id)"
              :id="'event' + event.id"
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
        <div class="section-title">Compromised Endpoints</div>
        <div
          v-for="node in getNodes('sus')"
          class="node-container"
        >
          <div class="events">
            <div
              :class="['events__int', { 'events__int--compact': filterEvents(getEvents(node.id), 'internal').length > 3 }]"
            >
              <div
                v-for="event in filterEvents(getEvents(node.id), 'internal')"
                :id="'event' + event.id"
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
                v-for="event in filterEvents(getEvents(node.id), 'external')"
                :id="'event' + event.id"
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

      <div class="network-barrier"></div>

      <div class="lane lane--three">
        <div class="section-title">
          Exfiltration Destinations
        </div>
        <div
          v-for="node in getNodes('external')"
          class="node-container"
        >
          <div
            :id="node.id"
            class="node node--external"
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

<script>
  import threatcases from './threatcases.json'
  import { jsPlumb } from 'jsplumb'
  import _ from 'lodash'

  export default {
    name: 'EpThreatCaseMap',
    data() {
      return {
        activeEvidence: null,
        selectedThreatCase: 0,
        stages: ['recon', 'collection', 'exfil'],
        threatcases,
      }
    },
    methods: {
      dashStyler(stage) {
        let dashStyle
        switch (stage) {
          case 'recon':
            dashStyle = '3 5'
            break
          case 'collection':
            dashStyle = null
            break
          case 'exfil':
            dashStyle = null
            break
          default:
        }
        return dashStyle
      },
      drawConnections() {
        let _this = this
        this.events.forEach(function(eventObject, index) {
          let connectorType = 'Bezier'
          if (eventObject.id === 9) {
            connectorType = 'Straight'
          }
          jsPlumb.connect({
            source: 'event' + eventObject.id,
            target: eventObject.target,
            anchors: eventObject.anchors,
            cssClass: 'event' + eventObject.id,
            endpoint: 'Blank',
            overlays: [
              ['Arrow',
                {
                  width: 8,
                  length: 6,
                  location: 1,
                  foldback: 1,
                  direction: eventObject.direction
                }
              ]],
            paintStyle: {
              stroke: _this.strokeStyler(eventObject.stages[0]),
              strokeWidth: 2,
              dashstyle: _this.dashStyler(eventObject.stages[0]),
              outlineStroke: 'var(--interface-surface)',
              outlineWidth: 3
            },
            // hoverPaintStyle: {
            //   stroke: '#71e3fd'
            // },
            connector: [
              connectorType,
              {
                avoidOverlap: true,
                curviness: 100
                // gap: 10,
                // stub: 20
                // midpoint: eventObject.id / 10
              }
            ]
          })
        })
        // reactivate ev if active
        if (this.activeEvidence) { this.activateEvidence(this.activeEvidence) }
        // bind clicks
        jsPlumb.select().each(function(connection) {
          connection.bind('click', function(conn) {
            let event = conn.canvas.classList[1].replace('connector', '') - 1
            _this.activateEvidence(_this.events[event])
          })
        })
        // bind hover
        jsPlumb.select().each(function(connection) {
          connection.bind('mouseover', function(conn) {
            let evTab = document.getElementById(conn.sourceId)
            evTab.classList.toggle('event--selected')
          })
        })
        jsPlumb.select().each(function(connection) {
          connection.bind('mouseout', function(conn) {
            let evTab = document.getElementById(conn.sourceId)
            evTab.classList.toggle('event--selected')
          })
        })
      },
      filterEvents(events, type) {
        return events.filter(function(obj) { return obj.type == type })
      },
      getEvents(id) {
        return this.events.filter(function(obj) { return obj.source == id })
      },
      getNodes(type) {
        return this.nodes.filter(function(obj) { return obj.type == type })
      },
      getNodesByStage(stage) {
        return this.nodes.filter(function(obj) { return obj.stage == stage })
      },
      highlightEvent(id) {
        if (id === null) {
          // remove dimmed class from all .jtk-connector elements
          jsPlumb.select().each(function(connection) {
            connection.canvas.classList.remove('dimmed')
          })
          // remove dimmed class from all .node and .event elements
          document.querySelectorAll('.node, .event').forEach(function(el) {
            el.classList.remove('dimmed')
          })
          return
        }

        let event = this.events.find((obj) => obj.id == id)

        let eventID = `event${id}`
        let sourceID = document.getElementById(event.source).id
        let targetID = document.getElementById(event.target).id

        // give the dimmed class to all .jtk-connector elements that aren't `.${eventID}`
        jsPlumb.select().each(function(connection) {
          if (connection.canvas.classList[1] !== eventID) {
            // delay adding class to give time for the transition
            connection.canvas.classList.add('dimmed')
          }
        })

        // give the dimmed class to all .node and .event elements that aren't `#${sourceID}` or `#${targetID}`
        document.querySelectorAll('.node').forEach(function(el) {
          if (el.id !== sourceID && el.id !== targetID) {
            el.classList.add('dimmed')
          }
        })

        // add .dimmed to each .event element that isn't `#${eventID}`
        // document.querySelectorAll('.event').forEach(function(el) {
        //   if (el.id !== eventID) {
        //     el.classList.toggle('dimmed')
        //   }
        // })
        // add .dimmed to each .event element that isn't `#${eventID}`
        document.querySelectorAll('.event').forEach(function(el) {
          if (el.id !== eventID) {
            // el.style.opacity = 0.25
            el.classList.add('dimmed')
          }
        })
      },
      strokeStyler(eventObject) {
        switch (eventObject) {
          case 'recon':
            return 'hsl(var(--cyan-400))'
          case 'collection':
            return 'hsl(var(--orange-300))'
          case 'exfil':
            return 'hsl(var(--red-400))'
          default:
            return 'hsl(var(--gray-700))'
        }
      },
    },
    computed: {
      caseID() {
        const caseTitle = this.threatcases[this.selectedThreatCase].info.title
        return caseTitle.slice(-6).toLowerCase()
      },
      events() {
        return this.threatcases[this.selectedThreatCase].events
      },
      nodes() {
        return this.threatcases[this.selectedThreatCase].nodes
      },
      nodesByStage() {
        return _.groupBy(this.nodes, 'stage')
      },
      nodesByType() {
        return _.groupBy(this.nodes, 'type')
      },
    },
    watch: {
      selectedThreatCase(newVal, oldVal) {
        this.selectedThreatCase = newVal
        jsPlumb.reset()
        let _this = this
        _.delay(function() {
          _this.drawConnections()
        }, 200)
      }
    },
    mounted() {
      let _this = this
      // set up jsPlumb and draw connections
      jsPlumb.ready(() => {
        jsPlumb.setContainer(document.getElementById('map'))
        this.drawConnections()
      })
      // responsive connections
      window.addEventListener('resize', function() {
        jsPlumb.reset()
        _this.drawConnections()
      })

      // create watcher for left and right arrow keys
      // left will decrement selectedThreatCase
      // right will increment selectedThreatCase
      // when the end is reached, it will loop back to the beginning
      window.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
          if (_this.selectedThreatCase === 0) {
            _this.selectedThreatCase = _this.threatcases.length - 1
          } else {
            _this.selectedThreatCase--
          }
        } else if (e.key === 'ArrowRight') {
          if (_this.selectedThreatCase === _this.threatcases.length - 1) {
            _this.selectedThreatCase = 0
          } else {
            _this.selectedThreatCase++
          }
        }
      })
    },
    unmounted() {
      jsPlumb.reset()
    }
  }
</script>

<style lang="scss">
  // @import '../assets/app.scss';
  // @import '../../../node_modules/jsplumb/css/jsplumbtoolkit-defaults.css';
  $selectedBlue: #a3edfe;

  .case-control-container {
    position: absolute;
    top: 20px;
    left: 20px;

    select {
      all: revert;
    }
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
      stroke: $selectedBlue;
      cursor: pointer;
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
        stroke: $selectedBlue;
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
    background: var(--interface-bg);
  }

  .map {
    position: relative;
    flex: 1 1 75%;
    display: flex;
    align-items: flex-start;
    max-width: 1400px;
    height: 100%;
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
      // text-align: center;
    }

    &--one {
      // justify-content: flex-end;
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
      .case0 & #event9 {
        position: absolute;
        top: -18px;
        left: 118px;
      }
    }

    &--three {
      align-items: flex-start;

      .section-title {
        align-self: center;
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
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233d3d3d' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
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
    background-color: var(--interface-surface);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius--large);
    transition: all .25s cubic-bezier(0, 0.83, 0.25, 1);

    &:hover {
      cursor: pointer;
      // opacity: 1;
    }

    &:not(.node--selected):hover {
      background-color: var(--interface-surface--accent);
      // opacity: 1;
      // box-shadow: $box-shadow-hover;
      // transform: scale(1.05);
    }

    // &--inactive {
    //   opacity: 0.25;
    //   transform: scale(.75);
    // }
    // .host-selected &:not(.node--selected) {
    //   opacity: 0.5;
    //   // transform: scale(.75);
    // }
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

    &--cluster {
      justify-content: flex-end;
      width: 100px;
      height: 100px;
      padding-bottom: 25px;
      padding-left: 0;
      border-radius: 50px;
      text-align: center;
      background-image: url('./icon__host.svg'),
        url('./icon__host.svg'),
        url('./icon__host.svg');
      background-position: 10px 37px, center 25px, 71px 37px;
      background-size: 20px auto, auto, 20px auto;
    }

    &--sus {
      align-items: center;
      justify-content: space-between;
      height: 120px;
      padding: 60px 0 20px 0;
      // font-size: $font-size-medium;
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
        // font-family: $font-family-thin-italic;
        // font-size: $font-size-tiny;
        // color: $dark-gray;
        color: var(--text-color--subtle);
        // letter-spacing: 1px;
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
    // font-family: $font-family-medium;
    background-color: var(--interface-surface--accent);
    font-size: var(--font-size--tiny);

    // transition: all .25s cubic-bezier(0, 0.83, 0.25, 1);
    // opacity: 1;
    // transform: scale(.75);
    // & + .event {
    //   margin-top: -20px;
    // }
    &:not(.event--selected):hover {
      cursor: pointer;
      background-color: var(--interface-surface);
      // border-color: $selectedBlue;
      // box-shadow: 0 1px 4px rgba(0,0,0,0.1);
      // opacity: 1;
      // transform: scale(1.05);
    }

    .host-selected & {
      // opacity: 0;
    }
  }
</style>
