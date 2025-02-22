<template>
  <div class="container">
    <svg id="svg"></svg>
    <div class="sources">
      <div
        v-for="source in sources"
        :key="source"
        class="source"
      >
        {{ source }}
      </div>
    </div>
    <div class="processor-container">
      <div
        class="processor"
        id="processor"
      >
        Open XDR Platform
      </div>
    </div>
    <div class="output-container">
      <div
        id="outputList"
        class="output-list"
      >
        <div
          v-for="event in events"
          :key="event"
          class="output-item"
        >
          {{ event }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from "vue"

  const sources = [
    "Endpoint",
    "Network",
    "Log",
    "Cloud",
  ]

  const events = ref([])

  onMounted(() => {
    const svg = document.getElementById("svg")
    const processorElement = document.getElementById("processor")
    const outputList = document.getElementById("outputList")
    const sources = document.querySelectorAll(".source")

    function getElementCenter(element) {
      const rect = element.getBoundingClientRect()
      return { x: rect.right, y: rect.top + rect.height / 2 }
    }

    function getProcessorLeftCenter() {
      const rect = processorElement.getBoundingClientRect()
      return { x: rect.left, y: rect.top + rect.height / 2 }
    }

    function getProcessorRightCenter() {
      const rect = processorElement.getBoundingClientRect()
      return { x: rect.right, y: rect.top + rect.height / 2 }
    }

    function getOutputListLeftCenter() {
      const rect = outputList.getBoundingClientRect()
      return { x: rect.left, y: rect.top + rect.height / 2 }
    }

    function createPath(start, end, color) {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path.setAttribute("d", `M ${start.x} ${start.y} C ${start.x + 100} ${start.y}, ${end.x - 100} ${end.y}, ${end.x} ${end.y}`)
      path.setAttribute("stroke", color)
      path.setAttribute("fill", "none")
      path.setAttribute("stroke-width", "2")
      path.setAttribute("stroke-linecap", "round")
      svg.appendChild(path)
      return path
    }

    function animateDots() {
      sources.forEach((source, index) => {
        const color = `hsl(${index * 90}, 100%, 50%)`
        const path = createPath(getElementCenter(source), getProcessorLeftCenter(), color)

        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
        dot.setAttribute("r", "5")
        dot.setAttribute("fill", color)
        svg.appendChild(dot)

        let progress = 0
        function moveDot() {
          progress += 0.01
          if (progress > 1) {
            progress = 0
            animateOutputDot()
          }
          const point = path.getPointAtLength(progress * path.getTotalLength())
          dot.setAttribute("cx", point.x)
          dot.setAttribute("cy", point.y)
          requestAnimationFrame(moveDot)
        }
        setTimeout(moveDot, index * 200)
      })
    }

    function animateOutputDot() {
      const path = createPath(getProcessorRightCenter(), getOutputListLeftCenter(), "white")
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      dot.setAttribute("r", "5")
      dot.setAttribute("fill", "white")
      svg.appendChild(dot)

      let progress = 0
      function moveDot() {
        progress += 0.01
        if (progress > 1) {
          progress = 0
          addOutputEvent()
        }
        const point = path.getPointAtLength(progress * path.getTotalLength())
        dot.setAttribute("cx", point.x)
        dot.setAttribute("cy", point.y)
        requestAnimationFrame(moveDot)
      }
      moveDot()
    }

    function addOutputEvent() {
      // const newItem = document.createElement("div")
      // newItem.className = "output-item"
      // newItem.textContent = "Processed Event"
      // outputList.prepend(newItem)

      // if (outputList.children.length > 5) {
      //   outputList.removeChild(outputList.lastChild)
      // }

      events.value.push('Processed Event')

      // if more than 5 events, remove the last one
      if (events.value.length > 5) {
        events.value.shift()
      }
    }

    animateDots()
  })
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    display: flex;
    width: 100%;
    height: 400px;
    gap: 20px;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .sources {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    gap: 1rem;
    position: relative;
  }

  .processor-container {
    display: flex;
    flex: 2;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .output-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .source,
  .output-item,
  .processor {
    padding: 8px 12px;
    border-radius: 8px;
    background: var(--interface-surface);
    text-align: center;
    position: relative;
  }

  .processor {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .output-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: transform 0.5s ease;
  }
</style>
