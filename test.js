var eslint = require('eslint')
var test = require('tape')

test('config is valid', function(t) {
  var CLIEngine = eslint.CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'index.js',
  })

  var code = 'function f() {}\nf()\n'

  t.ok(cli.executeOnText(code).errorCount === 0)
  t.end()
})
