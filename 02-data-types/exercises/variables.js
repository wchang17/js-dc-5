/*
  Variables

  1. Declaring Variables
  2. Invoking/calling Variables
  3. Checking type with typeof()
  4. Type conversion
*/

/*
  Instructions: Uncomment lines of code and run this file using `node variables.js`
*/


//
// 1. Declaring Variables
//    A. Declaring a variable
//    B. Assigning a value to a variable
//

// A. Declaring a variable

// let myFirstVariable = 'Hello World' //can change later
// const mySecondVariable = 5 // cannot change later


// //
// // 2. Invoking/Calling our variables
// //
// console.log( myFirstVariable ) // => 'Hello World'
// console.log( mySecondVariable )

// myFirstVariable = "Hello Class"
// // mySecondVariable = 6

// console.log( myFirstVariable ) // => 'Hello World'
// console.log( mySecondVariable ) // => error


//
//3. Checking type with typeof()
//
// const a = 1
// console.log( typeof( a ) ) // => 'number'

// const b = 'hey'
// console.log( typeof( b ) ) // => 'string'

// const c = true
// console.log( typeof( c ) ) // => 'boolean'

// const d
// console.log( typeof( d ) ) // => 'undefined'



//
//4. Type conversion
//
// var e = 5
// console.log( typeof( e ) ) // => 'number'
//
// e = e.toString()
// console.log( typeof( e ) ) // => 'string'
//
// e = parseInt(e)
// console.log( typeof( e ) ) // => 'number'
//
// e = e + '0'
// console.log( typeof( e ), e ) // => 'string' 50
//
// e = undefined
// console.log( typeof( e ) ) // => 'undefined'


//
// Exercise
//

// 1. Save a string into a variable and console.log it
const string = "Hi"
console.log(string)
// 2. Save a number into a variable and console.log it
const eight = 8
console.log(eight)
// 3. Save a boolean into a variable and console.log it
const cool = true
console.log(cool)
// 4. Add two numbers together and save the result to a variable
const num1 = 3
const num2 = 7
const adding = num1 + num2
console.log(adding)

// 5. Declare a variable and assign a string of your first name to it; declare another variable and assign a string of your last name to it; declare a third variable and assign it the value of the first variable + the second variable and console.log it
const firstName = "Debby"
const lastName = "Chang"
const fullName = firstName + " " + lastName
console.log(fullName)
