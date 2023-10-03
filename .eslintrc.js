module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}']
    }
  ]
}
