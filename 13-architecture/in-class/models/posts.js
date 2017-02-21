var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postSchema = new Schema({
  postUrl: String,
  title: String,
  description: String,
  author: String
  // comments: Array
})

var Post = mongoose.model( 'Post', postSchema )

module.exports = Post
