# EpLoaderSpin




::: info
This component does not use props, events, slots.
:::

## Component Code

```vue
<template>
  <svg
    class="ep-loader ep-loader--spin"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linecap="round"
      stroke-dasharray="90 150"
      stroke-dashoffset="0"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>

```