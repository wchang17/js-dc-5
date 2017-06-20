const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('your_connection_uri_here')

const ToDo = require('./models/ToDo')

app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use( bodyParser.urlencoded({ extended: true }))

app.get('/', ( req, res ) => {
  ToDo.find({}, ( err, todos ) => {
    res.render('index', { todos })
  })
})

app.get('/todo/new', ( req, res ) => {
  res.render('todo/new')
})

app.post('/todo/new', ( req, res ) => {

  let newToDo = new ToDo({
    content: req.body.content,
    completed: false
  })

  newToDo.save()

  res.redirect('/')

})

app.get('/todo/:id', ( req, res ) => {
  ToDo.findOne({ '_id': req.params.id }, ( err, todo ) => {
    console.log( todo )
    res.render('todo/single', todo)
  })
})

app.get('/todo/edit/:id', ( req, res ) => {
  ToDo.findOne({ '_id': req.params.id }, ( err, todo ) => {
    res.render('todo/edit', todo)
  })
})

app.post('/todo/edit', ( req, res ) => {
  ToDo.findOne({ '_id': req.body.id }, ( err, todo ) => {
    todo.title = req.body.title
    todo.content = req.body.content

    todo.save()

    res.redirect(`/todo/${ todo._id }`)
  })
})

app.get('/todo/delete/:id', ( req, res ) => {
  ToDo.findOne({ '_id': req.params.id }, ( err, todo ) => {
    todo.remove()
    res.redirect('/')
  })
})

app.listen(3000)
