var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var mongoose = require('mongoose')
mongoose.connect('mongodb://zakk:faju6uq6@pokemon-shard-00-00-vzytr.mongodb.net:27017,pokemon-shard-00-01-vzytr.mongodb.net:27017,pokemon-shard-00-02-vzytr.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Pokemon-shard-0&authSource=admin')

var Entry = require('./models/entry.js')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
  extended: true
}))

app.get('/', function( req, res ) {

  Entry.find({}, function( err, entries ) {

    res.render('home', { name: 'Zakk', entries: entries })

  })

})

app.post('/', function( req, res ) {

  var currentEntry = new Entry({
    content: req.body.content,
    name: req.body.name
  })

  currentEntry.save()

  res.redirect('/')

})

app.get('*', function( req, res ){
  res.send('404!')
})

app.listen( 3000, function() {
  console.log( 'Guestbook is up and running!' )
})
