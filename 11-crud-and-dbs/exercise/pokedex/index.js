const express = require('express')
const hbs = require('express-handlebars')
const mongoose = require('mongoose')

//setting up ORM to talk to the DB
mongoose.connect('mongodb://admin:admin@pokedex-shard-00-00-emqy4.mongodb.net:27017,pokedex-shard-00-01-emqy4.mongodb.net:27017,pokedex-shard-00-02-emqy4.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=pokedex-shard-0&authSource=admin')

const pokemon = require('./models/pokemon.js')
// let pikachu = new pokemon ({
// 	name: 'Pikachu',
// 	type: 'Electric'
// })

// pikachu.save()

// console.log(pikachu)

const app = express()

app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars') //by default express looks in the views folder first

app.get('/', ( req, res ) => {
  res.render('index')
})

app.get('/pokemon/new', ( req, res ) => {
  res.render('pokemon/new')
})

app.post('/pokemon/new', ( req, res ) => {
	res.redirect('/pokemon') //redirect sends the user to another url
})

app.get('/pokemon', ( req, res ) => {
	Pokemon.find({}, (err,pokemon) {
		res.render('pokemon/index', {pokemon: pokemon})
	})
})

app.listen(3000)
