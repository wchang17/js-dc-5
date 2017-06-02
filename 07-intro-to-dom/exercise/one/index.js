/*

In-class Exercise 1

*/

console.log( 'Hello World from index.js' )

/*

Getting stuff from the DOM

*/


// Get #title
var title = document.getElementById('title')
// or document.querySelector('title')

// const title = document.querySelector('#title')
// console.dir(title)
// console.log(title.textContent)


// Get the text of #title
// console.log( title ) // will print the html element
// console.log( title.textContent ) // prints the text
// console.log( typeof title.textContent ) // string



//Exercises
//1. Get all paragraphs on the page

// const getPara = document.querySelectorAll('p')
// console.log(getPara)


//2. Get all items with the class .paragraph


// const getParaClass = document.querySelectorAll('.paragraph')
// console.log(getParaClass)

//3. get the item with the id of #first-paragraph

// const getParaId = document.querySelector('#first-paragraph')
// console.log(getParaId)

/*

Setting stuff in the DOM

*/

// Change the text of #title
title.textContent = 'New Test Title' // replaces the current title
title.textContent += ' test' // adds to teh curent title


// Change the styeling of an element
console.dir( title.style ) // object representing the element's styling
title.style.backgroundColor = 'blue'
title.style.padding = '2em'
title.style.width = '100%'
title.style.textAlign = 'center'
title.style.color = 'white'

/*

Creating DOM elements

*/

var link = document.createElement('a') // creates a new element (in memory)
link.href = "/" // sets the href property of the <a> element
link.id = 'myLink' // sets the ID property
link.textContent = "This is a link I made"
//
console.log( link ) // <a href="/" id="myLink">This is a link I made</a>

/*

Adding and removing elements from the page
via append, remove

*/

// Appending
let para = document.getElementById('first-paragraph')
para.appendChild( link )
// link will be appended (added to the end) as a child (so within the p element)


// Removing
// link.remove() // removes the element
// para.removeChild(link) // removes a child element
