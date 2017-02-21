var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// Middleware

// 1. This will fire on all routes


// 2. These will only fire on specific routes



/*

This will respond to all requests and simply send back
the url that was requested as a string.

*/
app.get('*', function( req, res ) {
  res.send( req.url )
})

app.listen( 3000 )
