<template>
  <div class="login">
    <div class="login__container">
      <div class="login__container__header">
        <h1 class="login__container__header__title">Login</h1>
        <p class="login__container__header__subtitle">Please login to your account</p>
      </div>
      <div class="login__container__form">
        <form @submit.prevent="login">
          <div class="login__container__form__input">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="login__container__form__input">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div class="login__container__form__input">
            <button type="submit" class="login__container__form__input__button">
              Login
            </button>
          </div>
        </form>
      </div>
      <div class="login__container__footer">
        <p class="login__container__footer__text">
          Don't have an account? <router-link to="/register">Register</router-link>
        </p>
        <p class="login__container__footer__text">
          <router-link to="/forgot-password">Forgot password?</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-background);
  .login__container {
    width: 400px;
    background-color: var(--color-white);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    .login__container__header {
      text-align: center;
      .login__container__header__title {
        font-size: 2rem;
        font-weight: 600;
        color: var(--color-primary);
      }
      .login__container__header__subtitle {
        font-size: 1rem;
        color: var(--color-text);
      }
    }
    .login__container__form {
      margin-top: 30px;
      .login__container__form__input {
        margin-bottom: 20px;
        label {
          display: block;
          font-size: 1rem;
          color: var(--color-text);
        }
        input {
          width: 100%;
          padding: 10px;
          border: 1px solid var(--color-border);
          border-radius: 5px;
          outline: none;
          &:focus {
            border-color: var(--color-primary);
          }
        }
      }
      .login__container__form__input__button {
        width: 100%;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: var(--color-primary);
        color: var(--color-white);
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          background-color: var(--color-primary-dark);
        }
      }
    }
    .login__container__footer {
      margin-top: 30px;
      text-align: center;
      .login__container__footer__text {
        font-size: 1rem;
        color: var(--color-text);
        a {
          color: var(--color-primary);
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>