 /*
  * Third Promise
  *
  * Now that we've used promises to return a list of stats from a given pokemon,
  * we want to use promises to return a list of all moves for a given pokemon.
  *
  * Refer back to the previous exercise if you get stuck.
  *
  * The final move list for Bulbasaur should look like this:
  *
  * [ 'razor-wind', 'swords-dance', 'cut', 'bind', 'vine-whip', 'headbutt', 'tackle', 'body-slam', 'take-down', 'double-edge', 'growl', 'strength', 'mega-drain', 'leech-seed', 'growth', 'razor-leaf', 'solar-beam', 'poison-powder', 'sleep-powder', 'petal-dance', 'string-shot', 'toxic', 'rage', 'mimic', 'double-team', 'defense-curl', 'light-screen', 'reflect', 'bide', 'sludge', 'skull-bash', 'amnesia', 'flash', 'rest', 'substitute', 'snore', 'curse', 'protect', 'sludge-bomb', 'mud-slap', 'giga-drain', 'endure', 'charm', 'swagger', 'fury-cutter', 'attract', 'sleep-talk', 'return', 'frustration', 'safeguard', 'sweet-scent', 'synthesis', 'hidden-power', 'sunny-day', 'rock-smash', 'facade', 'nature-power', 'ingrain', 'knock-off', 'secret-power', 'grass-whistle', 'bullet-seed', 'magical-leaf', 'natural-gift', 'worry-seed', 'seed-bomb', 'energy-ball', 'leaf-storm', 'power-whip', 'captivate', 'grass-knot', 'venoshock', 'round', 'echoed-voice', 'grass-pledge', 'grassy-terrain', 'confide' ]
  *
  */

const request = require('request-promise')

request.get('http://pokeapi.co/api/v2/pokemon/1')
  .then( response => JSON.parse(response) )
  .then( data => data.moves )
  .then( moves => moves.map( move => move.move.name) )
  .then( moveList => console.log(moveList) )