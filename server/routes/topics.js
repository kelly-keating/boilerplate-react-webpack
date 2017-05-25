var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/topics', (req, res) => {
  db.getTopics(req.app.get('knex'))
    .then((result) => {
      res.json(result)
    })
})

module.exports = router
