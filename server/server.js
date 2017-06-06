var path = require('path')
var express = require('express')
var session = require('express-session')
var pasport = require('passport')
var localPass = require('passport-local')
var bodyParser = require('body-parser')

var topics = require('./routes/topics')
var uses = require('./routes/uses')
var auth = require('./routes/auth')


var server = express()
module.exports = server


server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.use('/topics', topics)
server.use('/uses', uses)
server.use('/auth', auth)
