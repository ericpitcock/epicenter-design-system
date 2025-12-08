# EpNotification



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `id` | Unique identifier for the notification. | `string` | `-` |
| `message` | The notification message text to display. | `string` | `-` |
| `timestamp` | ISO 8601 timestamp string for when the notification was created. | `string` | `() => new Date().toISOString()` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `dismiss` | - | - |


::: info
This component does not use slots.
:::

## Component Code

```vue
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

<script setup>
  import { useTimeAgo } from '@vueuse/core'

  import EpButton from '../button/EpButton.vue'

  defineOptions({
    name: 'EpNotification',
  })

  const props = defineProps({
    /**
     * Unique identifier for the notification.
     */
    id: {
      type: String,
      required: true
    },
    /**
     * The notification message text to display.
     */
    message: {
      type: String,
      required: true
    },
    /**
     * ISO 8601 timestamp string for when the notification was created.
     */
    timestamp: {
      type: String,
      default: () => new Date().toISOString(),
      validator: (value) => {
        const date = new Date(value)
        return !isNaN(date.getTime()) && value === date.toISOString()
      }
    },
  })

  const emit = defineEmits(['dismiss'])

  const dismissNotification = () => {
    emit('dismiss')
  }
</script>

```

## Styles (SCSS)

```scss
.ep-notification {
  --ep-notification-strip-color: var(--primary-color-base);
  display: flex;
  width: 30rem;

  &__color-strip {
    width: .5rem;
    border-radius: var(--border-radius--large) 0 0 var(--border-radius--large);
    background: var(--ep-notification-strip-color);
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    height: 100%;
    background-color: var(--interface-overlay);
    padding: 1.2rem 0.5rem 1.2rem 2rem;
    border: 1px solid var(--border-color--lighter);
    border-left: none;
    border-radius: 0 var(--border-radius--large) var(--border-radius--large) 0;
  }

  &__message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    height: 100%;

    &__text {
      line-height: var(--text-line-height--tight);
      color: var(--text-color--loud);
    }

    &__timestamp {
      font-size: var(--font-size--tiny);
      color: var(--text-color--subtle);
    }
  }
}

.notification-enter-active,
.notification-leave-active {
  transition: transform .5s;
}

.notification-enter,
.notification-leave-to {
  transform: translateY(-200%);
}
```