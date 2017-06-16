//model is a reporesentation of data

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//pass object in schema
//a schema is a scaffold for what we are defining
const pokemonSchema = new Schema({
	name: String, 
	type: String,
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema) //how we interact with the pokemon collection

let pikachu = new Pokemon ({
	name: 'Pikachu',
	type: 'Electric'
})

pikachu.save()

console.log(pikachu)

module.exports = Pokemon