# EpSignIn




::: info
This component does not use props, events, slots.
:::

## CSS Custom Properties

Set any of these with a selector that matches `.ep-sign-in` itself. The published
stylesheet is wrapped in a cascade layer, so a plain selector in your own CSS wins —
no `!important`, no `:deep()`, no need to out-specify.

Target the component's own element, not an ancestor: the component declares these
defaults on its root class, and a declaration on the element beats an inherited one.

```css
.my-app .ep-sign-in {
  --ep-sign-in-footer-border-color: /* … */;
}
```

### Border

| Property | Default | State |
|---|---|---|
| `--ep-sign-in-footer-border-color` | `var(--border-color)` | — |
| `--ep-sign-in-footer-border-style` | `solid` | — |
| `--ep-sign-in-footer-border-width` | `var(--border-width--hairline)` | — |

### Box

| Property | Default | State |
|---|---|---|
| `--ep-sign-in-footer-height` | `5.6rem` | — |

### Spacing

| Property | Default | State |
|---|---|---|
| `--ep-sign-in-footer-padding` | `var(--space--5)` | — |
| `--ep-sign-in-form-gap` | `var(--space--5)` | — |
| `--ep-sign-in-header-padding` | `6rem` | — |

## Component Code

```vue
<script setup lang="ts">
  import { computed, ref } from 'vue'

  import EpButton from '../button/EpButton.vue'
  import EpContainer from '../container/EpContainer.vue'
  import EpInput from '../input/EpInput.vue'
  import EpLoadingState from '../loading-state/EpLoadingState.vue'
  import EpicenterLogo from '../logo/EpicenterLogo.vue'

  defineOptions({ name: 'EpSignIn' })

  type SignInState = 'signin' | 'loading' | 'message' | 'reset'

  interface LoadingMessage {
    icon: string
    message: string
  }

  const email = ref('')
  const password = ref('')
  const state = ref<SignInState>('signin')
  const loadingMessages = ref<LoadingMessage[]>([
    {
      icon: 'oval',
      message: 'Signing in…'
    }
  ])

  const buttonLabel = computed((): string => {
    return state.value === 'signin' ? 'Sign in' : 'Send reset email'
  })

  const footerText = computed((): string => {
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

  const signin = (): void => {
    console.log('signin')
  }

  const onButtonClick = (): void => {
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

  const onFooterClick = (): void => {
    state.value = state.value === 'signin' ? 'reset' : 'signin'
  }

  // const validateEmail = (email: string): boolean => {
  //   const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  //   return emailRegex.test(email)
  // }
</script>

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


```

## Styles (SCSS)

```scss
.ep-sign-in {
  --ep-sign-in-header-padding: 6rem;
  --ep-sign-in-form-gap: var(--space--5);
  --ep-sign-in-footer-height: 5.6rem;
  --ep-sign-in-footer-padding: var(--space--5);
  --ep-sign-in-footer-border-width: var(--border-width--hairline);
  --ep-sign-in-footer-border-style: solid;
  --ep-sign-in-footer-border-color: var(--border-color);

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--ep-sign-in-header-padding);
  }

  &__form {
    display: flex;
    flex-direction: column;

    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > * + * {
        margin-block-start: var(--ep-sign-in-form-gap);
      }
    }

    &__message {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__footer {
    display: flex;
    height: var(--ep-sign-in-footer-height);
    align-items: center;
    justify-content: center;
    padding: var(--ep-sign-in-footer-padding);
    border-top: var(--ep-sign-in-footer-border-width) var(--ep-sign-in-footer-border-style) var(--ep-sign-in-footer-border-color);
  }
}

```