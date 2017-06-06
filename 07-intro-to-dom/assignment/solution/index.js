/*

This homework exercise will walk you through the steps to build a table of contents for the article in index.html.

The required part of this assignment is to generate a static table of contents. The bonus, if you have time, is to make it dynamic, so that each item in the table of contents links to the corresponding paragraph of text in the article body.

Before you get started, you should familiarize yourself with the HTML document that you'll be working with

*/


/*

Get the DOM nodes for the table of contents and the article body and save them both as variables

*/

const tableOfContents = document.getElementById('table-of-contents')
const article = document.querySelector('#article-body')


/*

get an array of every heading in the document and store them in a variable called documentHeadings

*/

/*
 * Here I use querySelectorAll on the document; because I already have the
 * article, I could also use querySelectorAll on the article:
 * const headings = article.querySelectorAll('heading')
 */
const headings = document.querySelectorAll('.heading')



/*

To generate our table of contents we need to do a couple of things:

1. We need to loop through our documentHeadings array
2. Inside our loop, we need to clone the curent element from the documentHeadings array and append it to the table of contents element

*/

// for ( let i = 0; i < headings.length; i++ ) {
  // let clone = headings[ i ].cloneNode(true)
  // tableOfContents.appendChild( clone )
// }

/*

Bonus, make each item of the ToC a link to that heading on the page.

*/

/*

1. Modify each heading on the page so that it has a unique id (or figure out a way to make this part of your loop in part 2! Bonus bonus!)

*/

// One solution is to go through the HTML file and add ids to each heading (h1
// or h2) - that would be perfectly valid. I am lazy and did not do that.

/*

While looping through each item in your documentHeadings array:
1. create an <a> element
2. give it an href attribute that is the same as the ID of the current documentHeading
3. then append it to the table of contents element

hint: you want what you insert to look something like this:

<a href="#firstHeading"><h1>Lorem ipsum dolor sit amet</h1></a>

*/

for ( let i = 0; i < headings.length; i++ ) {
  let clone = headings[ i ].cloneNode(true)

  // assing a unique ID to each heading based on the text content
  headings[ i ].id = headings[ i ].textContent.toLowerCase().split(' ').join('-')

  let link = document.createElement('a')
  link.href = '#' + headings[ i ].id

  link.appendChild( clone )
  tableOfContents.appendChild( link )
}
