/*
  While Loops
  In-class Exercise #2
  Code Independently, then together
*/

// Create an array with the names 'curly', 'lary' and 'moe'
let names = ['curly', 'lary', 'moe']

/*
Create a simple while loop that iterates over the array of names and `console.log`s them
*/

// for (let i = 0; i < names.length; i++) {
//   console.log( names[ i ] )
// }

// let x = names.length - 1
// while ( x >= 0 ) {
//   console.log( names[ x ] )
//   x--
// }


/*
Create a simple while loop that iteratoes over each name in the array of names. Inside your loop, if the name is 'curly', then `console.log` 'curly is the best', otherwise `console.log` the current name is one of the three stooges
*/

// let x = names.length - 1
// while ( x >= 0 ) {
//
//   if ( names[ x ] === 'curly' ) {
//     console.log( 'CURLY IS THE BEST' )
//   } else {
//     console.log( 'some other, less cool stooge' )
//   }
//
//   x--
//
// }



// Create a `do while` loop that does the same as the abovel
let i = names.length - 1
do {
  if ( names[ i ] === 'curly' ) {
    console.log('CURLY IS THE BEST')
  } else {
    console.log('one of the other 3 stooges')
  }

  i--
} while ( i >= 0 )
