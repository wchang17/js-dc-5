This is the Pokeapi run by digital ocean: https://pokeapi.co

Read up on the API documentation to get familiar with the different requests you can make to the API There is a lot of information that you can get back on berries, pokemon, battles, encounters, evolutions

We want to build a client side only application to let users explore pokemon:

1. create an `index.html` and include a reference to handlebars and a reference to a JS file where you will do your work.
2. write a template to display a single pokemon, include at least it's name and it's type.
3. include a form in your `index.html` for users to input an id of a pokemon they'd like to look up.
4. when a user submits their form, get the ID from your form and use AJAX to get the data for a pokemon with the ID from the pokemon API
5. use the data you've retrieved from the pokemon API to render your pokmeon template, showing the user the data on the pokemon

Bonus:
If you used `XMLHttpRequest()`, then try it with `fetch()`; if you used `fetch()`, then try it with `XMLHttpRequest()`
