<template>
  <ep-container
    width="40rem"
    content-padding="3rem"
    background-color="var(--background-1)"
    border-radius="var(--border-radius)"
    overflow="hidden"
  >
    <template #header>
      <ep-header
        height="4rem"
        padding="0 2rem"
      >
        <template #left>
          <p>Epicenter Design System Feedback</p>
        </template>
      </ep-header>
    </template>
    <template #default>
      <div class="ep-feedback-card__body__rating">
        <div
          v-for="(star, index) in stars"
          :key="index"
          class="ep-feedback-card__body__rating__star"
          :class="{
            'ep-feedback-card__body__rating__star--active': index <= rating
          }"
          @click="setRating(index)"
        >
          <ep-icon
            name="star"
            :size="24"
            weight="light"
            :class="{ 'gold': (index + 1) <= rating }"
          />
        </div>
      </div>
      <div class="ep-feedback-card__body__textarea">
        <textarea
          v-model="feedback"
          placeholder="Any additional comments?"
        />
      </div>
    </template>
    <template #footer>
      <ep-footer padding="0 3rem">
        <template #right>
          <ep-button
            variant="primary"
            label="Submit"
            :disabled="!rating"
            @click="submit"
          />
        </template>
      </ep-footer>
    </template>
  </ep-container>
</template>

<script>
  import EpContainer from '@/components/container/EpContainer.vue'
  import EpButton from '@/components/button/EpButton.vue'
  import EpFooter from '@/components/footer/EpFooter.vue'
  import EpHeader from '@/components/header/EpHeader.vue'
  import EpIcon from '@/components/icon/EpIcon.vue'

  export default {
    name: 'EpFeedbackCard',
    components: {
      EpContainer,
      EpButton,
      EpFooter,
      EpHeader,
      EpIcon
    },
    props: {
      title: {
        type: String,
        default: 'Feedback'
      },
      icon: {
        type: String,
        default: 'feedback'
      },
      iconSize: {
        type: String,
        default: 'medium'
      },
      iconColor: {
        type: String,
        default: 'var(--text-color)'
      },
      close: {
        type: Function,
        default: () => ({})
      },
      // submit: {
      //   type: Function,
      //   default: () => ({})
      // }
    },
    emits: ['submit'],
    data() {
      return {
        stars: [1, 2, 3, 4, 5],
        rating: 0,
        feedback: ''
      }
    },
    methods: {
      setRating(index) {
        this.rating = index + 1
      },
      submit() {
        this.$emit('submit')
        this.rating = 0
        this.feedback = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ep-feedback-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 500px;
    padding: 1rem;
    background-color: var(--background-color);
    border-radius: 0.5rem;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;

      &__title {
        display: flex;
        align-items: center;

        &__text {
          margin-left: 0.5rem;
          font-size: 1.25rem;
          font-weight: 500;
        }
      }

      &__close {
        cursor: pointer;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-bottom: 1rem;

      &__rating {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        &__star {
          cursor: pointer;

          &--active {
            color: var(--primary-color);
          }
        }
      }

      &__textarea {
        flex: 1;

        textarea {
          width: 100%;
          height: 10rem;
          padding: 0.5rem;
          border: 1px solid var(--border-color);
          border-radius: 0.25rem;
          resize: none;
        }
      }
    }

    &__footer {
      display: flex;
      justify-content: flex-end;
    }
  }

  :deep(.gold svg path) {
    fill: gold;
    stroke: gold;
  }
</style>