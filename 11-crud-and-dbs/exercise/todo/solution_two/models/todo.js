var mongoose = require('mongoose')
var Schema = mongoose.Schema

var todoSchema = new Schema({
  content: String,
  status: Boolean
})

var Todo = mongoose.model( 'Todo', todoSchema )

module.exports = Todo
