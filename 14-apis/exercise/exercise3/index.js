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
  // Make a request to the Pokemon API using request

})

app.listen( 3000, function() {
  console.log( 'Your pokedex is working' )
})
