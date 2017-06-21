const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
	title: String,
	link: String,
	description: String,
	author: String,
	comments: Array
})

const Article = mongoose.model('Article', articleSchema) //uses schema to build a model

module.exports = Article