let form = document.querySelector('#form')
let submit = document.querySelector('button')
let input = document.querySelector('input')

let data = {

	todos: ['Do HW', 'Sleep', 'Eat']

	}

submit.addEventListener('click', function(e){
// e.preventDefault()

let value = input.value
data['todos'].push(value)
console.log(data.todos)
})


let source = document.querySelector('#list')
let listTemplate = Handlebars.compile( source.innerHTML )
let renderedTemplate = listTemplate( data )
document.querySelector('#app').innerHTML = renderedTemplate