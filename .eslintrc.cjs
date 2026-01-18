/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['import', 'perfectionist', '@typescript-eslint', 'react'],
  rules: {
    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    
    // TypeScript
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^props$' }],
    
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
