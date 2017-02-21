var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/todo')

var Todo = require('./models/todo.js')

var app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function( req, res ) {

  Todo.find({}, function( err, todos ) {
    res.render( 'home', {todos: todos} )
  })

})

app.post('/todos', function( req, res ) {

  console.log( req.body )

  var newTodo = new Todo({
    content: req.body.todo,
    status: req.body.status
  })

  newTodo.save()

  res.redirect('/')

})

app.listen( 3000, function() {
  console.log( 'start making todos at localhost:3000' )
})
