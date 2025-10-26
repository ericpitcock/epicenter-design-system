import '../../../packages/epicenter-icons/base.scss'

import IconBrowserComponent from './IconBrowserComponent.vue'

export default {
  title: 'Epicenter Icons/Icon Browser',
  parameters: {
    docs: {
      description: {
        component: 'Browse and customize all Epicenter Icons. Search by name, tag, or category.',
      },
    },
  },
  argTypes: {
    size: {
      name: 'Size',
      control: { type: 'range', min: 12, max: 128, step: 4 },
    },
    color: {
      name: 'Color',
      control: { type: 'color' },
    },
    strokeWidth: {
      name: 'Stroke Width',
      control: { type: 'range', min: 0.5, max: 4, step: 0.1 },
    },
    showProblematicOnly: {
      name: 'Show Problematic Only',
      control: { type: 'boolean' },
    },
    hideProblematic: {
      name: 'Hide Problematic',
      control: { type: 'boolean' },
    },
  },
}

export const IconBrowser = {
  render: (args) => ({
    components: { IconBrowserComponent },
    setup() {
      return { args }
    },
    template: '<IconBrowserComponent v-bind="args" />',
  }),
  args: {
    size: 48,
    color: '#8b50f1',
    strokeWidth: 1,
    showProblematicOnly: false,
    hideProblematic: true,
  },
}