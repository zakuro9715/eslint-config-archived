module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 0,
    semi: ['error', 'never'],
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
        trailingComma: 'es5',
        arrowParens: 'always',
        semi: false,
      },
    ],
  },
}
