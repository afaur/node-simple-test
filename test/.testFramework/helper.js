module.exports = () => {
  return {
    S: { pass: { total: 0, details: [] }, fail: { total: 0, details: [] } },
    P: function (d) { this.S.pass.total++; this.S.pass.details.push(d) },
    F: function (d) { this.S.fail.total++; this.S.fail.details.push(d) },
  }
}
