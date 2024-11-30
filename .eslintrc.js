module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Proxy: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': 'error',
  },
};
