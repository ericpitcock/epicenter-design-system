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
        <div class="font-size--jumbo">XDR</div>
        <div>Platform</div>
      </div>
    </div>

    <div
      ref="outputListEl"
      class="output-container"
    >
      <div class="output-list">
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

  // ✅ Get position relative to the SVG element (fixes padding issues)
  const getRelativePosition = (el, align = 'center') => {
    const rect = el.getBoundingClientRect()
    const svgRect = svgEl.value.getBoundingClientRect() // Use SVG as reference

    return {
      x: align === 'right' ? rect.right - svgRect.left
        : align === 'left' ? rect.left - svgRect.left  // ✅ Now supports left alignment
          : rect.left - svgRect.left + rect.width / 2, // Default: center
      y: rect.top - svgRect.top + rect.height / 2
    }
  }

  const setupPaths = () => {
    const sourceElements = document.querySelectorAll('.source')

    sourcePaths = sources.map((_, index) => {
      const color = `hsl(${index * 90}, 40%, 50%)`
      return createCurvedPath(
        getRelativePosition(sourceElements[index], 'right'), // ✅ Start from right edge
        getRelativePosition(processorEl.value),
        color
      )
    })

    outputPath = createCurvedPath(
      getRelativePosition(processorEl.value),
      getRelativePosition(outputListEl.value, 'left'), // ✅ Align output to left edge
      'orange'
    )
  }

  // ✅ Restore curvy input paths dynamically
  const createCurvedPath = (start, end, color, existingPath = null) => {
    if (existingPath) return existingPath // Reuse existing path if available

    const curveStrength = Math.abs(end.x - start.x) * 0.6 // Stronger curves

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute(
      'd',
      `M ${start.x} ${start.y} C ${start.x + curveStrength} ${start.y}, ${end.x - curveStrength} ${end.y}, ${end.x} ${end.y}`
    )
    path.setAttribute('stroke', color)
    path.setAttribute('fill', 'none')
    path.setAttribute('stroke-width', '2')
    path.setAttribute('stroke-linecap', 'round')
    svgEl.value.appendChild(path)
    return path
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

    outputPath = createCurvedPath(
      getRelativePosition(processorEl.value),
      getRelativePosition(outputListEl.value),
      'white',
      outputPath
    )

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

  // names of types of security events in an array 
  const eventTypes = ['Malware', 'Phishing', 'Ransomware', 'Data Leak', 'Suspicious Activity']

  const addOutputEvent = () => {
    const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)]
    events.value.push(eventType)

    if (events.value.length > 20) {
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    background: linear-gradient(165deg,
        #f4eab8 0%,
        #f7d64a 40%,
        #e4b91d 50%,
        #f7d64a 75%,
        #f6e27f 100%);
    color: #333;
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6),
      inset 0 -2px 4px rgba(0, 0, 0, 0.2),
      0 4px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid #e0b622;
    border-radius: var(--border-radius--large);
    box-shadow: var(--box-shadow--tooltip);
  }

  .output-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    background: var(--interface-surface--accent);
    padding-left: 20px;
    border: 0.1rem solid var(--border-color);
    border-radius: var(--border-radius--large);
    overflow: hidden;
    // background: red;
  }

  .source,
  .output-item {
    padding: 0.8rem 1.2rem;
    background: var(--interface-surface);
    border: 0.1rem solid var(--border-color);
    position: relative;
    border-radius: 6px;
    box-shadow: var(--box-shadow--tooltip);
  }

  .source {
    align-self: flex-end;
    text-align: right;
  }

  .output-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    transition: transform 0.5s ease;
    // padding-bottom: calc(50% + 9.2px);
  }
</style>