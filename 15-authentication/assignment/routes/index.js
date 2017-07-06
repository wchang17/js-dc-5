const express = require('express')
const passport = require('passport')

const appController = express.Router()

const User = require('../models/user')
const Artist = require('../models/Artist.js')

appController.get('/', ( req, res ) => {
  Artist.find({}).limit(6).exec( ( err, artists ) => {
    res.render('index', { artists })
  })
})

appController.get('/about', ( req, res ) => {
  res.render('about')
})

router.get("/signup", function(req, res) {
	res.render('signup', {})
})

router.post("/signup", function(req,res) {
	User.register(new User({
		username: req.body.username
	}), 
	req.body.password,
	(err, account) => {
		if(err) {
			return res.render('register', {account: account})
		}
		console.log(account)
		passport.authenticate('local')(req, res, () =>{
			res.redirect('/')
		})
	} 
	)
})

router.get('/login', (req, res) =>{
	res.render('login', {user: req.user})
})

router.post('/login', passport.authenticate('local'), (req,res) =>{
	res.redirect('/')
})

router.get('/logout', (req, res) =>{
	req.logout()
	res.redirect('/')
})

module.exports = appController
