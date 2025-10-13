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

const surfaceOverflow = () => {
  return {
    template: `
      <div class="decorator decorator--surface decorator--overflow">
        <story />
      </div>
    `
  }
}

const surface = () => {
  return {
    template: `
      <div class="decorator--padded decorator--surface" style="min-height: 100%;">
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

const paddedBgOverflow = () => {
  return {
    template: `
      <div class="decorator decorator--padded decorator--bg decorator--overflow">
        <story />
      </div>
    `
  }
}

export {
  centeredBg,
  centeredCyanBlueGradient,
  centeredSurface,
  paddedBg,
  paddedBgOverflow,
  paddedSurface,
  paddedSurfaceOverflow,
  surface,
  surfaceOverflow,
}
