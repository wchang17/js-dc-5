const express = require('express')
const app = express()


// app.get() how we respond to get requests
// app.post() how we respond to post requests
// /:param makes a request at the root URL

app.get('/:name', function(req, res) {
	let name = req.params.name
	res.send('hello ' + name)
})

app.post('/', function(req, res) {
	res.send('hello world')
})

app.listen(3000, function() {
	console.log('listening on port 3000')
})