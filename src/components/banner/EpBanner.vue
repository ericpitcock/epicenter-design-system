<template>
  <div class="ep-banner">
    <div class="ep-banner__color-strip"></div>
    <div class="ep-banner__body">
      <div v-if="iconProps.name" class="ep-banner__body__icon">
        <ep-icon v-bind="iconProps" />
      </div>
      <div class="ep-banner__body__message">
        <p class="ep-banner__body__message__text font-size--small">{{ message }}</p>
        <p v-if="subtext" class="ep-banner__body__message__subtext">{{ subtext }}</p>
      </div>
      <div v-if="dissmissable" class="dismiss-button">
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
  import EpIcon from '@/components/icon/EpIcon'

  export default {
    name: 'EpBanner',
    emits: ['dismiss'],
    props: {
      bannerStyle: {
        type: String,
        default: 'info' // info, success, warning, error
      },
      dissmissable: {
        type: Boolean,
        default: false
      },
      iconProps: {
        type: Object,
        default: () => ({})
      },
      message: {
        type: String,
        required: true
      },
      subtext: {
        type: String,
        default: ''
      },
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
      EpIcon
    },
    computed: {
      colorStrip() {
        return this.colors[this.bannerStyle]
      }
    },
    methods: {
      dismissNotification() {
        this.$emit('dismiss')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-banner {
    display: flex;
    width: 100%;
    max-width: 60rem;
    &__color-strip {
      width: .5rem;
      border-radius: var(--border-radius) 0 0 var(--border-radius);
      background: v-bind(colorStrip);
    }
    &__body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.5rem;
      width: 100%;
      height: 100%;
      background-color: var(--background-4);
      padding: 1.2rem 2rem;
      border: 1px solid var(--border-color--lighter);
      border-left: none;
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
      &__message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .25rem;
        height: 100%;
        &__text {
          line-height: var(--text-line-height--tight);
        }
        &__subtext {
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