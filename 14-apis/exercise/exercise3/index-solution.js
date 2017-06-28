const express = require('express')
const hbs  = require('express-handlebars')
const request = require('request')

const app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function(req, res){
  res.render('index')
})

app.get('/pokemon/:pokeId', function( req, res ) {
  // Make a request to the Spotify API using request
  request.get(`http://pokeapi.co/api/v2/pokemon/${req.params.pokeId}/`, ( error, response, body ) => {
    let data = JSON.parse(body)
    res.render('pokemon', {
      name: data.name
    })
  })

})

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
