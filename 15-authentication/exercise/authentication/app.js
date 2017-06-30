const express = require("express")
const mongoose = require("mongoose")
const hbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const routes = require('./routes/index')

const app = express()
mongoose.connect('mongodb://admin:admin@pokedex-shard-00-00-emqy4.mongodb.net:27017,pokedex-shard-00-01-emqy4.mongodb.net:27017,pokedex-shard-00-02-emqy4.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=pokedex-shard-0&authSource=admin')

app.engine('handlebars', hbs({
  defaultLayout: 'default',
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
app.use(bodyParser.urlencoded({ extended: false }))
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


app.use('/', routes)


app.listen(3000, function() {
  console.log("Server started on port 3000")
})
