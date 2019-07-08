const eslint = require('eslint')
const test = require('tape')

test('config is valid', function(t) {
  const CLIEngine = eslint.CLIEngine

  const cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
  })

  const code = 'function f() {}\nf()\n'

  t.ok(cli.executeOnText(code).errorCount === 0)
  t.end()
})
