var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Todo = new Schema({
  title: String,
  isCompleted: Boolean
})

var Todo = mongoose.model('Todo', Todo)

module.exports = Todo
