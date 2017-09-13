module.exports = (R, f, { pass, fail }) => {
  // Track the total amount of passed and failed tests
  R.pass.total = R.pass.total + pass.total
  R.fail.total = R.fail.total + fail.total

  // Track all individual test details with the filename
  R.pass.each.push({ filename: f, details: pass.details })
  R.fail.each.push({ filename: f, details: fail.details })
}
