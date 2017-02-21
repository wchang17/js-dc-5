var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todo-spa')

var app = express()

app.use( express.static('public') )
app.use( bodyParser.urlencoded({ extended: true }) )

app.get('/', function( req, res ) {
  res.sendFile( __dirname + '/views/index.html')
})

app.get('/todos', function( req, res ) {

  res.send('sup')

})

app.listen( 3000 )
