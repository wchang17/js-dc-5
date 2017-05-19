/*
  While Loops
  In-class Exercise #2
  Code Independently, then together
*/

// Create an array with the names 'curly', 'lary' and 'moe'

let example = ['curly','lary','moe']


/*
Create a simple while loop that iterates over the array of names and `console.log`s them
*/
// for (let i = 0; i < example.length; i++) {
// 	console.log( example[i])
// }

// let x = example.length - 1
// while ( x >= 0) {

// console.log(example[x])

// x--
// }



/*
Create a simple while loop that iterates over each name in the array of names. Inside your loop, if the name is 'curly', then `console.log` 'curly is the best', otherwise `console.log` the current name is one of the three stooges
*/

// let x = example.length - 1

// while ( x >= 0) {

// if ( example[x] === "curly") {
// 	console.log("curly is the best")
// } else {
// 	console.log(example[x])
// }

// x--
// }


// Create a `do while` loop that does the same as the above
let x = example.length - 1

do {
if ( example[x]=== "curly") {

	console.log("curly is the best")

} else {
	console.log("other")
}
x--
} while( x >= 0)
