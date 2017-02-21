var express = require('express')
var passport = require('passport')
var User = require('../models/user')
var router = express.Router()

router.get('/', function( req, res ) {

  User.find({}, function( err, users ) {

    res.render('index', { user: req.user, users: users })

  })

})

router.get('/register', function( req, res ) {

  res.render('register')

})

router.post('/register', function( req, res ) {

  console.log( req.body.username, req.body.password )

  var user = new User({
    username: req.body.username
  })

  var password = req.body.password

  User.register(user, password, function( err, user ){

    if ( err ) {
      console.log( err )
      return res.render('register', { user: user, err: err })
    }

    passport.authenticate('local')( req, res, function() {

      res.redirect('/')

    })

  })

})

router.get('/login', function( req, res ) {

  res.render('login', { user: req.user })

})

router.post('/login', passport.authenticate('local'), function( req, res ) {
  res.redirect('/')
})

router.get('/logout', function( req, res ) {
  req.logout()
  res.redirect('/')
})

router.get('/users/:username', function( req, res ) {
  User.findOne({ username: req.params.username }, function( err, user ) {

    res.render("profile", { user: user })

  })

})

router.get('/ping', function( req, res ) {

  res.status(200).send('pong!')

})

module.exports = router
