<template>
  <svg
    x="0px"
    y="0px"
    width="160.7px"
    height="215.87px"
    viewBox="0 0 160.7 215.87"
  >
    <path
      class="shadow"
      d="m78.95,214.37L1.5,195.34l46.81-26.1,94.12,26.88-63.47,18.25ZM112.03,52.88l-3.65,25.81,23.54,9.59,23.88-16.21-43.77-19.19Zm-12.77,90.43l13.23,4.38,34.69-17.48-43.82-16-4.1,29.1Z"
    />
    <polygon
      class="highlight"
      points="48.31 169.24 77.31 1.5 28.45 61.12 1.5 195.34 48.31 169.24"
    />
    <polygon
      class="face"
      points="112.03 52.88 108.38 78.68 150.93 96.02 147.19 130.2 103.37 114.2 99.26 143.3 146.44 158.91 142.43 196.12 48.31 169.24 77.31 1.5 159.2 40.63 155.8 72.06 112.03 52.88"
    />
  </svg>
</template>

<script>
  export default {
    name: 'EpicenterLogo',
    props: {
      strokeWidth: {
        type: Number,
        default: 3
      },
      strokeColor: {
        type: String,
        default: 'var(--logo-white)'
      },
      faceColor: {
        type: String,
        default: 'var(--logo-gold)'
      },
      highlightColor: {
        type: String,
        default: 'var(--logo-yellow)'
      },
      shadowColor: {
        type: String,
        default: 'var(--logo-gray)'
      }
    }
  }
</script>

<style lang="scss" scoped>
  svg {
    display: block;
    // scales with container
    width: 100%;
    height: 100%;
  }

  polygon,
  path {
    stroke: v-bind(strokeColor);
    stroke-width: v-bind(strokeWidth);
    stroke-linejoin: round;
    stroke-miterlimit: 5;
  }

  .shadow {
    fill: v-bind(shadowColor);
  }

  .highlight {
    fill: v-bind(highlightColor);
  }

  .face {
    fill: v-bind(faceColor);
}</style>
