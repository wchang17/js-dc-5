/*
* Array.prototype.forEach()
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  *
  * The forEach() method executes a provided function once for each array element.
  * 
  * Syntax:
  * arr.forEach( (currentValue, index, array) => {
  *   //your iterator
  * })
  * 
 */


// let numbers = [20, 34, 28, 98, 12]
// numbers.forEach((number, i) => {
//   console.log(`Numbers ${i}: ${number}`)
// })


/*
  * Student Activity:
  * Use .forEach() to loop through the following array of strings to print out the poem. You can add '\n` to a string to represent a new line.
  *
  * For what values of i will you need to add this new line character?
 */

let poemWords = ['Eeny', 'meeny', 'miny', 'moe', 'Catch', 'a', 'tiger', 'by', 'the', 'toe', 'If', 'he', 'hollers', 'let', 'him', 'go', 'Eeny', 'meeny', 'miny', 'moe']

let poem = ''

poemWords.forEach((word, i) => {
  poem += word
  poem += " "

  if (i === 3 || i===9 || i === 15) {
    poem += '\n'
  }
})

console.log(poem)