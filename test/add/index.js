module.exports = async () => {
  // Use a test helper for organizing our results to the test runner
  let H = require('../.testFramework/helper')()

  // Require our module under test
  const MUT = require('../../src/add')

  try {
    assert.equal(MUT(1, 1), 2)
    H.P({ id: 0, desc: `Should return 2 when passed (1, 1)` })
  } catch (e) {
    H.F({ id: 0, desc: `Should return 2 when passed (1, 1)` })
  }

  // Return test results
  return H.S
}
