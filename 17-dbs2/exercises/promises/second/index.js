 /*
  * Second Promise
  *
  * We want to use `request` and the pokemon API to return a list of the stats
  * associated with a pokemon (in this case, Bulbasaur).
  *
  */

const request = require('request-promise')

request.get('http://pokeapi.co/api/v2/pokemon/1')
	.then( response => JSON.parse(response) )
	.then( data => data.stats )
	.then( stats => stats.map( stat => stat.stat.name) )
	.then( statList => console.log(statList) )