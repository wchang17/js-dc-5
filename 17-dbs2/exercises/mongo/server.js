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

})

app.get('/find-by-name/:name', ( req, res ) => {

})

app.get('/find-by-evolveLevel/:evolveLevel', ( req, res ) => {

})

app.get('/find-by-attack/:attack', ( req, res ) => {

})

/*
 * Fill in the below to filter the query results
 */

// where to filter attack value
app.get('/filter/find-by-attack/:attack', ( req, res ) => {

})

// limit to filter # of results
app.get('/filter/limit-by-attack/:attack', ( req, res ) => {
  
})

// sort results
app.get('/filter/sort-by-attack/:attack', ( req, res ) => {

})

app.listen(3000)
