const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://zakk:faju6uq6@cluster0-shard-00-00-vzytr.mongodb.net:27017,cluster0-shard-00-01-vzytr.mongodb.net:27017,cluster0-shard-00-02-vzytr.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

const Pokemon = require('./models/Pokemon.js')

const app = express()

app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({ extended: true }))

app.get('/', ( req, res ) => {
  res.render('index')
})

app.get('/pokemon/new', ( req, res ) => {
  res.render('pokemon/new')
})

app.post('/pokemon/new', ( req, res ) => {

  const pokemon = new Pokemon({
    name: req.body.name,
    type: req.body.type
  })

  pokemon.save()

  res.redirect('/pokemon')
})

app.get('/pokemon/edit/:id', ( req, res ) => {

  Pokemon.findOne({ '_id': req.params.id }, ( err, pokemon ) => {

    res.render('pokemon/edit', { pokemon })

  })

})

app.post('/pokemon/edit/:id', ( req, res ) => {

  Pokemon.findOne({ '_id': req.params.id }, ( err, pokemon ) => {

    pokemon.name = req.body.name
    pokemon.type = req.body.type

    pokemon.save()

    res.redirect('/pokemon')
  })

})

app.get('/pokemon/:id', ( req, res ) => {

  Pokemon.findOne({ '_id': req.params.id }, function( err, pokemon ) {

    res.render('pokemon/single', { pokemon })

  })

})

app.get('/pokemon', ( req, res ) => {

  Pokemon.find({}, function( err, pokemon ) {
    res.render('pokemon/index', { pokemon })
  })

})

app.listen(3000)
