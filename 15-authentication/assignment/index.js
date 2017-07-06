const express = require('express')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('expression-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

mongoose.connect('mongodb://jsdc5:taylorswift2017@ds135912.mlab.com:35912/jsdc5tunr')

const app = express()
const appController = require('./routes/index.js')
const artistController = require('./routes/artists.js')

const Artist = require('./models/Artist.js')

app.engine('handlebars', hbs({
	defaultLayout: 'main',
	helpers: {
		equal: function(lvalue, rvalue, options) {
			if (arguments.length < 3)
            throw new Error("Handlebars Helper equal needs 2 parameters")
        if( lvalue!=rvalue ) {
            return options.inverse(this)
        } else {
            return options.fn(this)
        }
		}
	}
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
  secret: 'TaylorSwiftFan2017',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

//configure passport
const User = require('./models/user') //import our account model
passport.use(new LocalStrategy(User.authenticate())) //tell passport to use a local strategy with our user model
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use( express.static('public') )

app.use('/', appController)
app.use('/artists', artistController)

app.listen(3000)
