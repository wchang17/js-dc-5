const express = require('express')
const exphbs  = require('express-handlebars')
const data    = require('./pokedex.json')

function getPokemon( id ) {

  for (let i = 0; i < data.pokemon.length; i++) {
    if ( data.pokemon[ i ].id === id ) {
      return data.pokemon[ i ]
    }
  }

}

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {
  res.render('home', data)
})

app.get('/pokemon/:id', function( req, res ) {
  let pokemon = getPokemon( req.params.id )
  res.render('pokemon', pokemon)
})

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
