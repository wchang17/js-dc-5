var mongoose = require('mongoose')
var Schema = mongoose.Schema

var entrySchema = new Schema({
  content: String,
  name: String,
  created_at: Date
})

var Entry = mongoose.model('Entry', entrySchema)

module.exports = Entry
