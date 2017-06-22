const express = require('express')
const mongoose = require('mongoose')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://zakk:js_dc_is_the_best@pokemon-shard-00-00-vzytr.mongodb.net:27017,pokemon-shard-00-01-vzytr.mongodb.net:27017,pokemon-shard-00-02-vzytr.mongodb.net:27017/hackerwall?ssl=true&replicaSet=Pokemon-shard-0&authSource=admin')

const Article = require('./models/Article.js')

const appRoutes = require('./routes/index.js')
const articlesRouter = require('./routes/articles.js')

const app = express()

app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', appRoutes)
app.use('/articles', articlesRouter)

app.listen(3000)
