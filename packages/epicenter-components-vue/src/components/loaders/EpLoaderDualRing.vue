<template>
  <svg
    class="ep-loader ep-loader--dual-ring"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <circle
      cx="25"
      cy="25"
      r="20"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-dasharray="31.4 31.4"
      opacity="0.3"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>
    <circle
      cx="25"
      cy="25"
      r="12"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-dasharray="18.85 18.85"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="360 25 25"
        to="0 25 25"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>
