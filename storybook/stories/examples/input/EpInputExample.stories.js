import Login from './Login.vue';

export default {
  title: 'Components/Input/Input In Context',
  component: Login,
  parameters: {
    controls: { hideNoControlsWarning: true }
  }
};

export const InputInContext = () => ({
  components: { Login },
  template: '<login />',
})