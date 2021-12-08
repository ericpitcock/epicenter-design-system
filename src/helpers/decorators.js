const centered = () => {
  return {
    template: `
      <div style="
        display: grid;
        place-content: center;
        width: 100vw;
        height: 100vh;"
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
        width: 100vw;
        height: 100vh;"
      >
        <story />
      </div>
    `
  }
}

const padded = () => {
  return {
    template: `
      <div style="padding: 30px;">
        <story />
      </div>
    `
  }
}

export { centered, fullscreen, padded }