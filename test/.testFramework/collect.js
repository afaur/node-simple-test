// Takes D(ata), R(elative) P(ath) (to) F(ile), and data from test runs
// Adds the information from the test runs to the D(ata)
module.exports = (D, RPF, { pass, fail }) => {
  // Track the total amount of passed and failed tests
  D.pass.total = D.pass.total + pass.total
  D.fail.total = D.fail.total + fail.total

  // Track all individual test details with the filename
  D.pass.each.push({ filename: RPF, details: pass.details })
  D.fail.each.push({ filename: RPF, details: fail.details })
}
