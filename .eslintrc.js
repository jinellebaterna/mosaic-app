module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-plusplus': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/static-property-placement': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-underscore-dangle': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'no-case-declarations': 0,
  },
};
