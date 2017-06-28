let express = require('express')
let data    = require('./pokedex.json')

function getPokemon( id ) {
  return data.pokemon.find(poke => {
    return poke.id === id
  })
}

let app = express()

app.get('/', function(req, res){
  res.json({'message': 'welcome to the Pokedex'})
})

app.get('/pokemon', function( req, res ) {
  res.json( data )
})

app.get('/pokemon/:id', function( req, res ) {
  let pokemon = getPokemon( req.params.id )
  res.json( pokemon )
})

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
