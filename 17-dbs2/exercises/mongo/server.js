const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://jsdcstudent:jsdcrocks@ds153652.mlab.com:53652/pokemon')

const Pokemon = require('./models/pokemon')

const app = express()

app.get('/', ( req, res ) => {
  res.redirect('/find-all')
})

/*
 * Fill in the routes to finish the query
 */

app.get('/find-all', ( req, res ) => {
  Pokemon.find({}, ( err, pokemons ) => {
    res.json( pokemons )
  })
})

app.get('/find-by-id/:id', ( req, res ) => {

	Pokemon.findOne({'_id': req.params.id, (err, pokemon) =>{
	res.json(pokemon)

})

})

app.get('/find-by-name/:name', ( req, res ) => {

	Pokemon.find({'name': req.params.name, (err, pokemon) =>{
	res.json(pokemon)

})

})

app.get('/find-by-evolveLevel/:evolveLevel', ( req, res ) => {

	Pokemon.find({'evolveLevel': req.params.evolveLevel, (err, pokemon) =>{
	res.json(pokemon)

})

app.get('/find-by-attack/:attack', ( req, res ) => {

	Pokemon.find({'attack': req.params.attack}, (err, pokemon) =>{
	res.json(pokemon)
})

//Finds all pokemon with attack greater than a number (modifier). req.params.attack can be a number
// 	Pokemon.find({'attack': {$gt: req.params.attack}}, (err, pokemon) =>{
// 	res.json(pokemon)
// })

})

/*
 * Fill in the below to filter the query results
 */

// where to filter attack value
app.get('/filter/find-by-attack/:attack', ( req, res ) => {

	Pokemon.find({})
	.where('attack').gt( req.params.attack )
	.exec((err, pokemon) =>{
		res.json(pokemon)
	})


})

// limit to filter # of results
app.get('/filter/limit-by-attack/:attack', ( req, res ) => {

	Pokemon.find({})
	.where('attack').gt( req.params.attack )
	.limit(10)
	.exec((err, pokemon) =>{
		res.json(pokemon)
	})
  
})

// sort results by attack field
app.get('/filter/sort-by-attack/:attack', ( req, res ) => {

	Pokemon.find({})
	.where('attack').gt( req.params.attack )
	.limit(10)
	.sort('-attack') //sort by ascending or descending by adding a - before the field
	.exec((err, pokemon) =>{
		res.json(pokemon)
	})

})

app.listen(3000)
