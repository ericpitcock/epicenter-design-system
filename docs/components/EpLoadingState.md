# EpLoadingState



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `message` | Message object containing icon and message text to display while loading. | `object` | `{
  icon: '',
  message: ''
}` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<template>
  <div class="ep-loading">
    <div class="ep-loading__icon-container">
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentcolor"
      >
        <g
          fill="none"
          fill-rule="evenodd"
        >
          <g
            transform="translate(1 1)"
            stroke-width="2"
          >
            <circle
              stroke-opacity=".5"
              cx="18"
              cy="18"
              r="18"
            />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </g>
      </svg>
    </div>
    <div class="ep-loading__message-container">
      <p>{{ message.message }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    /**
     * Message object containing icon and message text to display while loading.
     */
    message: {
      type: Object,
      default: () => ({
        icon: '',
        message: ''
      })
    },
  })
</script>
```

## Styles (SCSS)

```scss
.ep-loading {
  --ep-loading-state-bg-color: var(--interface-surface);
  --ep-loading-state-border-radius: var(--border-radius--large);
  --ep-loading-state-top: 0;
  --ep-loading-state-right: 0;
  --ep-loading-state-bottom: 0;
  --ep-loading-state-left: 0;
  position: absolute;
  z-index: var(--z-index--modal);
  top: var(--ep-loading-state-top);
  right: var(--ep-loading-state-right);
  bottom: var(--ep-loading-state-bottom);
  left: var(--ep-loading-state-left);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--ep-loading-state-border-radius);
  backdrop-filter: blur(4px);
  background: var(--ep-loading-state-bg-color);
  gap: 2rem;

  &__icon-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    align-items: flex-end;
    justify-content: center;

    img {
      width: 100%;
      height: 40px;
    }
  }

  &__message-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    align-items: flex-start;
    justify-content: center;
  }
}
```