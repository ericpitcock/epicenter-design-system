<template>
  <div class="ep-sign-in">
    <ep-container
      :style="{
        '--ep-container-width': '400px',
        '--ep-container-height': '475px',
        '--ep-container-bg-color': 'var(--interface-surface)',
        '--ep-container-content-padding': '0 3rem 6rem 3rem',
      }"
      style="box-shadow: var(--drop-shadow);"
    >
      <template #header>
        <div class="ep-sign-in__header">
          <epicenter-logo style="width: 50px;" />
        </div>
      </template>
      <div class="ep-sign-in__form">
        <ep-loading-state
          v-if="state === 'loading'"
          background-color="var(--interface-surface)"
          :messages="loadingMessages"
        />
        <div
          v-if="state === 'message'"
          class="ep-sign-in__form__message copy-block"
        >
          mail icon
          <p class="text-align--center">
            Please check your email for password<br> reset instructions
          </p>
        </div>
        <form
          v-else
          @submit.prevent="signin"
        >
          <ep-input
            id="email"
            v-model="email"
            type="email"
            size="xlarge"
            placeholder="Email"
            data-1p-ignore
            @clear="email = ''"
          />
          <ep-input
            v-if="state != 'reset'"
            id="password"
            v-model="password"
            type="password"
            size="xlarge"
            placeholder="Password"
            :icon-right="{ name: 'f-eye' }"
            data-1p-ignore
            @clear="password = ''"
          />
          <ep-button
            class="ep-button-var--primary"
            type="submit"
            size="large"
            @click="onButtonClick"
          >
            {{ buttonLabel }}
          </ep-button>
        </form>
      </div>
      <template #footer>
        <div class="ep-sign-in__footer">
          <p
            class="text--link"
            @click="onFooterClick"
          >
            {{ footerText }}
          </p>
        </div>
      </template>
    </ep-container>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpContainer from '../container/EpContainer.vue'
  import EpInput from '../input/EpInput.vue'
  import EpLoadingState from '../loading-state/EpLoadingState.vue'
  import EpicenterLogo from '../logo/EpicenterLogo.vue'

  const email = ref('')
  const password = ref('')
  const state = ref('signin')
  const loadingMessages = ref([
    {
      icon: 'oval',
      message: 'Signing in…'
    }
  ])

  const buttonLabel = computed(() => {
    return state.value === 'signin' ? 'Sign in' : 'Send reset email'
  })

  const footerText = computed(() => {
    switch (state.value) {
      case 'signin':
        return 'Reset your password'
      case 'loading':
        return 'Signing in…'
      case 'message':
        return '< Back to Sign In'
      case 'reset':
        return '< Back to Sign In'
      default:
        return ''
    }
  })

  const signin = () => {
    console.log('signin')
  }

  const onButtonClick = () => {
    if (state.value === 'signin') {
      console.log('signin')
      state.value = 'loading'
      setTimeout(() => {
        state.value = 'signin'
      }, 2000)
    } else {
      console.log('reset')
      state.value = 'message'
    }
  }

  const onFooterClick = () => {
    state.value = state.value === 'signin' ? 'reset' : 'signin'
  }

  // const validateEmail = (email) => {
  //   const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  //   return emailRegex.test(email)
  // }
</script>

<style lang="scss" scoped>
  .ep-sign-in {
    &__header {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 6rem;
    }

    &__form {
      display: flex;
      flex-direction: column;

      & > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > * + * {
          margin-top: 2rem;
        }
      }

      &__message {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &__footer {
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-top: 1px solid var(--border-color);
      padding: 2rem;
    }
  }
</style>