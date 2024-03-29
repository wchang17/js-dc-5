/*
 * Array.prototype.map()
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  *
  * The map() method creates a new array with the results of calling a provided
  * function on every element in the calling array.
  *
  * Syntax:
  * let newArray = oldArray.map(callback)
 */

 // let numbers = [3, 7, 5, 1, 9, 20, 6000000, 5000000]

 // let numsTimesTwo = numbers.map(x => x * 2)

 // console.log(numbers)
 // console.log(numsTimesTwo)



/*
 * Student Activity:
 *
 * Create a new array of students where everyone's grade is increased by 1
 */


let students = [
  { name: 'Big Bird', grade: 12 },
  { name: 'Elmo', grade: 9 },
  { name: 'Grover', grade: 9 },
  { name: 'Cookie Monster', grade: 10 },
  { name: 'Bert', grade: 10 },
  { name: 'Ernie', grade: 10 }
]


let gradePlusOne = students.map(x => x.grade++)

console.log(gradePlusOne)