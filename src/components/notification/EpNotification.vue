<template>
  <div class="ep-notification">
    <div class="ep-notification__color-strip"></div>
    <div class="ep-notification__body">
      <div class="ep-notification__body__message">
        <p class="ep-notification__body__message__text font-size--small">{{ message }}</p>
        <p class="ep-notification__body__message__timestamp">{{ relativeTime(timestamp) }}</p>
      </div>
      <div class="dismiss-button">
        <ep-button
          @click="dismissNotification"
          class="dismiss-button"
          kind="ghost"
          :iconRight="{ name: 'close' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import EpButton from '@/components/button/EpButton'
  import EpContainer from '@/components/container/EpContainer'
  import EpFlexContainer from '@/components/flexbox/EpFlexContainer'

  export default {
    name: 'EpNotification',
    emits: ['dismiss'],
    props: {
      id: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      alertstyle: {
        type: String,
        default: 'info' // info, success, warning, error
      },
      timestamp: {
      }
    },
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
    components: {
      EpButton,
      EpContainer,
      EpFlexContainer
    },
    computed: {
      colorStrip() {
        return this.colors[this.alertstyle]
      }
    },
    methods: {
      dismissNotification() {
        this.$emit('dismiss')
      },
      relativeTime(ms) {
        // in miliseconds
        var units = {
          year  : 24 * 60 * 60 * 1000 * 365,
          month : 24 * 60 * 60 * 1000 * 365/12,
          day   : 24 * 60 * 60 * 1000,
          hour  : 60 * 60 * 1000,
          minute: 60 * 1000,
          second: 1000
        }

        var rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

        var getRelativeTime = (d1, d2 = new Date()) => {
          var elapsed = d1 - d2

          // "Math.abs" accounts for both "past" & "future" scenarios
          for (var u in units) 
            if (Math.abs(elapsed) > units[u] || u == 'second') 
              return rtf.format(Math.round(elapsed/units[u]), u)
        }
        const date = new Date(ms)
        return getRelativeTime(date)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-notification {
    display: flex;
    width: 30rem;
    &__color-strip {
      width: .5rem;
      border-radius: var(--border-radius--large) 0 0 var(--border-radius--large);
      background: v-bind(colorStrip);
    }
    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      background-color: var(--background-4);
      padding: 1.2rem 2rem;
      border: 1px solid var(--border-color--lighter);
      border-left: none;
      border-radius: 0 var(--border-radius--large) var(--border-radius--large) 0;
      &__message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .5rem;
        height: 100%;
        &__text {
          line-height: var(--text-line-height--tight);
        }
        &__timestamp {
          font-size: var(--font-size--tiny);
          color: var(--text-color--subtle);
        }
      }
      .dismiss-button {
      }
    }
  }
  .notification-enter-active, .notification-leave-active {
    transition: transform .5s;
  }
  .notification-enter, .notification-leave-to {
    transform: translateY(-200%);
  }
</style>