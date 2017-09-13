module.exports = async () => {
  // Allows checking of values
  const assert = require('assert')

  // Use a test helper for organizing results for the test runner
  let H = require('../.testFramework/helper')()

  // Require our module under test
  const MUT = require('../../src/add')

  // Outside try/catch keeps them accessible in happy/sad paths
  let expect, actual

  try {
    +([expect, actual] = [MUT(1, 1), 2])
    assert.equal(actual, expect)
    H.P({ id: 0, desc: `Should return 2 when passed (1, 1)`, expect, actual })
  } catch (e) {
    H.F({ id: 0, desc: `Should return 2 when passed (1, 1)`, expect, actual })
  }

  // Return test results
  return H.S
}
