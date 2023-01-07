<template>
  <div class="ep-notification">
    <ep-container
      :width="'30rem'"
      :padding="'2rem'"
      :backgroundColor="'var(--background-4)'"
      :borderColor="'var(--border-color--lighter)'"
    >
      <ep-button
        v-if="dismissable"
        @click="closeNotification"
        class="dismiss-button"
        kind="ghost"
        iconRight="close"
      />
      {{ message }}
    </ep-container>
  </div>
</template>

<script>
  import EpContainer from '@/atoms/container/EpContainer'
  import EpButton from '@/atoms/button/EpButton'

  export default {
    name: 'EpNotification',
    props: {
      message: {
        type: String,
        required: true
      },
      dismissable: {
        type: Boolean,
        default: false
      }
    },
    components: {
      EpContainer,
      EpButton
    },
    methods: {
      closeNotification() {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-notification {
    position: absolute;
    top: 2rem;
    right: 2rem;
    .dismiss-button {
      position: absolute;
      top: .5rem;
      right: .5rem;
    }
  }
</style>