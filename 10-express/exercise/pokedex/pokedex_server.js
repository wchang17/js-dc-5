// Express is a library or framework
// need one root for home page and one for the separate pokemon

const express = require('express')
const hbs = require('express-handlebars') 
const data = require('./pokedex.json') //2 periods goes up a level
const app = express()

function pokemon(id) {
	for( let i = 0; i < data.pokemon.length; i++) {
		if(data.pokemon[i].id === id) {
			return data.pokemon[i]
		}
		
	}
}

app.engine('handlebars', hbs({
	defaultLayout: 'main'
}) ) // tells express we want to use a plugin. takes 2 params: indentifier for plugin and plugin itself. (like installing plugin)

app.set('view engine', 'handlebars') //we want express to render our views for us through handlebars (like activating plugin). view engine always looks for a directory called views

app.get('/', function(req, res) {
	res.render('home', data) //passing data in the template
})

//:id is the params, or you can use :name (use the uniquer identifier)
app.get('/pokemon/:id', function(req, res) {
	let pokemonId = req.params.id
	let pokemonData = pokemon(pokemonId) // req.params.id provides the name of the pokemon
	res.render('pokemon', pokemonData) //passing data in the template
})

app.listen(3000, function() {
	console.log('listening')
}) //function is optional

//we need a main.handlebars for a template that gets HTML from home and other page templates.