
import test from 'ava'

import app from '../../server/server'
import setupDb from './setup-db'
import db from '../../server/db'

setupDb(test, (knex) => app.set('knex', knex))

test('getTopics', (t) => {
  return db.getTopics(t.context.db)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(actual, 6)
        resolve()
      })
    })
})
