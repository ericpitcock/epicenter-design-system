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
