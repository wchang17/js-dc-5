const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokemonSchema = new Schema({
  name: String,
  attack: Number,
  defense: Number,
  evolveLevel: Number,
  type: String,
  moves: Array,
})

module.exports = mongoose.model('Pokemon', pokemonSchema)
