
function getTopics (connection) {
  return connection('topics')
}

module.exports = {
  getTopics
}
