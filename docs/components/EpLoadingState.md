# EpLoadingState



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `message` | Message object containing icon and message text to display while loading. | `LoadingMessage` | `-` |


::: info
This component does not use events, slots.
:::

## Component Code

```vue
<script setup lang="ts">
  interface LoadingMessage {
    icon: string
    message: string
  }

  interface Props {
    /** Message object containing icon and message text to display while loading. */
    message?: LoadingMessage
  }

  const {
    message = {
      icon: '',
      message: '',
    },
  } = defineProps<Props>()

  defineOptions({ name: 'EpLoadingState' })
</script>

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
```

## Styles (SCSS)

```scss
// The component is EpLoadingState but the class it renders is .ep-loading, so
// the block is declared explicitly rather than inferred from the filename.
// @block loading
// @root .ep-loading
.ep-loading {
  --ep-loading-top: 0;
  --ep-loading-right: 0;
  --ep-loading-bottom: 0;
  --ep-loading-left: 0;
  --ep-loading-gap: var(--space--5);
  --ep-loading-z-index: var(--z-index--modal);
  --ep-loading-bg-color: var(--interface-surface);
  --ep-loading-backdrop-filter: blur(0.4rem);
  --ep-loading-border-radius: var(--border-radius--large);
  --ep-loading-icon-height: 4rem;

  position: absolute;
  z-index: var(--ep-loading-z-index);
  top: var(--ep-loading-top);
  right: var(--ep-loading-right);
  bottom: var(--ep-loading-bottom);
  left: var(--ep-loading-left);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--ep-loading-border-radius);
  backdrop-filter: var(--ep-loading-backdrop-filter);
  background: var(--ep-loading-bg-color);
  gap: var(--ep-loading-gap);

  &__icon-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1;
    align-items: flex-end;
    justify-content: center;

    img {
      width: 100%;
      height: var(--ep-loading-icon-height);
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