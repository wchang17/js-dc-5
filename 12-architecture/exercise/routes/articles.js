const express = require('express')
const Article = require('../models/Article.js')

const articlesRouter = express.Router() //builds an app in our express app

articlesRouter.get('/new', (req, res) =>{
	Article.find({}, function(err, articles) {
		res.render('articles/new')
	})
})

articlesRouter.post('/new', function(req, res) => {
	const newArticle = new Article({
		url: req.body.url,
		author: req.body.author,
		title: req.body.title
		description: req.body.description
	})
	newArticle.save()
	res.redirect('/')
})

articlesRouter.get('/:id', (req, res) => {
	Article.findOne({ '_id': req.params.id}, (err, article) => {
		res.render('articles/show', article)
	})
})

module.exports = articlesRouter