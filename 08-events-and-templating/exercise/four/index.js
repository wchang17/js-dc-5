/*

Exercise 04

*/

var listItem = document.getElementsByTagName('li')[0]
var link = document.getElementsByTagName('a')[0]

function eventHandler( event ) {
  event.preventDefault()

  console.log( "you clicked on " + event.target.tagName.toLowerCase() )


}

link.addEventListener("click", eventHandler)
listItem.addEventListener("click", eventHandler)
