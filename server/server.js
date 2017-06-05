var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var topics = require('./routes/topics')
var uses = require('./routes/uses')

var server = express()
module.exports = server


server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.use('/topics', topics)
server.use('/uses', uses)
