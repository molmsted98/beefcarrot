module.exports = {
  extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier'],
  rules: {
    radix: ['error', 'as-needed'],
    'prefer-destructuring': 'off',
    'no-console': 'error',
    'import/no-named-as-default': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'no-use-before-define': 0,
    'react/require-default-props': 0,
    'react/jsx-one-expression-per-line': 0
  },
  plugins: ['flowtype', 'prettier']
};
