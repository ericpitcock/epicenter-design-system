const createContainer = (centered, backgroundColor, padding, gradientBackground) => {
  return {
    template: `
      <div style="
        ${centered ? `display: grid;
        place-content: center;` : ''}
        width: 100%;
        height: 100%;
        padding: ${padding};
        background-color: ${backgroundColor};
        ${gradientBackground ? `background: ${gradientBackground};` : ''}
      ">
        <story />
      </div>
    `
  }
}

const centeredBg = () => {
  return createContainer(true, 'var(--interface-bg)', '0', '')
}

const centeredSurface = () => {
  return createContainer(true, 'var(--interface-surface)', '0', '')
}

const centeredCyanBlueGradient = () => {
  return createContainer(true, '', '0', 'var(--gradient-bg)')
}

const paddedBg = () => {
  return createContainer(false, 'var(--interface-bg)', '30px', '')
}

const paddedSurface = () => {
  return createContainer(false, 'var(--interface-surface)', '30px', '')
}

export {
  centeredBg,
  centeredSurface,
  centeredCyanBlueGradient,
  paddedBg,
  paddedSurface,
}
