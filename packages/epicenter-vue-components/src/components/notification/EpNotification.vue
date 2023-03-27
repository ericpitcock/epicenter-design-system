<template>
  <div class="ep-notification">
    <div
      class="ep-notification__color-strip"
      :style="colorStrip"
    />
    <div class="ep-notification__body">
      <div class="ep-notification__body__message">
        <p class="ep-notification__body__message__text font-size--small">
          {{
            message
          }}
        </p>
        <p class="ep-notification__body__message__timestamp">
          {{
            relativeTime(timestamp)
          }}
        </p>
      </div>
      <div class="dismiss-button">
        <ep-button
          class="dismiss-button"
          kind="ghost"
          :icon-right="{ name: 'close' }"
          @click="dismissNotification"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import EpButton from '../button/EpButton.vue'

  export default {
    name: 'EpNotification',
    components: {
      EpButton
    },
    props: {
      id: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      alertStyle: {
        type: String,
        default: 'info' // info, success, warning, error
      },
      timestamp: {
        type: String,
        default: new Date().toISOString()
      }
    },
    emits: ['dismiss'],
    data() {
      return {
        colors: {
          info: 'var(--color--primary)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)'
        }
      }
    },
    computed: {
      colorStrip() {
        return `background: ${this.colors[this.alertStyle]}`
      }
    },
    methods: {
      dismissNotification() {
        this.$emit('dismiss')
      },
      relativeTime(dateString) {
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
    }
  }
</script>
