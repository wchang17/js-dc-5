let form = document.querySelector('#form')
let submit = document.querySelector('#submit')
let deleteButton = document.querySelector('#delete')
let source = document.querySelector('#list')

let data = {
    todos: [
    {
    title : 'Do HW'
    isComplete : false
    },
    {
        title : 'Sleep'
        isComplete : false
    },
    {
        title : 'Sleep'
        isComplete : false
    }
    ]
}

function renderList() {
    let listTemplate = Handlebars.compile( source.innerHTML )
    let renderedTemplate = listTemplate( data )
    document.querySelector('#app').innerHTML = renderedTemplate
}

function addToDo() {
submit.addEventListener('click', function(e){
    e.preventDefault()

    let value = document.querySelector('input').value
    data.todos.push(value)
    console.log(data)

    let newToDo =  {
    	title: value.value
    	isComplete: false
    }

    renderList()


})
}

function deleteToDo() {}

deleteButton.addEventListener('click', function(e){
    e.preventDefault()

    let value = document.querySelector('input').value 
    delete value
    console.log(data)


    renderList()

})
}