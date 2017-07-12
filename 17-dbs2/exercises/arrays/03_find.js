/*
* Array.prototype.find()
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  *
  * The find() method returns the value of the first element in the array that
  * satisfies the provided testing function.
  *
  * Syntax:
  * arr.find(element => {
  *   element >= 30
  * }
  * 
 */


let numbers = [3, 7, 5, 1, 9, 20]
let favNumber = numbers.find(x => x > 2000000)
console.log(favNumber)

/*
 * Student Activity:
 *
 * Find Elmo in the array of students
 */

let students = [
  { name: 'Big Bird', grade: 12 },
  { name: 'Elmo', grade: 9 },
  { name: 'Ernie', grade: 10 }
]

students.find(x => x.name === 'Elmo')

