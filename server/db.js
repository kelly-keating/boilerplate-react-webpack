
function getTopics (connection) {
  return connection('topics')
}

function getTopic (topic, connection) {
  return connection('topics')
  	.where('topics.name', topic)
  	.first()
}

module.exports = {
  getTopics,
  getTopic
}
