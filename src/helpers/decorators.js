const centered = () => {
  return {
    template: `
      <div style="
        display: grid;
        place-content: center;
        width: 100%;
        height: 100%;"
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

export { centered, fullscreen, padded }