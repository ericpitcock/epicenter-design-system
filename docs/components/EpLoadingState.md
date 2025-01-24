# EpLoadingState



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `loading` | - | `boolean` | `true` |
| `message` | - | `object` | `{
  icon: '',
  message: ''
}` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
No events available.

## Slots
| Name | Description |
|------|-------------|
No slots available.

## Component Code

```vue
<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="ep-loading"
    >
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
  </transition>
</template>

<script setup>
  import { watch } from 'vue'

  defineOptions({
    name: 'EpLoading',
  })

  const props = defineProps({
    loading: {
      type: Boolean,
      default: true
    },
    message: {
      type: Object,
      default: () => ({ icon: '', message: '' })
    },
  })

  watch(() => props.loading, (newValue) => {
    if (!newValue) {
      // Handle any cleanup or state reset if needed
    }
  })
</script>
```


## Styles

```scss
.ep-loading {
  --ep-loading-state-bg-color: var(--interface-surface);
  --ep-loading-state-border-radius: var(--border-radius--large);
  --ep-loading-state-top: 0;
  --ep-loading-state-right: 0;
  --ep-loading-state-bottom: 0;
  --ep-loading-state-left: 0;
  position: absolute;
  top: var(--ep-loading-state-top);
  right: var(--ep-loading-state-right);
  bottom: var(--ep-loading-state-bottom);
  left: var(--ep-loading-state-left);
  z-index: var(--z-index--modal);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  background: var(--ep-loading-state-bg-color);
  border-radius: var(--ep-loading-state-border-radius);

  &__icon-container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 40px;
    }
  }

  &__message-container {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }
}
```