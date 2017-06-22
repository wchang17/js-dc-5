const express = require('express')

const Article = require('../models/Article.js')

const articleRouter = express.Router()

// define our routes
// url: localhost:3000/articles/new
articleRouter.get('/new', ( req, res ) => {
  res.render('articles/new')
}).post('/new', ( req, res ) => {

  const newArticle = new Article({
    url: req.body.url,
    author: req.body.author,
    title: req.body.title,
    description: req.body.description
  })

  newArticle.save()

  res.redirect('/')

})

// localhost:3000/articles/aeiwurq3o749849982o3
articleRouter.get('/:id', ( req, res ) => {
  Article.findOne({ '_id': req.params.id }, ( err, article ) => {
    res.render('articles/show', article)
  })
})

module.exports = articleRouter
