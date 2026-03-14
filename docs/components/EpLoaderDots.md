# EpLoaderDots




::: info
This component does not use props, events, slots.
:::

## Component Code

```vue
<template>
  <svg
    class="ep-loader ep-loader--dots"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <circle
      cx="25"
      cy="5"
      r="4"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="1;0.75;0.5;0.25;0.125;0.125;0.125;0.125;1"
        dur="1.2s"
        begin="0s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="39.1"
      cy="10.9"
      r="4"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="1;0.75;0.5;0.25;0.125;0.125;0.125;0.125;1"
        dur="1.2s"
        begin="-1.05s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="45"
      cy="25"
      r="4"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="1;0.75;0.5;0.25;0.125;0.125;0.125;0.125;1"
        dur="1.2s"
        begin="-0.9s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="39.1"
      cy="39.1"
      r="4"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="1;0.75;0.5;0.25;0.125;0.125;0.125;0.125;1"
        dur="1.2s"
        begin="-0.75s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="25"
      cy="45"
      r="4"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="1;0.75;0.5;0.25;0.125;0.125;0.125;0.125;1"
        dur="1.2s"
        begin="-0.6s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="10.9"
      cy="39.1"
      r="4"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="1;0.75;0.5;0.25;0.125;0.125;0.125;0.125;1"
        dur="1.2s"
        begin="-0.45s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="5"
      cy="25"
      r="4"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="1;0.75;0.5;0.25;0.125;0.125;0.125;0.125;1"
        dur="1.2s"
        begin="-0.3s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="10.9"
      cy="10.9"
      r="4"
      fill="currentColor"
    >
      <animate
        attributeName="opacity"
        values="1;0.75;0.5;0.25;0.125;0.125;0.125;0.125;1"
        dur="1.2s"
        begin="-0.15s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>

```