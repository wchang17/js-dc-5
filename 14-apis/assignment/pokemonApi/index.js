// Weather data
let pokemon = {
id: '',
name: '',
weight: '',
height: ''
}

// Compile the template outside of the function, so that we only do it
// once, instead of on every render.
let app = document.querySelector('#pokemon')
let templateSource = document.querySelector('#pokemon-template').innerText
let template = Handlebars.compile(templateSource)

function renderPokemon() {
  let pokemonHtml = template(pokemon)
  app.innerHTML = pokemonHtml
}

// First render
renderPokemon()

// Setup Listeners
let searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function( e ) {
  e.preventDefault()

  // Get the values enetered by the user
  let pokeId = document.querySelector('input[name="id"]').value

  // 1. Make the request to poke API
  let request = new XMLHttpRequest()
  request.onreadystatechange = handleRequest

  request.open('GET', `http://pokeapi.co/api/v2/pokemon/${pokeId}`)
  request.send()

  // 2. update 
  function handleRequest() {
    if ( request.readyState === 4 ) {
      let response = JSON.parse( request.response )

      console.log(response)
      pokemon = {
        id: response.id,
        name: response.name,
        weight: response.weight,
        height: response.height
      }
    }
  }

  // 3. Render template
  renderPokemon()

})