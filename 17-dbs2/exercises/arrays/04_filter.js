/*
 * Array.prototype.filter()
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  *
  * The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  * 
  * Syntax:
  * let newArray = oldArray.filter(callback)
 */

 let numbers = [3, 7, 5, 1, 9, 20, 6000000, 5000000]
let favNumber = numbers.filter(x => x > 2000000)
console.log(favNumber)

/*
 * Student Activity:
 *
 * Filter for all students in grade 10
 */


let students = [
  { name: 'Big Bird', grade: 12 },
  { name: 'Elmo', grade: 9 },
  { name: 'Grover', grade: 9 },
  { name: 'Cookie Monster', grade: 10 },
  { name: 'Bert', grade: 10 },
  { name: 'Ernie', grade: 10 }
]

let sophmores = students.filter( students => student.grade === 10)
console.log(sophmores)
