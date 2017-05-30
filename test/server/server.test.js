import test from 'ava'
import request from 'supertest'

import server from '../../server/server'

var setupDb = require('./setup-db')

setupDb(test, server)

test('GET /topics', (t) => {
  return request(t.context.app)
    .get('/topics')
    .expect(200)
    .then((res) => {
        t.is(res.body.length, 9)
      })
      .catch((err) => {
        console.log(err.message)
      })
})
