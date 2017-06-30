const express = require("express")
const passport = require('passport')

const User = require('../models/user')

// Create a router for handling our application as
// well as our sign-up flow
const router = express.Router()

// Index route
router.get("/", function( req, res ) {

  res.render('index', {user: req.user})

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

module.exports = router
