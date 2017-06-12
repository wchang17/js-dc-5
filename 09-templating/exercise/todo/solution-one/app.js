/*
 * Bonus #1
 * Mark to dos as completed and delete to dos.
 *
 * In order to do this, we'll need to adapt our data a bit
 * so that to dos are represented by an object in our todos 
 * array.
 *
 * Once we've done that, we need to change our template to
 * include lines to delete or complete a to do.
 */

const data = {
  todos: [
    {
      content: 'Learn HTML',
      completed: false
    },
    {
      content: 'Learn CSS',
      completed: false
    },
    {
      content: 'Learn jQuery',
      completed: false
    }
  ]
}

function setup() {
  renderView()

  document.querySelector('#form').addEventListener('submit', addTodo)
  document.querySelector('#app').addEventListener('click', handleClick)
}

function renderView() {
  let app = document.getElementById('app')
  let templateSource = document.getElementById('to-do-template')
  let template = Handlebars.compile( templateSource.innerHTML )
  let renderedTemplate = template( data )
  app.innerHTML = renderedTemplate
}

function addTodo( e ) {
  e.preventDefault()
  let todoInput = e.target.querySelector('input')

  let newTodo = {
    content: todoInput.value,
    completed: false
  }
  data.todos.push( newTodo )
  todoInput.value = ''

  renderView()
}

function handleClick( e ) {
  e.preventDefault()

  if (!e.target.tagName === 'A') {
    return
  }

  if ( e.target.innerText === 'complete' ) {
    let index = parseInt( e.target.dataset.index )
    data.todos[ index ].completed = !data.todos[ index ].completed
  }

  if ( e.target.innerText === 'delete' ) {
    let index = parseInt( e.target.dataset.index )
    data.todos.splice( index, 1 )
  }

  renderView()

}

setup()
