var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db')

test('getTopics', (t) => {
  return db.getTopics(t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 6)
        resolve()
      })
    })
})

test('getTopic', (t) => {
  return db.getTopic('git', t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        t.is(result.id, 9902)
        resolve()
      })
    })
})

test('listCode', (t) => {
  return db.listCode('git', t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        t.is(result[0].text, 'git login') // nope :P
        resolve()
      })
    })
})

test('getCode', (t) => {
  return db.getCode(88901, t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        t.is(result.text, 'ava')
        resolve()
      })
    })
})

test('getUses', (t) => {
  return db.getUses(t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        t.is(result[0].id, 3301)
        resolve()
      })
    })
})

test('getUse', (t) => {
  return db.getUse(3301, t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        t.is(result.topic_id, 9902)
        resolve()
      })
    })
})
