<template>
  <div class="ep-login">
    <ep-container
      width="400px"
      height="418px"
      content-padding="0 3rem 6rem 3rem"
      style="box-shadow: var(--drop-shadow);"
    >
      <template #header>
        <div class="ep-login__header">
          <acme-logo />
        </div>
      </template>
      <div class="ep-login__form">
        <ep-loading-state
          v-if="state === 'loading'"
          background-color="var(--background-2)"
          :messages="loadingMessages"
        />
        <div
          v-if="state === 'message'"
          class="ep-login__form__message copy-block"
        >
          <ep-icon
            name="f/mail"
            :size="60"
            weight="extra-light"
            color="var(--color--primary)"
          />
          <p class="text-align--center">
            Please check your email for password<br> reset instructions
          </p>
        </div>
        <form
          v-else
          @submit.prevent="login"
        >
          <ep-input
            id="email"
            v-model="email"
            type="email"
            size="xlarge"
            placeholder="Email"
            background-color="var(--background-1)"
            @clear="email = ''"
          />
          <ep-input
            v-if="state != 'reset'"
            id="password"
            v-model="password"
            type="password"
            size="xlarge"
            placeholder="Password"
            background-color="var(--background-1)"
            :icon-right="{ name: 'f/eye' }"
            @clear="password = ''"
          />
          <ep-button
            type="submit"
            :label="buttonLabel"
            variant="primary"
            @click="onButtonClick"
          />
        </form>
      </div>
      <template #footer>
        <div class="ep-login__footer">
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

<script>
  import EpButton from '@/components/button/EpButton.vue'
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpIcon from '@/components/icon/EpIcon.vue'
  import EpInput from '@/components/input/EpInput.vue'
  import EpLoadingState from '@/components/loading-state/EpLoadingState.vue'
  import AcmeLogo from './AcmeLogo.vue'

  export default {
    name: 'EpAcmeAssetExplorerLogin',
    components: {
      EpButton,
      EpContainer,
      EpIcon,
      EpInput,
      EpLoadingState,
      AcmeLogo
    },
    data() {
      return {
        email: '',
        password: '',
        state: 'login',
        loadingMessages: [
          {
            icon: 'oval',
            message: 'Signing in…'
          }
        ]
      }
    },
    computed: {
      buttonLabel() {
        return this.state === 'login' ? 'Sign In' : 'Send Reset Email'
      },
      footerText() {
        switch (this.state) {
          case 'login':
            return 'Reset your password'
          case 'loading':
            return ''
          case 'message':
            return '< Back to Sign In'
          case 'reset':
            return '< Back to Sign In'
          default:
            return ''
        }
      },
    },
    methods: {
      login() {
        console.log('login')
      },
      onButtonClick() {
        if (this.state === 'login') {
          console.log('login')
          this.state = 'loading'
          setTimeout(() => {
            this.state = 'login'
          }, 2000)
        } else {
          console.log('reset')
          this.state = 'message'
        }
      },
      onFooterClick() {
        this.state = this.state === 'login' ? 'reset' : 'login'
      },
      validateEmail(email) {
        const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        return emailRegex.test(email)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .ep-login {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(130deg, #47d4af 0%, var(--color--primary) 89%);

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