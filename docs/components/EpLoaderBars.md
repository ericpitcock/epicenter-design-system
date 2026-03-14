# EpLoaderBars




::: info
This component does not use props, events, slots.
:::

## Component Code

```vue
<template>
  <svg
    class="ep-loader ep-loader--bars"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="15"
      width="6"
      height="20"
      fill="currentColor"
    >
      <animate
        attributeName="height"
        values="20;35;20"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
      <animate
        attributeName="y"
        values="15;7.5;15"
        dur="1s"
        repeatCount="indefinite"
        begin="0s"
      />
    </rect>
    <rect
      x="14"
      y="15"
      width="6"
      height="20"
      fill="currentColor"
    >
      <animate
        attributeName="height"
        values="20;35;20"
        dur="1s"
        repeatCount="indefinite"
        begin="0.15s"
      />
      <animate
        attributeName="y"
        values="15;7.5;15"
        dur="1s"
        repeatCount="indefinite"
        begin="0.15s"
      />
    </rect>
    <rect
      x="25"
      y="15"
      width="6"
      height="20"
      fill="currentColor"
    >
      <animate
        attributeName="height"
        values="20;35;20"
        dur="1s"
        repeatCount="indefinite"
        begin="0.3s"
      />
      <animate
        attributeName="y"
        values="15;7.5;15"
        dur="1s"
        repeatCount="indefinite"
        begin="0.3s"
      />
    </rect>
    <rect
      x="36"
      y="15"
      width="6"
      height="20"
      fill="currentColor"
    >
      <animate
        attributeName="height"
        values="20;35;20"
        dur="1s"
        repeatCount="indefinite"
        begin="0.45s"
      />
      <animate
        attributeName="y"
        values="15;7.5;15"
        dur="1s"
        repeatCount="indefinite"
        begin="0.45s"
      />
    </rect>
  </svg>
</template>

```