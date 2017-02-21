// Model
var data = {
  todos: [
    'Learn HTML',
    'Learn CSS',
    'Learn jQuery'
  ]
}


// View
function renderView() {
  var app = document.getElementById('app')
  var templateSource = document.getElementById('to-do-template')
  var template = Handlebars.compile( templateSource.innerHTML )
  var renderedTemplate = template( data )
  app.innerHTML = renderedTemplate
}


// Controller

function setup() {
  renderView()

  document.getElementById('form').addEventListener('submit', addTodo)
}

function addTodo( e ) {
  e.preventDefault()
  var todoInput = e.target.querySelector('input')

  var newTodo = todoInput.value
  data.todos.push( newTodo )
  todoInput.value = ''

  renderView()
}

window.onload = setup
