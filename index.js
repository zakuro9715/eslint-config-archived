module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:nuxt/recommended',
    '@vue/standard',
    '@nuxtjs',
  ],
  plugins: [
    'nuxt',
    'import',
    'node',
    'promise',
    'standard',
  ],
  rules: {
    'import/no-unresolved': 0,
    'no-debugger': 1,
    'no-console': 1,
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'space-before-function-paren': 0,
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: false,
        afterLineComment: false,
      },
    ],
  },
}
