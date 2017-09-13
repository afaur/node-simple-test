module.exports = async (directory, { blist }) => {
  // Find all files inside the directory provided
  const files = await require('./explore')(directory)

  // Track test results
  let D = { pass: { each: [], total: 0 }, fail: { each: [], total: 0 } }

  // Require all files that are not on blacklist
  await files.map(async f => {
    // Get a relative full path to file with filename
    const relativeFilepath = f.replace(directory, '')

    // Only process if not on blacklist
    if (!blist.test(relativeFilepath)) {

      // Get pass and fail info from a test file
      let { pass, fail } = await require(f)()

      // Collect results
      require('./collect')(D, relativeFilepath, { pass, fail })
    }
  })

  // Return collected results
  return D
}
