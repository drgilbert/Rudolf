module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  plugins: ['@typescript-eslint'],
  globals: {
    $: true,
    $$: true,
  },
  extends: [
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/promise-function-async': ['error', { allowAny: true }],
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/unbound-method': 'warn',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}