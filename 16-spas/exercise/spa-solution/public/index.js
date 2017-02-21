// Model
var data = []

// View
function renderView() {
  var app = document.getElementById('app')
  var templateSource = document.getElementById('todo-list')
  var template = Handlebars.compile( templateSource.innerHTML )
  var renderedTemplate = template( data )
  app.innerHTML = renderedTemplate

  var todos = document.querySelectorAll('.js-todo')

  for (var i = 0; i < todos.length; i++) {

    todos[i].addEventListener('click', updateTodos)

  }

}


// Controller

function setup() {

  getTodos()
  renderView()

  document.querySelector('form').addEventListener('submit', createTodo)

}

// get all todos
function getTodos() {

  var getAllTodos = request('GET', '/todos', function( todos ) {

    data = JSON.parse( todos )
    renderView()

  })

  getAllTodos.send()

}

// add a todo
function createTodo( e ) {

  e.preventDefault()
  var todoTitle = e.target.querySelector('input')

  newTodo = {
    "title": todoTitle.value,
    "isCompleted": false,
    "isDeleted": false
  }

  var createTodoRequest = request( 'POST', '/todos', function( todo ) {

    todoTitle.value = ''
    getTodos()

  })

  createTodoRequest.send( encodeURI( "data=" + JSON.stringify( newTodo ) ) )

}

// update todo
function updateTodos( e ) {
  e.preventDefault()

  var todo, method
  var todoId = e.target.parentElement.dataset.id

  // get todo from local data
  for (var i = 0; i < data.length; i++) {

    if ( data[i]._id === todoId ) {
      todo = data[i]
    }

  }

  // updpate todo before sending
  if ( e.target.className === 'js-complete' ) {

    todo.isCompleted ? todo.isCompleted = false : todo.isCompleted = true
    todo.update = true

  } else if ( e.target.className === 'js-delete' ) {

    todo.toDelete = true

  }

  var updateTodoRequest = request( 'POST', '/todos', function() {

    getTodos()

  })

  updateTodoRequest.send( encodeURI( "data=" + JSON.stringify( todo ) ) )

}

// Our AJAX request helper
function request( method, url, cb ) {

    var r = new XMLHttpRequest()

    r.open( method, url, true )
    if ( method === 'POST' ) {
      r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    }

    r.onreadystatechange = function() {

      if ( r.readyState !== 4 || r.status !== 200 ) return
      if ( typeof cb == 'function' ) cb( r.response )

    }

    return r

}

window.onload = setup
