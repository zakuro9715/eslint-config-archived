/* eslint-disable quote-props */

module.exports = {
  extends: 'airbnb-base',
  plugins: [
    'import',
  ],
  'rules': {
    'import/no-unresolved': 0,
    'semi': ['error', 'never'],
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      afterBlockComment: true,
      beforeLineComment: false,
      afterLineComment: false,
    }],
  },
}
