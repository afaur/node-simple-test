module.exports = async () => {
  // Allows checking of values
  const assert = require('assert')

  // Use a test helper for organizing results for the test runner
  let H = require('../.testFramework/helper')()

  // Require our module under test
  const MUT = require('../../src/sleep')

  // Outside try/catch keeps them accessible in happy/sad paths
  let expect, actual

  // Setup argument to MUT
  let ms = 1000

  try {
    +([expect, actual] = [await MUT(ms), `${ms} nap finished.`])
    assert.equal(actual, expect)
    H.P({ id: 0, desc: `Should return '${ms} nap finished.' when passed (${ms})`, expect, actual })
  } catch (e) {
    H.F({ id: 0, desc: `Should return '${ms} nap finished.' when passed (${ms})`, expect, actual })
  }

  // Return test results
  return H.S
}
