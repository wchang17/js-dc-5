const express = require('express')
const Article = require('../models/Article.js')

const appRouter = express.Router() //builds an app in our express app

appRouter.get('/', (req, res) =>{
	Article.find({}, function(err, articles) {
		res.render('index', {articles})
	})
})

module.exports = appRouter