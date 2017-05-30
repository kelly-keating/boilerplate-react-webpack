
function getTopics (connection) {
  return connection('topics')
}

function getTopic (topic, connection) {
  return connection('topics')
  	.where('topics.name', topic)
  	.first()
}

function listCode (topic, connection) {
  return connection('code').select('*', 'code.id as code_id')
  	.join('topics', 'code.topic_id', '=', 'topics.id')
  	.where('topics.name', topic)
}

function getCode (id, connection) {
  return connection('code')
  	.where('code.id', id)
  	.first()
}

function getUses (connection) {
  return connection('uses')
}

module.exports = {
  getTopics,
  getTopic,
  listCode,
  getCode,
  getUses
}
