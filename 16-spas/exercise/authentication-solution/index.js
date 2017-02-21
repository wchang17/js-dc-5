var express = require('express')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var routes = require('./routes')

var app = express()

// Configuration
app.engine('handlebars', hbs({defaultLayout: 'default'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


// Routes
app.use(routes)

// passport config
var User = require('./models/user')
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// mongoose
mongoose.connect('mongodb://localhost:27017/auth-solution')

app.use(function( req, res, next ) {

  var err = new Error('Not Found')
  err.status = 404
  next( err )

})


app.listen(3000)
