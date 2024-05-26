const centeredBg = () => {
  return {
    template: `
      <div class="decorator decorator--centered decorator--bg">
        <story />
      </div>
    `
  }
}

const centeredSurface = () => {
  return {
    template: `
      <div class="decorator decorator--centered decorator--surface">
        <story />
      </div>
    `
  }
}

const centeredCyanBlueGradient = () => {
  return {
    template: `
      <div class="decorator decorator--centered decorator--gradient-bg">
        <story />
      </div>
    `
  }
}

const paddedBg = () => {
  return {
    template: `
      <div class="decorator decorator--padded decorator--bg">
        <story />
      </div>
    `
  }
}

const paddedSurface = () => {
  return {
    template: `
      <div class="decorator decorator--padded decorator--surface">
        <story />
      </div>
    `
  }
}

const paddedSurfaceOverflow = () => {
  return {
    template: `
      <div class="decorator decorator--padded decorator--surface decorator--overflow">
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
  paddedSurfaceOverflow,
}
