var express = require('express')
var passport = require('passport')
var User = require('./models/user')

var router = express.Router()

router.get('/', function( req, res ) {

  User.find({}, function( err, users ) {

    res.render('index', { users: users })

  })

})

module.exports = router
