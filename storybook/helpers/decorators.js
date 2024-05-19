const createContainer = (centered, overflow, backgroundColor, padding, gradientBackground) => {
  return {
    template: `
      <div style="
        ${centered ? `display: grid; place-content: center; height: 100%;` : ``}
        ${overflow ? `display: flex; flex-direction: column;` : `height: 100%;`}
        width: 100%;
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
  return createContainer(true, false, 'var(--interface-bg)', '0', '')
}

const centeredSurface = () => {
  return createContainer(true, false, 'var(--interface-surface)', '0', '')
}

const centeredCyanBlueGradient = () => {
  return createContainer(true, false, '', '0', 'var(--gradient-bg)')
}

const paddedBg = () => {
  return createContainer(false, false, 'var(--interface-bg)', '30px', '')
}

const paddedBgOverflow = () => {
  return createContainer(false, true, 'var(--interface-bg)', '30px', '')
}

const paddedSurface = () => {
  return createContainer(false, false, 'var(--interface-surface)', '30px', '')
}

const paddedSurfaceOverflow = () => {
  return createContainer(false, true, 'var(--interface-surface)', '30px', '')
}

export {
  centeredBg,
  centeredSurface,
  centeredCyanBlueGradient,
  paddedBg,
  paddedBgOverflow,
  paddedSurface,
  paddedSurfaceOverflow,
}
