var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var Todo = require('./models/todo')

mongoose.connect('mongodb://localhost:27017/todo-spa')

var app = express()

app.use( express.static('public') )
app.use( bodyParser.urlencoded({ extended: true }) )

app.get('/', function( req, res ) {
  res.sendFile( __dirname + '/views/index.html')
})

app.get('/todos', function( req, res ) {

  Todo.find({}, function( err, todos ) {

    res.json( todos )

  })

})

/*

Cases:
1. Updating
2. Deleting
3. Creating

*/

app.post('/todos', function( req, res, next ) {

  var data = JSON.parse( req.body.data )

  if ( data.update ) {

    Todo.findById(data._id, function( err, todo ) {

      todo.isCompleted = data.isCompleted
      todo.save()

    })

  } else if ( data.toDelete ) {

    Todo.findById( data._id, function( err, todo ) {

      todo.remove()

    })

  } else {

    var newTodo = new Todo({
      title: data.title,
      isCompleted: data.isCompleted
    })

    newTodo.save();

  }
  
  return res.send('done')

})




app.listen( 3000 )
