let form = document.querySelector('#form')
let submit = document.querySelector('#submit')
let delete = document.querySelector('#delete')
let source = document.querySelector('#list')

let DoHW = {
	toDo : 'Do HW'
	isComplete : false
}

let Sleep = {
	toDo : 'Sleep'
	isComplete : false
}

let Eat = {
	toDo : 'Sleep'
	isComplete : false
}

class todos {
	constructor( isComplete ) {

		this.isComplete = true

	}

	completeTask : function() {
		if (this.isComplete === true) {
			console.log('Done')
		} else {
			console.log('Working on it')
		}
	}
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


// let form = document.querySelector('#form')
// let submit = document.querySelector('button')
// let source = document.querySelector('#list')

// let data = {

// 	todos: ['Do HW', 'Sleep', 'Eat', 'Work']

// 	}

// submit.addEventListener('click', function(e){
// e.preventDefault()

// let value = document.querySelector('input').value
// data.todos.push(value)
// console.log(data)


// let listTemplate = Handlebars.compile( source.innerHTML )
// let renderedTemplate = listTemplate( data )
// document.querySelector('#app').innerHTML = renderedTemplate

// })