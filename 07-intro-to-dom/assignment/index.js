/*

This homework exercise will walk you through the steps to build a table of contents for the article in index.html.

The required part of this assignment is to generate a static table of contents. The bonus, if you have time, is to make it dynamic, so that each item in the table of contents links to the corresponding paragraph of text in the article body.

Before you get started, you should familiarize yourself with the HTML document that you'll be working with

*/


/*

Get the DOM nodes for the table of contents and the article body and save them both as variables

*/

// const hi = document.querySelector('h1')
// console.log(hi.textContent)


const toc = document.querySelector('#table-of-contents')
console.log(toc)

const body = document.querySelector('body')
console.log(body)


/*

get an array of every heading in the document and store them in a variable called documentHeadings

*/

const documentHeadings = document.querySelectorAll('.heading')
console.log(documentHeadings)


/*

To generate our table of contents we need to do a couple of things:

1. We need to loop through our documentHeadings array
2. Inside our loop, we need to clone the curent element from the documentHeadings array and append it to the table of contents element

*/

let clones = []

for( let i=0; i<documentHeadings.length; i++) {

let title = documentHeadings[i].textContent
clones.push(title)

}

const list = document.createElement('ul')
const titleList = clones.join(" ")

console.log(list)

list.append(titleList)

toc.append(list)

// const div = document.createElement('div')

// toc.appendChild(div)
// const div = document.createElemnt('div')





/*

Bonus, make each item of the ToC a link to that heading on the page.

*/

/*

1. Modify each heading on the page so that it has a unique id (or figure out a way to make this part of your loop in part 2! Bonus bonus!)

*/



/*

While looping through each item in your documentHeadings array:
1. create an <a> element
2. give it an href attribute that is the same as the ID of the current documentHeading
3. then append it to the table of contents element

hint: you want what you insert to look something like this:

<a href="#firstHeading"><h1>Lorem ipsum dolor sit amet</h1></a>

*/
