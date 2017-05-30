var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()
module.exports = server

var topics = require('./routes/topics')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/', topics)
