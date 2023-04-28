const centered = () => {
  return {
    template: `
      <div style="
        display: grid;
        place-content: center;
        width: 100%;
        height: 100%;
        background-color: var(--interface-bg);"
      >
        <story />
      </div>
    `
  }
}

const centeredSurface = () => {
  return {
    template: `
      <div style="
        display: grid;
        place-content: center;
        width: 100%;
        height: 100%;
        background-color: var(--interface-surface);"
      >
        <story />
      </div>
    `
  }
}

const centeredCyanBlueGradient = () => {
  return {
    template: `
      <div style="
        display: grid;
        place-content: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(130deg, hsl(164 62% 56%) 0%, var(--primary-color-base);"
      >
        <story />
      </div>
    `
  }
}

const fullscreen = () => {
  return {
    template: `
      <div style="
        display: block;
        width: 100%;
        height: 100%;"
      >
        <story />
      </div>
    `
  }
}

const padded = () => {
  return {
    template: `
      <div style="
        height: 100%;
        padding: 30px;"
      >
        <story />
      </div>
    `
  }
}

const paddedSurface = () => {
  return {
    template: `
      <div style="
        height: 100%;
        padding: 30px;
        background-color: var(--interface-surface);"
      >
        <story />
      </div>
    `
  }
}

export { centered, centeredCyanBlueGradient, centeredSurface, fullscreen, padded, paddedSurface }