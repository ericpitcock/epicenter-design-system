# EpNotification



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `id` | Unique identifier for the notification. | `string` | `-` |
| `message` | The notification message text to display. | `string` | `-` |
| `timestamp` | ISO 8601 timestamp string for when the notification was created. | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `dismiss` | - | - |


::: info
This component does not use slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-notification` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-notification {
  --ep-notification-bg-color: /* … */;
}
```

### Surface

| Property | Default | State |
|---|---|---|
| `--ep-notification-bg-color` | `var(--interface-overlay)` | — |
| `--ep-notification-strip-bg-color` | `var(--primary-color-base)` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-notification-body-gap` | `1rem` | — |
| `--ep-notification-body-padding` | `1.2rem 0.5rem 1.2rem 2rem` | — |
| `--ep-notification-message-gap` | `0.5rem` | — |

### Border

| Property | Default | State |
|---|---|---|
| `--ep-notification-border-color` | `var(--border-color--lighter)` | — |
| `--ep-notification-border-radius` | `var(--border-radius--large)` | — |
| `--ep-notification-border-style` | `solid` | — |
| `--ep-notification-border-width` | `var(--border-width--hairline)` | — |

### Text

| Property | Default | State |
|---|---|---|
| `--ep-notification-line-height` | `var(--text-line-height--tight)` | — |
| `--ep-notification-text-color` | `var(--text-color--loud)` | — |
| `--ep-notification-timestamp-font-size` | `var(--font-size--tiny)` | — |
| `--ep-notification-timestamp-text-color` | `var(--text-color--subtle)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-notification-strip-width` | `0.5rem` | — |
| `--ep-notification-width` | `30rem` | — |

## Component Code

```vue
<script setup lang="ts">
  import { useTimeAgo } from '@vueuse/core'

  import EpButton from '../button/EpButton.vue'

  interface Props {
    /** Unique identifier for the notification. */
    id: string
    /** The notification message text to display. */
    message: string
    /** ISO 8601 timestamp string for when the notification was created. */
    timestamp?: string
  }

  const { timestamp = new Date().toISOString() } = defineProps<Props>()

  const emit = defineEmits<{ dismiss: [] }>()

  defineOptions({ name: 'EpNotification' })

  const dismissNotification = (): void => { emit('dismiss') }
</script>

<template>
  <div class="ep-notification">
    <div class="ep-notification__color-strip" />
    <div class="ep-notification__body">
      <div class="ep-notification__message">
        <p class="ep-notification__message__text font-size--small">
          {{ message }}
        </p>
        <p class="ep-notification__message__timestamp">
          {{ useTimeAgo(timestamp) }}
        </p>
      </div>
      <ep-button
        class="ep-button-var--ghost"
        @click.stop="dismissNotification"
      >
        <template #icon-right>
          close icon
        </template>
      </ep-button>
    </div>
  </div>
</template>

```

## Styles (SCSS)

```scss
.ep-notification {
  --ep-notification-width: 30rem;
  --ep-notification-strip-width: 0.5rem;
  --ep-notification-strip-bg-color: var(--primary-color-base);
  --ep-notification-border-radius: var(--border-radius--large);

  --ep-notification-body-padding: 1.2rem 0.5rem 1.2rem 2rem;
  --ep-notification-body-gap: 1rem;
  --ep-notification-bg-color: var(--interface-overlay);
  --ep-notification-border-width: var(--border-width--hairline);
  --ep-notification-border-style: solid;
  --ep-notification-border-color: var(--border-color--lighter);

  --ep-notification-message-gap: 0.5rem;
  --ep-notification-text-color: var(--text-color--loud);
  --ep-notification-line-height: var(--text-line-height--tight);
  --ep-notification-timestamp-text-color: var(--text-color--subtle);
  --ep-notification-timestamp-font-size: var(--font-size--tiny);

  display: flex;
  width: var(--ep-notification-width);

  &__color-strip {
    width: var(--ep-notification-strip-width);
    border-radius: var(--ep-notification-border-radius) 0 0 var(--ep-notification-border-radius);
    background: var(--ep-notification-strip-bg-color);
  }

  &__body {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: var(--ep-notification-body-padding);
    border-width: var(--ep-notification-border-width);
    border-style: var(--ep-notification-border-style);
    border-color: var(--ep-notification-border-color);
    border-radius: 0 var(--ep-notification-border-radius) var(--ep-notification-border-radius) 0;
    border-left: none;
    background-color: var(--ep-notification-bg-color);
    gap: var(--ep-notification-body-gap);
  }

  &__message {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: var(--ep-notification-message-gap);

    &__text {
      color: var(--ep-notification-text-color);
      line-height: var(--ep-notification-line-height);
    }

    &__timestamp {
      color: var(--ep-notification-timestamp-text-color);
      font-size: var(--ep-notification-timestamp-font-size);
    }
  }
}

.notification-enter-active,
.notification-leave-active {
  transition: transform var(--duration--slow);
}

.notification-enter,
.notification-leave-to {
  transform: translateY(-200%);
}

```