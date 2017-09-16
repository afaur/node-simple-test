const T = {
  R: "\x1b[31m__TEXT\x1b[39m",
  G: "\x1b[32m__TEXT\x1b[39m",
  B: "\x1b[34m__TEXT\x1b[39m",
  Y: "\x1b[33m__TEXT\x1b[39m",
}

for (let C in T) {
  module.exports[C] = (
    (T,C) => (s => T[C].replace(/__TEXT/, s))
  )(T,C)
}
