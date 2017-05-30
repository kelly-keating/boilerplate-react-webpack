var request = require('superagent')

function getTopics (callback) {
  request
    .get('/topics')
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getTopic (topic, callback) {
  request
    .get(`/topic/${topic}`)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function listCode (topic, callback) {
  request
    .get(`/topic/${topic}/code`)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getCode (id, callback) {
  request
    .get(`/topic/code/${id}`)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getUses (callback) {
  request
  .get(`/uses`)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getUse (id, callback) {
  request
  .get(`/uses/use/${id}`)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

function getCodeFromQuestion (id, callback) {
  request
  .get(`/uses/code/${id}`)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

module.exports = {
  getTopics,
  getTopic,
  listCode,
  getCode,
  getUses,
  getUse,
  getCodeFromQuestion
}
