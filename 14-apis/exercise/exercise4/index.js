let express = require('express')
let data    = require('./pokedex.json')

function getPokemon( id ) {
  return data.pokemon.find(poke => {
    return poke.id === id
  })
}

let app = express()

app.get('/', function(req, res){
  // send a json response letting people know they're looking at the PokeApi

})

app.get('/pokemon', function( req, res ) {
  // send a json response containing all pokemon
})

app.get('/pokemon/:id', function( req, res ) {
  // send a json response containing the pokemon with the given Id

})

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
