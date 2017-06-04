var test = require('ava')

var configureDatabase = require('./setup-db')
configureDatabase(test)

var db = require('../../server/db')

test('getTopics', (t) => {
  return db.getTopics(t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 3)
        resolve()
      })
    })
})
