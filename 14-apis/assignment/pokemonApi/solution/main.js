const form = document.querySelector('#form')
let pokemon = {
  name: '',
  type: []
}
let app = document.querySelector('#app')
let templateSource = document.querySelector('#template-single')
let template = Handlebars.compile( templateSource.innerHTML )

form.addEventListener('submit', e => {
  e.preventDefault()
  let pokeId = e.target.querySelector('input').value
  getPokemon( pokeId )
})

function getPokemon( id ) {
  let request = new XMLHttpRequest()
  request.addEventListener('load', e => {
    pokemon = JSON.parse( request.response )
    renderView()
  })
  request.open('GET', `http://pokeapi.co/api/v2/pokemon/${id}/`)
  request.send()
}

function renderView() {
  app.innerHTML = template( pokemon )
}
