/*

Exercise Two
The event object

*/

// let firstButton = document.querySelector('.js-button')

// firstButton.addEventListener('click', function(event){
// 	console.log(event)

// })

/*

Get an array of all the buttons on the screen. Write an event handler that just
`console.log`s "you clicked a button" when called. Loop over your array of
buttons and attach our event handler to each button

*/


let allButtons = document.querySelectorAll('.js-button')

function eventHandler() {
	console.log('You clicked a button!')
}

for(let i=0; i < allButtons.length; i++) {
	allButtons[i].addEventListener('click', eventHandler) 
}


/*

Refactor your event handler so that it `console.log`s the event object. Poke
around the event object

*/

// function eventHandler(event) {
// 	console.log(event)
// }


/*

Refactor your event handler so that it `console.log`s the target subobject

*/

// function eventHandler(event) {
// 	console.log(event.target)
// }

/*

Student activity:
Do one more refactor of the event handler. Your event handler should:

1. get the increment/decrement value from the event target
2. turn that value into a number
3. add the increment/decrement value to the current value of counterIndex and
update the page

Hint: any data that we define in our html with data-* will be in our elements
`dataset` property

*/

// let title = document.querySelector('h1')
// let counterIndex = 0

// title.innerText = `Counter: ${counterIndex}`

// function eventHandler(event) {
// 	let incrementer = parseInt(event.target.dataset.incrementer, 10)
// 	counterIndex += incrementer
// 	title.innerText = `Counter: ${counterIndex}`
// }

//This adds an event listener to the target (only the button and not the div)
let buttons = document.querySelector('.js-buttons')
let title = document.querySelector('h1')
let counterIndex = 0

buttons.addEventListener('click', function(e) {
	if(e.target.tagName==='BUTTON') {
		let incrementer = counterIndex += parseInt(event.target.dataset.incrementer, 10)
		title.innerText = `Counter: ${counterIndex}`
	}
})


