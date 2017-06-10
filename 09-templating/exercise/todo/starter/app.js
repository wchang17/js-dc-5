let form = document.querySelector('#form')
let submit = document.querySelector('button')
let source = document.querySelector('#list')

let data = {

	todos: ['Do HW', 'Sleep', 'Eat', 'Work']

	}

submit.addEventListener('click', function(e){
e.preventDefault()

let value = document.querySelector('input').value
data.todos.push(value)
console.log(data)


let listTemplate = Handlebars.compile( source.innerHTML )
let renderedTemplate = listTemplate( data )
document.querySelector('#app').innerHTML = renderedTemplate

})