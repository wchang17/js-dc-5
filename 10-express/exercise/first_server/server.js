const express = require('express')
const app = express() //has all the scaffolding for the server

app.get('/', function(request, response) {
	response.send('hello world')
}) //method of the app object. Takes 2 parameters: a string and a function. The function takes 2 arguments: the request and the response.

app.get('*', function(req, res) {
	res.send('404!!!')
})

app.listen(3000, function() {
	console.log('Your app is running on Port 3000')
}) //starting up the server. We want out app to listen on port 3000. Pick any 4 digit number above 2000

//run nodemon server.js so that you kill and restart the server each time you save your code