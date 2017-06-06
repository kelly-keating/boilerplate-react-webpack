
var passport = require('passport')
var Strategy = require('passport-local').Strategy
var db = require('./db')
var func = require('./functions')

module.exports = function (app) {
  var connection = app.get("connection")
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new Strategy(  )) //passport.use

  passport.serializeUser(function(user, done) {

  })

  passport.deserializeUser(function(id, done) {

    })

    return passport
}
