module.exports = (D) => {
  // Helper for colorizing output
  const {G, R} = require('./color')

  // Make colorized versions of pass and fail totals
  const [pt, ft] = [G(D.pass.total), R(D.fail.total)]

  // Give a final overview of completed test results
  process.stdout.write(`\n`)

  if (D.pass.total > 0) {
    D.pass.each.map(testCase => {
      const { filename, details } = testCase
      process.stdout.write(`------------------------------------------\n`)
      process.stdout.write(`File: ${filename}\n`)
      process.stdout.write(`${G('Passing Tests')}\n`)
      details.map(detail => {
        process.stdout.write(` - ${detail.desc}\n`)
      })
    })
  }

  if (D.fail.total > 0) {
    D.fail.each.map(testCase => {
      const { filename, details } = testCase
      process.stdout.write(`------------------------------------------\n`)
      process.stdout.write(`File: ${filename}\n`)
      process.stdout.write(`${R('Failing Tests')}\n`)
      details.map(detail => {
        process.stdout.write(` - ${detail.desc}\n`)
        process.stdout.write(`   - Expected: ${detail.expect}\n`)
        process.stdout.write(`   - Actual:   ${detail.actual}\n`)
      })
    })
  }

  process.stdout.write(`------------------------------------------\n`)
  process.stdout.write(`  ${pt} test(s) ${G('passed')}. | `)
  process.stdout.write(`${ft} test(s) ${R('failed')}.\n`)
  process.stdout.write(`------------------------------------------\n`)
}
