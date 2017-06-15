// Express is a library or framework
// need one root for home page and one for the separate pokemon

const express = require('express')
const hbs = require('express-handlebars') 
const data = require('./pokedex.json')
const app = express()

// function pokemon(id) {
// 	for( let i = 0; i < data.pokemon.length; i++) {
		
// 	}
// }

app.engine('handlebars', hbs({
	defaultLayout: 'main'
}) ) // tells express we want to use a plugin. takes 2 params: indentifier for plugin and plugin itself. (like installing plugin)

app.set('view engine', 'handlebars') //we want express to render our views for us through handlebars (like activating plugin)

app.get('/', function(req, res) {
	res.render('home', data) //passing data in the template
})

app.get('/', function(req, res) {
	res.render('pokemon', data) //passing data in the template
})

app.listen(3000, function() {
	console.log('listening')
})