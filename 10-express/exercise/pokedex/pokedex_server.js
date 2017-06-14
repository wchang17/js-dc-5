// Express is a library or framework
// need one root for home page and one for the separate pokemon

const express = require('express')
const hbs = require('express-handlebars') 
const app = express()

app.get('/', function(req, res) {
	res.send('Hi There')
})

// app.engine('handlebars', hbs({
// 	defaultLayout: 'main'
// }) ) // tells express we want to use a plugin. takes 2 params: indentifier for plugin and plugin itself. (like installing plugin)

// app.set('view engine', 'handlebars') //we want express to render our views for us through handlebars (like activating plugin)

// app.get('/', function(req, res) {
// 	res.render('home', {title: 'Test'}) //passing data in the template
// })

app.listen(3000, function() {
	console.log('listening')
})