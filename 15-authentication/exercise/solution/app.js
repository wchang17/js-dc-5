const express = require("express")
const mongoose = require("mongoose")
const hbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const routes = require('./routes/index')

const app = express()
mongoose.connect("mongodb://localhost:27017/peoplebook")

app.engine('handlebars', hbs({
  defaultLayout: 'default',
  helpers: {
    equal: function(lvalue, rvalue, options) {
        if (arguments.length < 3)
            throw new Error("Handlebars Helper equal needs 2 parameters")
        if( lvalue != rvalue ) {
            return options.inverse(this)
        } else {
            return options.fn(this)
        }
    }
  }
}))

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

const User = require('./models/user')
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/', routes)

app.listen(3000, function() {
  console.log("Server started on port 3000")
})
