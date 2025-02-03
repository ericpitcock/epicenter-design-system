# EpNotification



## Props
| Name | Description | Type | Default |
|------|-------------|------|---------|
| `id` | - | `string` | `-` |
| `message` | - | `string` | `-` |
| `timestamp` | - | `string` | `-` |

## Events
| Name    | Description                 | Payload    |
|---------|-----------------------------|------------|
| `dismiss` | - | - |

## Slots
| Name | Description |
|------|-------------|
No slots available.

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
          {{ relativeTime(timestamp) }}
        </p>
      </div>
      <ep-button
        :icon-right="{ name: 'close' }"
        :style="{
          '--ep-button-bg-color': 'transparent',
          '--ep-button-border-color': 'transparent',
          '--ep-button-hover-bg-color': 'transparent',
          '--ep-button-hover-border-color': 'transparent',
          '--ep-button-active-bg-color': 'transparent',
          '--ep-button-active-border-color': 'transparent',
        }"
        @click.stop="dismissNotification"
      />
    </div>
  </div>
</template>

<script setup>
  import EpButton from '../button/EpButton.vue'

  defineOptions({
    name: 'EpNotification',
  })

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    timestamp: {
      type: String,
      required: true,
      validator: (value) => {
        // Attempt to parse the date string
        const date = new Date(value)
        // Check if the date is valid and if the value matches the ISO format
        return !isNaN(date.getTime()) && value === date.toISOString()
      }
    },
  })

  const emit = defineEmits(['dismiss'])

  const dismissNotification = () => {
    emit('dismiss')
  }

  const relativeTime = (dateString) => {
    var units = {
      year: 24 * 60 * 60 * 1000 * 365,
      month: 24 * 60 * 60 * 1000 * 365 / 12,
      day: 24 * 60 * 60 * 1000,
      hour: 60 * 60 * 1000,
      minute: 60 * 1000,
      second: 1000
    }

    var rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

    var getRelativeTime = (d1, d2 = new Date()) => {
      var elapsed = d1 - d2

      // "Math.abs" accounts for both "past" & "future" scenarios
      for (var u in units) {
        if (Math.abs(elapsed) > units[u] || u === 'second') {
          return rtf.format(Math.round(elapsed / units[u]), u)
        }
      }
    }

    const date = new Date(Date.parse(dateString))

    return getRelativeTime(date)
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