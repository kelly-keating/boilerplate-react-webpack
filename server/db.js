
function getTopics (connection) {
  return connection('topics')
}

function getTopic (topic, connection) {
  return connection('topics')
  	.where('topics.name', topic)
  	.first()
}

function listCode (topic, connection) {
  return connection('code')
  	.join('topics', 'code.topic_id', '=', 'topics.id')
  	.where('topics.name', topic)
}

function getCode (topic, code, connection) {
  return connection('code')
}


module.exports = {
  getTopics,
  getTopic,
  listCode,
  getCode
}
