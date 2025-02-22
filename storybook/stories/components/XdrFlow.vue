<template>
  <div class="container">
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <svg ref="svgEl"></svg>
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
        ref="processorEl"
        class="processor"
      >
        XDR Platform
      </div>
    </div>

    <div class="output-container">
      <div
        ref="outputListEl"
        class="output-list"
      >
        <div
          v-for="(event, index) in events"
          :key="index"
          class="output-item"
        >
          {{ event }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { nextTick, onMounted, ref } from 'vue'

  const sources = ['Endpoint', 'Network', 'Log', 'Cloud']
  const events = ref([])

  const svgEl = ref(null)
  const processorEl = ref(null)
  const outputListEl = ref(null)
  let sourcePaths = [] // Store paths for source dots
  let outputPath = null // Store single path for output dot

  const getElementCenter = (el) => {
    const rect = el.getBoundingClientRect()
    return { x: rect.right, y: rect.top + rect.height / 2 }
  }

  const getProcessorLeftCenter = () => {
    const rect = processorEl.value.getBoundingClientRect()
    return { x: rect.left, y: rect.top + rect.height / 2 }
  }

  const getProcessorRightCenter = () => {
    const rect = processorEl.value.getBoundingClientRect()
    return { x: rect.right, y: rect.top + rect.height / 2 }
  }

  const getOutputListLeftCenter = () => {
    const rect = outputListEl.value.getBoundingClientRect()
    return { x: rect.left, y: rect.top + rect.height / 2 }
  }

  // ✅ Prevent duplicate paths
  const createPath = (start, end, color, existingPath = null) => {
    if (existingPath) return existingPath // Reuse existing path if available

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute(
      'd',
      `M ${start.x} ${start.y} C ${start.x + 100} ${start.y}, ${end.x - 100} ${end.y}, ${end.x} ${end.y}`
    )
    path.setAttribute('stroke', color)
    path.setAttribute('fill', 'none')
    path.setAttribute('stroke-width', '2')
    path.setAttribute('stroke-linecap', 'round')
    svgEl.value.appendChild(path)
    return path
  }

  const setupPaths = () => {
    const sourceElements = document.querySelectorAll('.source')

    sourcePaths = sources.map((_, index) => {
      const color = `hsl(${index * 90}, 40%, 50%)`
      return createPath(getElementCenter(sourceElements[index]), getProcessorLeftCenter(), color)
    })

    outputPath = createPath(getProcessorRightCenter(), getOutputListLeftCenter(), 'white')
  }

  // ✅ More frequent input dots, independent of cycles
  const spawnInputDot = () => {
    const index = Math.floor(Math.random() * sources.length) // Pick a random source
    const color = `hsl(${index * 90}, 40%, 50%)`
    const path = sourcePaths[index]

    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    dot.setAttribute('r', '4')
    dot.setAttribute('fill', color)
    dot.setAttribute('cx', '-10')
    dot.setAttribute('cy', '-10')
    svgEl.value.appendChild(dot)

    let progress = 0
    function moveDot() {
      progress += 0.02 // Faster movement
      if (progress > 1) {
        svgEl.value.removeChild(dot) // Remove after reaching processor
        if (Math.random() < 0.1) spawnOutputDot() // 10% chance to trigger output dot
        return
      }
      const point = path.getPointAtLength(progress * path.getTotalLength())
      dot.setAttribute('cx', point.x)
      dot.setAttribute('cy', point.y)
      requestAnimationFrame(moveDot)
    }
    moveDot()
  }

  // ✅ Randomized independent output dot spawning
  const spawnOutputDot = () => {
    console.log('🚀 Sending output dot')

    outputPath = createPath(getProcessorRightCenter(), getOutputListLeftCenter(), 'white', outputPath)

    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    dot.setAttribute('r', '5')
    dot.setAttribute('fill', 'white')
    dot.setAttribute('cx', '-10')
    dot.setAttribute('cy', '-10')
    svgEl.value.appendChild(dot)

    let progress = 0
    const totalLength = outputPath.getTotalLength()

    function moveDot() {
      progress += 0.005 * totalLength // Controlled movement

      if (progress >= totalLength) {
        progress = totalLength
        const finalPoint = outputPath.getPointAtLength(totalLength)
        dot.setAttribute('cx', finalPoint.x)
        dot.setAttribute('cy', finalPoint.y)

        setTimeout(() => {
          if (svgEl.value.contains(dot)) svgEl.value.removeChild(dot)
          console.log('✅ Output dot reached end, adding event')
          addOutputEvent()
        }, 300)

        return
      }

      const point = outputPath.getPointAtLength(progress)
      dot.setAttribute('cx', point.x)
      dot.setAttribute('cy', point.y)

      requestAnimationFrame(moveDot)
    }

    moveDot()
  }

  const addOutputEvent = () => {
    events.value.push('Processed Event')
    if (events.value.length > 5) {
      events.value.shift()
    }
  }

  onMounted(async () => {
    await nextTick()
    setupPaths()

    // ✅ Faster, more frequent input dots
    setInterval(spawnInputDot, 150) // More frequent input

    // ✅ Output dots are spawned independently, ensuring randomness
    setInterval(() => {
      if (Math.random() < 0.2) spawnOutputDot() // 20% chance every few seconds
    }, 3000)
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

  .processor {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
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

  .output-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: transform 0.5s ease;
  }
</style>