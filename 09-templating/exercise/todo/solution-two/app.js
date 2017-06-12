var data = {
  todos: [{
    title: 'Learn HTML',
    description: 'maybe watch codecademy, do some reading, build a website'
  }, {
    title: 'Learn CSS',
    description: 'what is css for? what are selectors? who knows ...'
  }, {
    title: 'Learn jQuery',
    description: 'no more of this vanilla javascript stuff'
  }]
}

let app = document.querySelector('#app')
let listTemplateSource = document.querySelector('#to-do-template')
let listTemplate = Handlebars.compile( listTemplateSource.innerHTML )

let singleToDoSource = document.querySelector('#single-to-do-template')
let singleToDoTemplate = Handlebars.compile( singleToDoSource.innerHTML )

let newToDoSource = document.querySelector('#new-to-do-template')
let newToDoTemplate = Handlebars.compile( newToDoSource.innerHTML )

setup()

function setup() {
  renderListView()

  let nav = document.querySelector('nav')
  nav.addEventListener('click', e => {
    e.preventDefault()

    if (e.target.tagName !== 'A') {
      return
    }

    if ( e.target.classList.contains('js-see-list') ) {
      renderListView()
    }

    if ( e.target.classList.contains('js-new') ) {
      renderNewView()
    }
  })

  app.addEventListener('click', e => {
    e.preventDefault()

    if (e.target.tagName !== 'A') {
      return
    }

    let index = parseInt(e.target.dataset.index, 10)
    let todo = data.todos[ index ]
    renderSingleView( todo )
  })
}

function renderListView() {
  app.innerHTML = listTemplate( data )
}

function renderSingleView( todo ) {
  app.innerHTML = singleToDoTemplate( todo )
}

function renderNewView() {
  app.innerHTML = newToDoTemplate()

  document.querySelector('button').addEventListener('click', function( e ) {
    e.preventDefault()

    let toDo = {
      title: document.querySelector('#newToDo').value,
      description: document.querySelector('#toDoDescription').value
    }

    data.todos.push( toDo )
    renderSingleView( toDo )

  })
}
