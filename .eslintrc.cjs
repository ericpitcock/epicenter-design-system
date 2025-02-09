/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    // react plugin
    'plugin:react/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['import', 'simple-import-sort'],
  rules: {
    'no-unused-vars': ['error', { 'varsIgnorePattern': '^props$' }],
    // Enforce a specific order for imports
    'import/order': 'off', // Disable this in favor of simple-import-sort
    'simple-import-sort/imports': 'warn', // Sort imports in a logical order
    'simple-import-sort/exports': 'warn', // Sort exports if multiple
  },
}
