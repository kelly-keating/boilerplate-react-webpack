var express = require('express')
var router = express.Router()

var db = require('../db')

router.post('/register', (req, res) => {
  console.log(req.body)
})

router.post('/login', (req, res) => {
  console.log(req.body)
})

router.get('/logout', (req, res) => {
  console.log('logout')
})

module.exports = router
