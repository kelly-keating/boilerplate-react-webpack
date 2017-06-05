import test from 'ava'
import request from 'supertest'

import server from '../../server/server'

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, server)

test('GET /topics', (t) => {
  return request(t.context.app)
    .get('/topics')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.length, 6)
        resolve()
      })
    })
})
