const express = require('express')
const hbs = require('express-handlebars') // handlebars is a plugin for our server.

const app = express()

app.engine('handlebars', hbs({
	defaultLayout: 'main'
}) ) // tells express we want to use a plugin. takes 2 params: indentifier for plugin and plugin itself. (like installing plugin)

app.set('view engine', 'handlebars') //we want express to render our views for us through handlebars (like activating plugin)

app.get('/', function(req, res) {
	res.render('home', {title: 'Test'}) //passing data in the template
})

app.listen(3000, function() {
	console.log('listening')
})