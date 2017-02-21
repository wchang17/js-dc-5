// Model
var pokemon = {
  name: '',
  abilities: [],
  moves: [],
  weight: ''
};

var template;
$(document).ready(function() {
  var templateSource = $('#poke-template').html();
  template = Handlebars.compile(templateSource);
});

function renderPokemon() {
  var pokeHtml = template(pokemon);
  $('#pokemon').html(pokeHtml);
}

$(document).ready(function() {
  // First render the view

  // Make the request to PokeAPI

  // Update the model

  // Rerender the View

})
