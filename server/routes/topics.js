var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/topics', (req, res) => {
  db.getTopics(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/topic/:topic', (req, res) => {
  db.getTopic(req.params.topic, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/topic/:topic/code', (req, res) => {
  db.listCode(req.params.topic, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

router.get('/topic/:topic/:id', (req, res) => {
  db.getCode(req.params.id, req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

module.exports = router
