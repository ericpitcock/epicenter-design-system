# EpBanner



## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `dismissed` | Emitted when the banner is dismissed. | - |

## Slots
| Name | Description |
|------|-------------|
| `icon` | Icon displayed at the start of the banner |
| `message` | Main message content of the banner |
| `subtext` | Secondary message or additional information |
| `dismiss` | Dismiss button or action. Receives dismissBanner function as scoped prop. |


::: info
This component does not use props.
:::

## Component Code

```vue
<template>
  <div class="ep-banner">
    <div class="ep-banner__color-strip" />
    <div class="ep-banner__body">
      <div
        v-if="$slots.icon"
        class="ep-banner__body__icon"
      >
        <!-- @slot Icon displayed at the start of the banner -->
        <slot name="icon" />
      </div>
      <div class="ep-banner__body__message">
        <div class="ep-banner__body__message__text font-size--small">
          <!-- @slot Main message content of the banner -->
          <slot name="message" />
        </div>
        <div
          v-if="$slots.subtext"
          class="ep-banner__body__message__subtext"
        >
          <!-- @slot Secondary message or additional information -->
          <slot name="subtext" />
        </div>
      </div>
      <!-- @slot Dismiss button or action. Receives dismissBanner function as scoped prop. -->
      <slot
        name="dismiss"
        v-bind="{ dismissBanner }"
      />
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits([
    /**
     * Emitted when the banner is dismissed.
     */
    'dismissed'
  ])
  const dismissBanner = () => emit('dismissed')
</script>

```

## Styles (SCSS)

```scss
.ep-banner {
  --ep-banner-width: 100%;
  --ep-banner-color-strip-bg: var(--color--primary);
  --ep-banner-bg-color: var(--interface-overlay);
  --ep-banner-border-color: var(--border-color--lighter);
  --ep-banner-text-color: var(--text-color--loud);
  --ep-banner-subtext-color: var(--text-color);
  --ep-banner-dismiss-button-color: var(--text-color);
  --ep-banner-dismiss-button-hover-bg-color: transparent;
  --ep-banner-dismiss-button-hover-text-color: var(--text-color);
  --ep-banner-dismiss-button-active-bg-color: transparent;
  --ep-banner-dismiss-button-active-text-color: var(--text-color);
  display: flex;
  width: var(--ep-banner-width);
  min-width: 30rem;
  max-width: 60rem;

  &__color-strip {
    width: .5rem;
    background: var(--ep-banner-color-strip-bg);
    border-radius: var(--border-radius) 0 0 var(--border-radius);
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    height: 100%;
    background-color: var(--ep-banner-bg-color);
    padding: 1.2rem 2rem;
    border: 1px solid var(--ep-banner-border-color);
    border-left: none;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;

    &__icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }

    &__message {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: .25rem;
      height: 100%;

      &__text {
        line-height: var(--text-line-height--tight);
        color: var(--ep-banner-text-color);
      }

      &__subtext {
        font-size: var(--font-size--tiny);
        color: var(--ep-banner-subtext-color);
      }
    }
  }
}
```