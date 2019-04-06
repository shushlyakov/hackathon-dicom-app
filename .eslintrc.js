module.exports = {
  parser: "babel-eslint",
  extends: 'airbnb-base',
  rules: {
    "indent": ["error", 2],
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    customElements: true,
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true
  }
};
