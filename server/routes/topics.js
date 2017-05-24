var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  req.app.get('knex')('topics')
    .then((result) => {
      res.json(result)
    })
})

module.exports = router
