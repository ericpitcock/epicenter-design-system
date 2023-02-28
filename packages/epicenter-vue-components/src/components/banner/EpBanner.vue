<template>
  <div class="ep-banner">
    <div
      class="ep-banner__color-strip"
      :style="colorStrip"
    />
    <div class="ep-banner__body">
      <div
        v-if="iconProps.name"
        class="ep-banner__body__icon"
      >
        <ep-icon v-bind="iconProps" />
      </div>
      <div class="ep-banner__body__message">
        <p class="ep-banner__body__message__text font-size--small">
          {{ message }}
        </p>
        <p
          v-if="subtext"
          class="ep-banner__body__message__subtext"
        >
          {{ subtext }}
        </p>
      </div>
      <div
        v-if="dissmissable"
        class="dismiss-button"
      >
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
  import EpIcon from '../icon/EpIcon.vue'

  export default {
    name: 'EpBanner',
    components: {
      EpButton,
      EpIcon
    },
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
        return `background: ${this.colors[this.bannerStyle]}`
      }
    },
    methods: {
      dismissNotification() {
        this.$emit('dismiss')
      }
    }
  }
</script>
