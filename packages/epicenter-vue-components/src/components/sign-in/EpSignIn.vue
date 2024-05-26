<template>
  <div class="ep-sign-in">
    <ep-container
      :styles="{
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
          <ep-icon
            name="f-mail"
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
          @submit.prevent="signin"
        >
          <ep-input
            id="email"
            v-model="email"
            type="email"
            size="xlarge"
            placeholder="Email"
            background-color="var(--interface-foreground)"
            @clear="email = ''"
          />
          <ep-input
            v-if="state != 'reset'"
            id="password"
            v-model="password"
            type="password"
            size="xlarge"
            placeholder="Password"
            background-color="var(--interface-foreground)"
            :icon-right="{ name: 'f-eye' }"
            @clear="password = ''"
          />
          <ep-button
            type="submit"
            size="large"
            :label="buttonLabel"
            variant="primary"
            @click="onButtonClick"
          />
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

<script>
  import EpButton from '../button/EpButton.vue'
  import EpContainer from '../container/EpContainer.vue'
  import EpIcon from '../icon/EpIcon.vue'
  import EpInput from '../input/EpInput.vue'
  import EpLoadingState from '../loading-state/EpLoadingState.vue'
  import EpicenterLogo from '../logo/EpicenterLogo.vue'

  export default {
    name: 'EpSignIn',
    components: {
      EpButton,
      EpContainer,
      EpIcon,
      EpInput,
      EpLoadingState,
      EpicenterLogo,
    },
    data() {
      return {
        email: '',
        password: '',
        state: 'signin',
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
        return this.state === 'signin' ? 'Sign In' : 'Send Reset Email'
      },
      footerText() {
        switch (this.state) {
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
      },
    },
    methods: {
      signin() {
        console.log('signin')
      },
      onButtonClick() {
        if (this.state === 'signin') {
          console.log('signin')
          this.state = 'loading'
          setTimeout(() => {
            this.state = 'signin'
          }, 2000)
        } else {
          console.log('reset')
          this.state = 'message'
        }
      },
      onFooterClick() {
        this.state = this.state === 'signin' ? 'reset' : 'signin'
      },
      validateEmail(email) {
        const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        return emailRegex.test(email)
      }
    },
  }
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