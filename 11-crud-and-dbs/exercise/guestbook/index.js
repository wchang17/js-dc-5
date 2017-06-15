var express = require('express')
var hbs = require('express-handlebars')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {

})

app.post('/', function( req, res ) {

})

app.get('*', function( req, res ){
  res.send('404!')
})

app.listen( 3000, function() {
  console.log( 'Guestbook is up and running!' )
})
