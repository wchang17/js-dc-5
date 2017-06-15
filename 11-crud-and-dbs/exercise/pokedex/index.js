const express = require('express')
const hbs = require('express-handlebars')

const app = express()

app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', ( req, res ) => {
  res.render('index')
})

app.listen(3000)
