# EpLoaderFade




::: info
This component does not use props, events, slots.
:::

## Component Code

```vue
<template>
  <svg
    class="ep-loader ep-loader--fade"
    viewBox="0 0 60 20"
    aria-hidden="true"
  >
    <circle
      cx="10"
      cy="10"
      r="5"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="0.2;1;0.2"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0s"
      />
    </circle>
    <circle
      cx="30"
      cy="10"
      r="5"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="0.2;1;0.2"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.4s"
      />
    </circle>
    <circle
      cx="50"
      cy="10"
      r="5"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="0.2;1;0.2"
        dur="1.2s"
        repeatCount="indefinite"
        begin="0.8s"
      />
    </circle>
  </svg>
</template>

```