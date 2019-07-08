module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/standard',
  ],
  // prettier-ignore
  plugins: [
    'prettier',
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
    'coomma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'never'],
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
        afterBlockComment: true,
        beforeLineComment: false,
        afterLineComment: false,
      },
    ],
    'prettier/prettier': [
      2,
      {
        printWidth: 79,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
  },
}
