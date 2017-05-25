var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', (req, res) => {
  db.getTopics(req.app.get('knex'))
    .then((result) => {
      res.json(result)
      console.log(result)
    })
})

module.exports = router
