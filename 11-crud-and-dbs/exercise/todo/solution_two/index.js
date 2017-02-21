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

  var newTodo = new Todo({
    content: req.body.todo,
    status: req.body.status
  })

  newTodo.save()

  res.redirect('/')

})

app.get('/todos/new', function( req, res ) {
  res.render('todo/new')
})

app.get('/todos/edit/:id', function( req, res ) {

  Todo.findById( req.params.id, function( err, todo ) {

    res.render('todo/edit', todo)

  })

})

app.post('/todos/edit/:id', function( req, res ) {

  Todo.findById( req.params.id, function( err, todo ) {
    console.log( req.body )

    todo.content = req.body.todo
    todo.status = req.body.status ? true : false

    todo.save()

    res.redirect('/')

  })
})

app.get('/todos/:id', function( req, res ) {

  Todo.findById( req.params.id, function( err, todo ) {

    res.render('todo/todo', todo)

  })

})

app.listen( 3000, function() {
  console.log( 'start making todos at localhost:3000' )
})
