<template>
  <div class="container">
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
      >Open XDR Platform</div>
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
  let outputDot = null
  let sourcePaths = [] // Store paths for source dots
  let outputPath = null // Store single path for output dot
  let completedDots = 0 // Track how many source dots have finished

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

  const createPath = (start, end, color) => {
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

  const animateDots = () => {
    console.log('🔄 Restarting input dot animation')
    completedDots = 0 // Reset at the start of each cycle

    const sourceElements = document.querySelectorAll('.source')

    sourceElements.forEach((source, index) => {
      const color = `hsl(${index * 90}, 40%, 50%)`
      const path = sourcePaths[index]

      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      dot.setAttribute('r', '5')
      dot.setAttribute('fill', color)
      dot.setAttribute('cx', '-10') // 🛠 FIX: Set an initial offscreen position
      dot.setAttribute('cy', '-10')
      svgEl.value.appendChild(dot)

      let progress = 0
      function moveDot() {
        progress += 0.01
        if (progress > 1) {
          svgEl.value.removeChild(dot) // Remove dot after reaching processor
          completedDots++
          console.log(`✅ Dot ${completedDots}/${sources.length} reached processor`)

          if (completedDots === sources.length) {
            console.log('🎯 All input dots reached processor, triggering output animation')
            animateOutputDot() // When all dots reach processor, trigger output animation
          }
          return
        }
        const point = path.getPointAtLength(progress * path.getTotalLength())
        dot.setAttribute('cx', point.x)
        dot.setAttribute('cy', point.y)
        requestAnimationFrame(moveDot)
      }
      setTimeout(moveDot, index * 200)
    })
  }

  const animateOutputDot = () => {
    console.log('🚀 Animating output dot')

    // 🛠 FIX: Only remove outputDot if it's still in the DOM
    if (outputDot && svgEl.value.contains(outputDot)) {
      svgEl.value.removeChild(outputDot) // Ensure the previous output dot is gone
    }

    outputDot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    outputDot.setAttribute('r', '5')
    outputDot.setAttribute('fill', 'white')
    outputDot.setAttribute('cx', '-10') // 🛠 FIX: Set an initial offscreen position
    outputDot.setAttribute('cy', '-10')
    svgEl.value.appendChild(outputDot)

    let progress = 0
    function moveDot() {
      progress += 0.01
      if (progress > 1) {
        if (svgEl.value.contains(outputDot)) {
          svgEl.value.removeChild(outputDot) // Remove dot after reaching output
        }
        console.log('✅ Output dot reached end, adding event')
        addOutputEvent()
        return
      }
      const point = outputPath.getPointAtLength(progress * outputPath.getTotalLength())
      outputDot.setAttribute('cx', point.x)
      outputDot.setAttribute('cy', point.y)
      requestAnimationFrame(moveDot)
    }

    moveDot()
  }

  const addOutputEvent = () => {
    events.value.push('Processed Event')
    if (events.value.length > 5) {
      events.value.shift()
    }

    setTimeout(() => {
      console.log('🔄 Restarting animation cycle')
      animateDots() // Restart input animation again
    }, 1000)
  }

  onMounted(async () => {
    await nextTick() // Ensure elements are rendered before calculations
    setupPaths() // Create paths once
    animateDots() // Start animation
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