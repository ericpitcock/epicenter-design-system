# EpLoaderOrbit




::: info
This component does not use props, events, slots.
:::

## Component Code

```vue
<template>
  <svg
    class="ep-loader ep-loader--orbit"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <circle
      cx="25"
      cy="25"
      r="18"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      opacity="0.2"
    />
    <circle
      cx="25"
      cy="7"
      r="4"
      fill="currentColor"
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