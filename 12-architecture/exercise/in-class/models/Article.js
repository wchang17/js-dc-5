const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Building a model, in 2 parts

// Part 1, define a Schema
const articleSchema = new Schema({
  title: String,
  link: String,
  description: String,
  author: String,
  comments: Array
})

// Part 2, use the Schema to build a model
const Article = mongoose.model('Article', articleSchema)

module.exports = Article
