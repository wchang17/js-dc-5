/*

  In-class Exercise 02
  Independent coding

  Prompt:

If we list the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all multiples of 3 or 5 below 1000.

*/

let ceiling = 10
let total = 0

for ( let i = 1; i < ceiling; i++ ) {
  if ( i % 3 === 0 || i % 5 === 0) {
    total += i
  }
}

console.log( total )
