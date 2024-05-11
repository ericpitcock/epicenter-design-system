const centeredBg = () => {
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
        background: var(--gradient-bg);"
      >
        <story />
      </div>
    `
  }
}

const paddedBg = () => {
  return {
    template: `
      <div style="
        height: 100%;
        padding: 30px;"
        background-color: var(--interface-bg);"
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

export {
  centeredBg,
  centeredSurface,
  centeredCyanBlueGradient,
  paddedBg,
  paddedSurface,
}