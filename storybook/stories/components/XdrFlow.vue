<template>
  <div class="xdr-flow">
    <!-- eslint-disable-next-line vue/html-self-closing -->
    <svg
      id="flow"
      ref="svgEl"
    ></svg>
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
        <svg
          overflow="visible"
          viewBox="0 0 106.99998999999998 15.999988671300535"
          xmlns="http://www.w3.org/2000/svg"
          style="display: block; width: 60%; height: auto;"
        >
          <g>
            <defs>
              <path
                id="path-170992886452672"
                d="M27.01208,11.03846c0.00035,0.79686 -0.15368,1.50533 -0.46211,2.12542c-0.3006,0.6103 -0.728,1.14357 -1.25128,1.56124c-0.55113,0.43393 -1.17542,0.75709 -1.84076,0.95286c-0.72479,0.21751 -1.47586,0.32591 -2.23027,0.3219c-1.15045,0.00051 -2.19562,-0.14271 -3.13551,-0.42966c-0.9401,-0.28678 -1.78902,-0.8352 -2.54674,-1.64526l2.35566,-2.47613c0.39275,0.41251 0.89791,0.6996 1.51547,0.8613c0.59818,0.15937 1.21314,0.24071 1.83067,0.24214c1.43087,-0.00066 2.14611,-0.47242 2.14573,-1.41529c-0.00014,-0.39777 -0.09848,-0.70711 -0.29502,-0.92801c-0.21056,-0.22088 -0.54027,-0.36065 -0.98914,-0.41932l-1.80972,-0.26435c-1.333,-0.20556 -2.33618,-0.66921 -3.00956,-1.39095c-0.68791,-0.73623 -1.03205,-1.78945 -1.0324,-3.15966c-0.00775,-0.68306 0.12093,-1.36037 0.37793,-1.98914c0.248,-0.59807 0.61742,-1.13343 1.08299,-1.56945c0.4999,-0.4606 1.08261,-0.81387 1.71453,-1.03944c0.67317,-0.25071 1.43762,-0.37627 2.29335,-0.37666c1.08017,-0.00051 2.03067,0.14178 2.8515,0.42687c0.83179,0.29241 1.58537,0.78471 2.19943,1.43684l-2.31367,2.42218c-0.21725,-0.23437 -0.4741,-0.42526 -0.75777,-0.56315c-0.2499,-0.11908 -0.51079,-0.2115 -0.77866,-0.27586c-0.23463,-0.05652 -0.47452,-0.08607 -0.71536,-0.08812c-0.22474,0.00007 -0.42114,0.00017 -0.5892,0.00029c-0.27902,-0.00719 -0.55699,0.03799 -0.82057,0.13335c-0.20516,0.07642 -0.39439,0.19284 -0.55751,0.34301c-0.13952,0.12905 -0.25069,0.28776 -0.326,0.46536c-0.06894,0.16401 -0.10466,0.34101 -0.10493,0.51997c0.00305,0.12081 0.02439,0.24038 0.06322,0.3543c0.04785,0.1425 0.12717,0.27137 0.23159,0.37629c0.11488,0.11602 0.24622,0.21304 0.38943,0.28766c0.20148,0.09991 0.41917,0.15981 0.64184,0.1766l1.80964,0.26501c1.3186,0.19133 2.30076,0.62622 2.94648,1.30467c0.4048,0.40974 0.70199,0.92023 0.86333,1.48295c0.17718,0.64024 0.26256,1.30412 0.25339,1.97023zM30.61479,15.83281l-0.00021,-15.75232h10.18428l0.00028,3.48844l-6.50071,0.00015l0.00021,2.62986l5.55602,0.00007v3.44717l-5.55602,0.00007v2.76233l6.5005,0.00022v3.42401zM53.08202,15.83281l-4.80086,-7.91325v7.91325h-3.6859l0.00021,-15.75232h3.21934l4.79747,7.92557l0.00014,-7.92557h3.68244l-0.00022,15.75232zM66.99468,3.54724v12.28557h-3.68237l-0.00007,-12.28557l-3.68378,0.00015l0.00007,-3.46689h11.04698v3.46674zM74.00929,15.83281l-0.00007,-15.75232h3.68244v15.75232zM89.49041,15.83281l-2.65371,-5.8585l-1.23879,0.00051l-0.00014,5.85798h-3.68879l-0.00028,-15.75232h5.93388c0.75469,-0.01035 1.50332,0.14116 2.19908,0.44505c0.60464,0.2632 1.1522,0.64996 1.61016,1.1373c0.42929,0.46224 0.76256,1.01122 0.97912,1.61285c0.21702,0.60055 0.3278,1.2369 0.32699,1.87838c0.0053,0.49468 -0.0655,0.98706 -0.20972,1.45854c-0.12837,0.41721 -0.3162,0.81209 -0.55723,1.17146c-0.22172,0.32845 -0.4873,0.62245 -0.78875,0.87317c-0.27585,0.23058 -0.57161,0.43419 -0.88351,0.60824l3.24333,6.56731zM89.27555,5.16288c0.00046,-0.41067 -0.15028,-0.80598 -0.42132,-1.1049c-0.28085,-0.32373 -0.67369,-0.48559 -1.17853,-0.48559l-2.07779,0.00088v3.18238l2.07905,-0.00088c0.50516,-0.00029 0.89791,-0.16255 1.17825,-0.48677c0.27085,-0.29906 0.42126,-0.69449 0.42034,-1.10512zM96.8222,15.83281l-0.00655,-15.75232h10.18428l0.00007,3.45883l-6.5005,-0.00007v2.62978l5.55623,-0.00015l-0.00022,3.44776l-5.55602,-0.00015v2.76225l6.5005,-0.00007v3.45414zM10.98051,1.93109c-1.40321,-1.86789 -3.77918,-1.8503 -3.77918,-1.8503h-2.38071c0,0 -2.37598,-0.01759 -3.77918,1.8503c-0.85599,1.13943 -1.04143,2.23033 -1.04143,2.98848v6.0749c0,0.75815 0.18544,1.84898 1.04143,2.98841c1.40321,1.86789 3.77918,1.85037 3.77918,1.85037h2.38071l4.82062,-0.00037v-3.50699h-6.47933c0,0 -0.94674,0.00696 -1.50587,-0.73733c-0.26476,-0.33627 -0.41116,-0.75633 -0.41498,-1.19074v-0.70955h8.40018v-4.7687c0,-0.75815 -0.18544,-1.84905 -1.04143,-2.98848zM3.61604,5.29982c0.00382,-0.43442 0.15021,-0.85448 0.41498,-1.19074c0.55914,-0.7443 1.50587,-0.73733 1.50587,-0.73733l0.4739,-0.00015h0.00035l0.47397,0.00015c0,0 0.94667,-0.00696 1.5058,0.73733c0.26473,0.33628 0.41112,0.75633 0.41498,1.19074v0.92588h-4.78985z"
              />
            </defs>
            <path
              d="M27.01208,11.03846c0.00035,0.79686 -0.15368,1.50533 -0.46211,2.12542c-0.3006,0.6103 -0.728,1.14357 -1.25128,1.56124c-0.55113,0.43393 -1.17542,0.75709 -1.84076,0.95286c-0.72479,0.21751 -1.47586,0.32591 -2.23027,0.3219c-1.15045,0.00051 -2.19562,-0.14271 -3.13551,-0.42966c-0.9401,-0.28678 -1.78902,-0.8352 -2.54674,-1.64526l2.35566,-2.47613c0.39275,0.41251 0.89791,0.6996 1.51547,0.8613c0.59818,0.15937 1.21314,0.24071 1.83067,0.24214c1.43087,-0.00066 2.14611,-0.47242 2.14573,-1.41529c-0.00014,-0.39777 -0.09848,-0.70711 -0.29502,-0.92801c-0.21056,-0.22088 -0.54027,-0.36065 -0.98914,-0.41932l-1.80972,-0.26435c-1.333,-0.20556 -2.33618,-0.66921 -3.00956,-1.39095c-0.68791,-0.73623 -1.03205,-1.78945 -1.0324,-3.15966c-0.00775,-0.68306 0.12093,-1.36037 0.37793,-1.98914c0.248,-0.59807 0.61742,-1.13343 1.08299,-1.56945c0.4999,-0.4606 1.08261,-0.81387 1.71453,-1.03944c0.67317,-0.25071 1.43762,-0.37627 2.29335,-0.37666c1.08017,-0.00051 2.03067,0.14178 2.8515,0.42687c0.83179,0.29241 1.58537,0.78471 2.19943,1.43684l-2.31367,2.42218c-0.21725,-0.23437 -0.4741,-0.42526 -0.75777,-0.56315c-0.2499,-0.11908 -0.51079,-0.2115 -0.77866,-0.27586c-0.23463,-0.05652 -0.47452,-0.08607 -0.71536,-0.08812c-0.22474,0.00007 -0.42114,0.00017 -0.5892,0.00029c-0.27902,-0.00719 -0.55699,0.03799 -0.82057,0.13335c-0.20516,0.07642 -0.39439,0.19284 -0.55751,0.34301c-0.13952,0.12905 -0.25069,0.28776 -0.326,0.46536c-0.06894,0.16401 -0.10466,0.34101 -0.10493,0.51997c0.00305,0.12081 0.02439,0.24038 0.06322,0.3543c0.04785,0.1425 0.12717,0.27137 0.23159,0.37629c0.11488,0.11602 0.24622,0.21304 0.38943,0.28766c0.20148,0.09991 0.41917,0.15981 0.64184,0.1766l1.80964,0.26501c1.3186,0.19133 2.30076,0.62622 2.94648,1.30467c0.4048,0.40974 0.70199,0.92023 0.86333,1.48295c0.17718,0.64024 0.26256,1.30412 0.25339,1.97023zM30.61479,15.83281l-0.00021,-15.75232h10.18428l0.00028,3.48844l-6.50071,0.00015l0.00021,2.62986l5.55602,0.00007v3.44717l-5.55602,0.00007v2.76233l6.5005,0.00022v3.42401zM53.08202,15.83281l-4.80086,-7.91325v7.91325h-3.6859l0.00021,-15.75232h3.21934l4.79747,7.92557l0.00014,-7.92557h3.68244l-0.00022,15.75232zM66.99468,3.54724v12.28557h-3.68237l-0.00007,-12.28557l-3.68378,0.00015l0.00007,-3.46689h11.04698v3.46674zM74.00929,15.83281l-0.00007,-15.75232h3.68244v15.75232zM89.49041,15.83281l-2.65371,-5.8585l-1.23879,0.00051l-0.00014,5.85798h-3.68879l-0.00028,-15.75232h5.93388c0.75469,-0.01035 1.50332,0.14116 2.19908,0.44505c0.60464,0.2632 1.1522,0.64996 1.61016,1.1373c0.42929,0.46224 0.76256,1.01122 0.97912,1.61285c0.21702,0.60055 0.3278,1.2369 0.32699,1.87838c0.0053,0.49468 -0.0655,0.98706 -0.20972,1.45854c-0.12837,0.41721 -0.3162,0.81209 -0.55723,1.17146c-0.22172,0.32845 -0.4873,0.62245 -0.78875,0.87317c-0.27585,0.23058 -0.57161,0.43419 -0.88351,0.60824l3.24333,6.56731zM89.27555,5.16288c0.00046,-0.41067 -0.15028,-0.80598 -0.42132,-1.1049c-0.28085,-0.32373 -0.67369,-0.48559 -1.17853,-0.48559l-2.07779,0.00088v3.18238l2.07905,-0.00088c0.50516,-0.00029 0.89791,-0.16255 1.17825,-0.48677c0.27085,-0.29906 0.42126,-0.69449 0.42034,-1.10512zM96.8222,15.83281l-0.00655,-15.75232h10.18428l0.00007,3.45883l-6.5005,-0.00007v2.62978l5.55623,-0.00015l-0.00022,3.44776l-5.55602,-0.00015v2.76225l6.5005,-0.00007v3.45414zM10.98051,1.93109c-1.40321,-1.86789 -3.77918,-1.8503 -3.77918,-1.8503h-2.38071c0,0 -2.37598,-0.01759 -3.77918,1.8503c-0.85599,1.13943 -1.04143,2.23033 -1.04143,2.98848v6.0749c0,0.75815 0.18544,1.84898 1.04143,2.98841c1.40321,1.86789 3.77918,1.85037 3.77918,1.85037h2.38071l4.82062,-0.00037v-3.50699h-6.47933c0,0 -0.94674,0.00696 -1.50587,-0.73733c-0.26476,-0.33627 -0.41116,-0.75633 -0.41498,-1.19074v-0.70955h8.40018v-4.7687c0,-0.75815 -0.18544,-1.84905 -1.04143,-2.98848zM3.61604,5.29982c0.00382,-0.43442 0.15021,-0.85448 0.41498,-1.19074c0.55914,-0.7443 1.50587,-0.73733 1.50587,-0.73733l0.4739,-0.00015h0.00035l0.47397,0.00015c0,0 0.94667,-0.00696 1.5058,0.73733c0.26473,0.33628 0.41112,0.75633 0.41498,1.19074v0.92588h-4.78985z"
              style="stroke-width: 0; stroke-linecap: butt; stroke-linejoin: miter; fill: currentColor;"
              transform="translate(-0.000009999999999621423, 0.000001366071430197735) rotate(0)"
            />
          </g>
        </svg>
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
          :class="`severity-${event.severity}`"
        >
          {{ event.type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { nextTick, onMounted, ref } from 'vue'

  const sources = ['Endpoint', 'Network', 'Log', 'Cloud']
  const events = ref([
    { type: 'Malware', severity: 'critical' },
    { type: 'Phishing', severity: 'high' },
    { type: 'Ransomware', severity: 'critical' },
    { type: 'Data Leak', severity: 'medium' },
    { type: 'Suspicious Activity', severity: 'low' }
  ])

  const svgEl = ref(null)
  const processorEl = ref(null)
  const outputListEl = ref(null)
  let sourcePaths = []
  let outputPath = null
  const dotPool = []
  const maxDots = 30

  const eventTypes = [
    { type: 'Malware', severity: 'critical' },
    { type: 'Phishing', severity: 'high' },
    { type: 'Ransomware', severity: 'critical' },
    { type: 'Data Leak', severity: 'medium' },
    { type: 'Suspicious Activity', severity: 'low' }
  ]

  const getRelativePosition = (el, align = 'center') => {
    const rect = el.getBoundingClientRect()
    const svgRect = svgEl.value.getBoundingClientRect()

    return {
      x: align === 'right' ? rect.right - svgRect.left
        : align === 'left' ? rect.left - svgRect.left
          : rect.left - svgRect.left + rect.width / 2,
      y: rect.top - svgRect.top + rect.height / 2
    }
  }

  const setupPaths = () => {
    const sourceElements = document.querySelectorAll('.source')

    sourcePaths = sources.map((_, index) => {
      const color = `hsl(${index * 90}, 40%, 50%)`
      return createCurvedPath(
        getRelativePosition(sourceElements[index], 'right'),
        getRelativePosition(processorEl.value),
        color
      )
    })

    outputPath = createCurvedPath(
      getRelativePosition(processorEl.value),
      getRelativePosition(outputListEl.value, 'left'),
      'orange'
    )

    for (let i = 0; i < maxDots; i++) {
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      dot.setAttribute('r', '4')
      dot.setAttribute('fill', 'white')
      dot.setAttribute('cx', '-10')
      dot.setAttribute('cy', '-10')
      svgEl.value.appendChild(dot)
      dotPool.push({ dot, active: false })
    }
  }

  const createCurvedPath = (start, end, color, existingPath = null) => {
    if (existingPath) return existingPath

    const curveStrength = Math.abs(end.x - start.x) * 0.6

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

  const getAvailableDot = () => dotPool.find(dotObj => !dotObj.active)

  const animateDot = (path, speed = 0.02, onComplete) => {
    const dotObj = getAvailableDot()
    if (!dotObj) return

    const dot = dotObj.dot
    dotObj.active = true

    let progress = 0
    function moveDot() {
      progress += speed
      if (progress > 1) {
        dotObj.active = false
        onComplete?.()
        return
      }
      const point = path.getPointAtLength(progress * path.getTotalLength())
      dot.setAttribute('cx', point.x)
      dot.setAttribute('cy', point.y)
      requestAnimationFrame(moveDot)
    }
    moveDot()
  }

  const spawnInputDot = () => {
    const index = Math.floor(Math.random() * sources.length)
    const path = sourcePaths[index]
    animateDot(path, 0.02, () => {
      if (Math.random() < 0.1) spawnOutputDot()
    })
  }

  const spawnOutputDot = () => {
    console.log('Sending output dot')

    outputPath = createCurvedPath(
      getRelativePosition(processorEl.value),
      getRelativePosition(outputListEl.value, 'left'),
      'white',
      outputPath
    )

    animateDot(outputPath, 0.005, () => {
      console.log('Output dot reached end, adding event')
      addOutputEvent()
    })
  }

  const addOutputEvent = () => {
    const event = eventTypes[Math.floor(Math.random() * eventTypes.length)]
    events.value.push(event)

    if (events.value.length > 20) {
      events.value.shift()
    }
  }

  onMounted(async () => {
    await nextTick()
    setupPaths()

    setInterval(spawnInputDot, 150)
    setInterval(() => {
      if (Math.random() < 0.2) spawnOutputDot()
    }, 3000)
  })
</script>

<style lang="scss" scoped>
  .xdr-flow {
    --color-severity--low-border: hsl(120, 6%, 43%);
    --color-severity--medium-border: hsl(60, 40%, 45%);
    --color-severity--high-border: hsl(31, 40%, 50%);
    --color-severity--critical-border: hsl(341, 40%, 50%);
    position: relative;
    display: flex;
    width: 100%;
    max-width: 800px;
    height: 400px;
    gap: 20px;
    user-select: none;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 50%;
      background: conic-gradient(rgba(93, 133, 225, 0.99) 0deg,
          rgba(195, 20, 222, 0.99) 69deg,
          rgba(228, 68, 103, 0.99) 150deg,
          rgba(250, 129, 54, 0.99) 221deg,
          rgba(240, 30, 27, 0.99) 287deg,
          rgba(130, 150, 18, 0.99) 360deg);
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.2;
      transform-origin: center center;
      transform: translate(calc(100px - 100vh), 0px) rotate(90deg);
    }
  }

  svg#flow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .sources {
    display: flex;
    flex-direction: column;
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
    gap: 0.5rem;
    width: 120px;
    height: 120px;
    background: linear-gradient(165deg, #f4eab8 0%, #f7d64a 40%, #e4b91d 50%, #f7d64a 75%, #f6e27f 100%);
    color: #333;
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.3);
    border: 1px solid #e0b622;
    border-radius: var(--border-radius--large);
    box-shadow: var(--box-shadow--tooltip);
  }

  .output-container {
    display: flex;
    flex-direction: column;
    flex: 0 1 187px;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    // background: var(--interface-foreground);
    padding-inline: 2rem;
    border-left: 0.1rem solid var(--border-color);
    // border-radius: var(--border-radius--large);
    // box-shadow: var(--box-shadow--tooltip);
    // overflow: hidden;
  }

  .source {
    border: 0.1rem solid var(--border-color);
  }

  .source {
    align-self: flex-end;
    text-align: right;
    // box-shadow: var(--box-shadow--tooltip);
    padding: 0.8rem 1.2rem;
    background: var(--interface-foreground);
    position: relative;
    border-radius: 6px;
  }

  .output-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    transition: transform 0.5s ease;
    // padding-bottom: calc(50% + 9.2px);
  }

  .output-item {
    background: var(--interface-bg);
    border: 0.1rem solid var(--border-color);
    color: var(--text-color--loud);
    opacity: 0.75;
    padding: 0.8rem 1.2rem;
    border-radius: 20px;
  }

  .severity-low {
    border-color: var(--color-severity--low-border);
  }

  .severity-medium {
    border-color: var(--color-severity--medium-border);
  }

  .severity-high {
    border-color: var(--color-severity--high-border);
  }

  .severity-critical {
    border-color: var(--color-severity--critical-border);
  }
</style>