import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

var setupDb = require('./setup-db')

setupDb(test, function (db) {
  app.set('knex', db)
})

test.serial('GET /categories return a list of categories', t => {
  return request(app)
    .get('/topics')
    .expect(200)
    .then((res) => {
      t.is(res.body.length, 5)
    })
    .catch((err) => {
      console.log(err.message)
    })
})

test.todo('GET /topics/:id returns all recipes in one category')
