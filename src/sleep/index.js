module.exports = async (ms) => (new Promise(r => setTimeout(() => r(`${ms} nap finished.`), ms)))
