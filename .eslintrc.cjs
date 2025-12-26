/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['import', 'perfectionist'],
  rules: {
    // Existing rules
    'no-unused-vars': ['error', { 'varsIgnorePattern': '^props$' }],

    // Perfectionist - Import sorting
    'perfectionist/sort-imports': ['warn', {
      type: 'natural',
      order: 'asc',
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
    }],

    // Perfectionist - Interface/Type sorting
    'perfectionist/sort-interfaces': 'error',

    // Perfectionist - Explicitly disabled (preserve logical grouping)
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-variable-declarations': 'off',

    // Vue - Block order
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],

    // Vue - Macro order
    'vue/define-macros-order': ['error', {
      order: ['defineProps', 'defineEmits', 'defineSlots', 'defineModel'],
    }],

    // Vue - Enforce script-setup
    'vue/component-api-style': ['error', ['script-setup']],

    // Vue - Enforce type-based props
    'vue/define-props-declaration': ['error', 'type-based'],

    // Vue - Padding between blocks
    'vue/padding-line-between-blocks': ['error', 'always'],

    // Cleanup - Remove old simple-import-sort
    'import/order': 'off',
  },
}
