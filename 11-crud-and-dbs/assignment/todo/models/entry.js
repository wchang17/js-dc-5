//model lives on the server. the collection lives on the DB

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//this creates a class
const entrySchema = new Schema({
	content: String,
	name: String
})

//this is our model
const Entry = mongoose.model('Entry', entrySchema)

//export it so you can access it in other files
module.exports = Entry