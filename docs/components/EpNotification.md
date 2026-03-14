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

## Component Code

```vue
<script setup lang="ts">
  import { useTimeAgo } from '@vueuse/core'

  import EpButton from '../button/EpButton.vue'

  interface EpNotificationProps {
    /** Unique identifier for the notification. */
    id: string
    /** The notification message text to display. */
    message: string
    /** ISO 8601 timestamp string for when the notification was created. */
    timestamp?: string
  }

  const {
    timestamp = new Date().toISOString(),
  } = defineProps<EpNotificationProps>()

  const emit = defineEmits<{
    dismiss: []
  }>()

  const dismissNotification = (): void => {
    emit('dismiss')
  }
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
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 0.5rem 1.2rem 2rem;
    border: 1px solid var(--border-color--lighter);
    border-radius: 0 var(--border-radius--large) var(--border-radius--large) 0;
    border-left: none;
    background-color: var(--interface-overlay);
    gap: 1rem;
  }

  &__message {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;

    &__text {
      color: var(--text-color--loud);
      line-height: var(--text-line-height--tight);
    }

    &__timestamp {
      color: var(--text-color--subtle);
      font-size: var(--font-size--tiny);
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