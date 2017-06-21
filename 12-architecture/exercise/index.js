const express = require('express')
const mongoose = require('mongoose')
const hbs = require('express-handlebars')
const bodyParser = require('bodyParser')

mongoose.connect('mongodb://admin:admin@pokedex-shard-00-00-emqy4.mongodb.net:27017,pokedex-shard-00-01-emqy4.mongodb.net:27017,pokedex-shard-00-02-emqy4.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=pokedex-shard-0&authSource=admin')


const Article = require('./models/Article.js')
const appRoutes = require('./routes/index.js')
const articleRouter = require('./routes/articles.js')

const app = express()

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use('/', appRoutes)
app.use('/articles', articlesRouter)
app.use(bodyParser.urlencoded({extended: true})) //includes the body of the req in the template


app.listen(3000)