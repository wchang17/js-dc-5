var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// Middleware

// This will fire on all routes
app.use(function( req, res, next ){
  console.log( 'Time: ', Date.now() )

  next()
})

// These will only fire on specific routes
app.get('/pages/:num', function( req, res, next ) {

  console.log( 'Request URL: ', req.originalUrl )

  next()
}, function( req, res, next ) {

  console.log( 'Request method: ', req.method )

  next()
})



/*

This will respond to all requests and simply send back
the url that was requested as a string.

*/
app.get('*', function( req, res ) {
  res.send( req.url )
})

app.listen( 3000 )
