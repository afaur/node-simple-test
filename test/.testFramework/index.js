(async () => {
  // Need for finding/checking files/directories
  const [fs, path] = [require('fs'), require('path')]

  // Blacklist this file (`index.js`) and `old` folder
  const blist = RegExp('.testFramework')

  // Find files (in test folder but not on blist) and require them, return test results
  let D = await require('./result')(path.join(__dirname, '..'), { blist })

  // Print output of all tests results
  require('./output')(D)

  // Make sure we exit with code if failures occured
  +(D.fail.total > 0) ? process.exit(1) : process.exit(0)
})()
