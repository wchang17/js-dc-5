var express = require('express')
var hbs = require('express-handlebars')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

mongoose.connect('mongodb://admin:admin@pokedex-shard-00-00-emqy4.mongodb.net:27017,pokedex-shard-00-01-emqy4.mongodb.net:27017,pokedex-shard-00-02-emqy4.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=pokedex-shard-0&authSource=admin')
const Entry = require('./models/entry.js')

var app = express()

app.use(bodyParser.urlencoded({
	extended: true
}))

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {

	Entry.find({}, function(err, entries) {
		res.render('home', {entries})

	}) //empty object represents our query. gets all entries and saves in the entries parameter
})

app.post('/', function( req, res ) {
	const currentEntry = new Entry({
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
  console.log( 'To Do List is up and running!' )
})
